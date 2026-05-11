let data = { interactions: [], lookups: { channels: [], outcomes: [], topics: [] } };
let view = "list";
let selectedId = null;
let draft = { channel: "", topic: "", summary: "", outcome: "", guest: "" };

async function init() {
  const res = await fetch("./data.json?v=marvel-demo-1", { cache: "no-store" });
  data = await res.json();
  draft = {
    channel: data.lookups.channels[0],
    topic: data.lookups.topics[0],
    summary: "",
    outcome: data.lookups.outcomes[0],
    guest: "",
  };
  document.getElementById("tabList").addEventListener("click", () => setView("list"));
  document.getElementById("tabNew").addEventListener("click", () => setView("new"));
  document.getElementById("saveNew").addEventListener("click", saveNew);
  bindDraft();
  render();
}

function bindDraft() {
  const set = (id, key) => {
    const el = document.getElementById(id);
    el.value = draft[key];
    el.oninput = () => {
      draft[key] = el.value;
    };
  };
  const sel = (id, key, options) => {
    const el = document.getElementById(id);
    el.innerHTML = options.map((o) => `<option>${o}</option>`).join("");
    el.value = draft[key];
    el.onchange = () => {
      draft[key] = el.value;
    };
  };
  sel("fdChannel", "channel", data.lookups.channels);
  sel("fdTopic", "topic", data.lookups.topics);
  sel("fdOutcome", "outcome", data.lookups.outcomes);
  set("fdGuest", "guest");
  set("fdSummary", "summary");
}

function setView(v) {
  view = v;
  document.getElementById("tabList").setAttribute("aria-selected", v === "list");
  document.getElementById("tabNew").setAttribute("aria-selected", v === "new");
  render();
}

function saveNew() {
  if (!draft.summary.trim()) {
    alert("Add a short summary so the row is meaningful.");
    return;
  }
  const id = `int-${900 + data.interactions.length + 1}`;
  data.interactions.unshift({
    id,
    when: new Date().toISOString(),
    channel: draft.channel,
    topic: draft.topic,
    summary: draft.summary.trim(),
    outcome: draft.outcome,
    guest: draft.guest.trim() || "Walk-in guest",
  });
  draft.summary = "";
  document.getElementById("fdSummary").value = "";
  view = "list";
  document.getElementById("tabList").setAttribute("aria-selected", "true");
  document.getElementById("tabNew").setAttribute("aria-selected", "false");
  render();
}

function fmtWhen(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function render() {
  const list = document.getElementById("listPanel");
  const detail = document.getElementById("detailPanel");
  const form = document.getElementById("newPanel");
  list.classList.toggle("hidden", view !== "list");
  detail.classList.toggle("hidden", view !== "detail");
  form.classList.toggle("hidden", view !== "new");

  if (view === "list") {
    const tb = document.getElementById("fdBody");
    tb.innerHTML = "";
    for (const row of data.interactions) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="dm-pill">${row.id}</span></td>
        <td>${fmtWhen(row.when)}</td>
        <td>${row.channel}</td>
        <td>${row.topic}</td>
        <td>${row.outcome}</td>
        <td><button type="button" class="dm-btn">Open</button></td>`;
      tr.querySelector("button").onclick = () => {
        selectedId = row.id;
        view = "detail";
        render();
      };
      tb.appendChild(tr);
    }
  }

  if (view === "detail") {
    const row = data.interactions.find((r) => r.id === selectedId);
    if (!row) {
      view = "list";
      render();
      return;
    }
    document.getElementById("dTitle").textContent = row.id;
    document.getElementById("dMeta").textContent = `${fmtWhen(row.when)} · ${row.channel} · ${row.topic}`;
    document.getElementById("dGuest").textContent = row.guest;
    document.getElementById("dSummary").textContent = row.summary;
    document.getElementById("dOutcome").textContent = row.outcome;
    document.getElementById("backList").onclick = () => {
      view = "list";
      render();
    };
  }
}

init();
