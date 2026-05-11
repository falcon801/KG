let state = { assets: [], people: [], filter: "", assignFor: null };

async function init() {
  const res = await fetch("./data.json?v=marvel-demo-1", { cache: "no-store" });
  state = { ...(await res.json()), filter: "", assignFor: null };
  render();
  document.getElementById("filter").addEventListener("input", (e) => {
    state.filter = e.target.value.toLowerCase();
    render();
  });
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
  document.getElementById("cancelModal").addEventListener("click", closeModal);
}

function filtered() {
  const f = state.filter;
  if (!f) return state.assets;
  return state.assets.filter(
    (a) =>
      a.tag.toLowerCase().includes(f) ||
      a.category.toLowerCase().includes(f) ||
      a.assignee.toLowerCase().includes(f)
  );
}

function render() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (const a of filtered()) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="dm-pill">${a.tag}</span></td>
      <td>${a.category}</td>
      <td>${a.brand} ${a.model}</td>
      <td>${a.status}</td>
      <td>${a.assignee || "-"}</td>
      <td><button class="dm-btn" type="button" data-id="${a.id}">Assign</button></td>
    `;
    tr.querySelector("button").onclick = () => openModal(a.id);
    tbody.appendChild(tr);
  }
}

function openModal(assetId) {
  state.assignFor = assetId;
  const m = document.getElementById("modal");
  const sel = document.getElementById("assignee");
  sel.innerHTML = state.people.map((p) => `<option value="${p}">${p}</option>`).join("");
  m.dataset.open = "true";
}

function closeModal() {
  document.getElementById("modal").dataset.open = "false";
  state.assignFor = null;
}

document.getElementById("saveAssign").addEventListener("click", () => {
  if (!state.assignFor) return;
  const name = document.getElementById("assignee").value;
  const a = state.assets.find((x) => x.id === state.assignFor);
  if (a) {
    a.assignee = name;
    a.status = "Assigned";
  }
  closeModal();
  render();
});

init();
