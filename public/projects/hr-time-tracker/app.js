let rows = [];

async function init() {
  const data = await (await fetch("./data.json?v=marvel-demo-1", { cache: "no-store" })).json();
  rows = data.exceptions.map((r) => ({ ...r }));
  document.getElementById("filter").addEventListener("input", render);
  document.getElementById("tabOpen").addEventListener("click", () => setTab("open"));
  document.getElementById("tabAll").addEventListener("click", () => setTab("all"));
  setTab("open");
}

let tab = "open";

function setTab(t) {
  tab = t;
  document.getElementById("tabOpen").setAttribute("aria-selected", t === "open");
  document.getElementById("tabAll").setAttribute("aria-selected", t === "all");
  render();
}

function visible() {
  const f = document.getElementById("filter").value.toLowerCase();
  return rows.filter((r) => {
    if (tab === "open" && r.status !== "Open") return false;
    if (!f) return true;
    return (
      r.employee.toLowerCase().includes(f) ||
      r.department.toLowerCase().includes(f) ||
      r.type.toLowerCase().includes(f)
    );
  });
}

function render() {
  const tb = document.getElementById("tbody");
  tb.innerHTML = "";
  for (const r of visible()) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.id}</td>
      <td>${r.employee}</td>
      <td>${r.department}</td>
      <td>${r.date}</td>
      <td>${r.type}</td>
      <td><span class="dm-pill ${r.status === "Open" ? "" : "dm-pill-ok"}">${r.status}</span></td>
      <td>${r.status === "Open" ? `<button type="button" class="dm-btn" data-id="${r.id}">Mark cleared</button>` : "-"}</td>
    `;
    const btn = tr.querySelector("button");
    if (btn) {
      btn.onclick = () => {
        const row = rows.find((x) => x.id === Number(btn.dataset.id));
        if (row) row.status = "Cleared";
        render();
      };
    }
    tb.appendChild(tr);
  }
}

init();
