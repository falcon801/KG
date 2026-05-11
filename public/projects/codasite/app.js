const DATA = {
  meta: { last30: 142, last180: 518 },
  status: { recut: 22, rework: 11, pipeline: 34, callback: 7 },
  departments: [
    { name: "Stark fab", v30: 38, v180: 120 },
    { name: "Wakanda finish", v30: 29, v180: 95 },
    { name: "Avengers install", v30: 24, v180: 88 },
    { name: "S.H.I.E.L.D. QC", v30: 18, v180: 62 },
    { name: "Quinjet shipping", v30: 33, v180: 153 },
  ],
  issues: [
    { label: "Arc fitment", pct: 32 },
    { label: "Vibranium finish", pct: 24 },
    { label: "Web residue", pct: 18 },
    { label: "Shield edge", pct: 14 },
    { label: "Other", pct: 12 },
  ],
};

let win = "30";
let barChart;
let pieChart;

function windowKey() {
  return win === "30" ? "v30" : "v180";
}

function renderStats() {
  document.getElementById("issuesPrimaryValue").textContent = DATA.meta.last30;
  document.getElementById("issuesCompareValue").textContent = DATA.meta.last180;
  document.getElementById("recutValue").textContent = DATA.status.recut;
  document.getElementById("reworkValue").textContent = DATA.status.rework;
  document.getElementById("pipelineValue").textContent = DATA.status.pipeline;
  document.getElementById("callbackValue").textContent = DATA.status.callback;
}

function charts() {
  const key = windowKey();
  const barCtx = document.getElementById("departmentBarChart");
  const pieCtx = document.getElementById("topIssuesPieChart");
  const deptLabels = DATA.departments.map((d) => d.name);
  const deptVals = DATA.departments.map((d) => d[key]);

  const Chart = window.Chart;
  if (barChart) barChart.destroy();
  barChart = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: deptLabels,
      datasets: [
        {
          label: "Issues",
          data: deptVals,
          backgroundColor: "rgba(201, 164, 92, 0.42)",
          borderColor: "rgba(232, 213, 173, 0.9)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#b7aa94" }, grid: { color: "rgba(201,164,92,0.1)" } },
        y: { ticks: { color: "#b7aa94" }, grid: { color: "rgba(201,164,92,0.1)" } },
      },
    },
  });

  if (pieChart) pieChart.destroy();
  pieChart = new Chart(pieCtx, {
    type: "doughnut",
    data: {
      labels: DATA.issues.map((i) => i.label),
      datasets: [
        {
          data: DATA.issues.map((i) => i.pct),
          backgroundColor: ["#c9a45c", "#8fa36d", "#b87967", "#9c7048", "#5a4a35"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "right", labels: { color: "#e8dcc8", boxWidth: 10 } },
      },
    },
  });

  const meta = document.getElementById("topIssuesWindowMeta");
  meta.textContent = win === "30" ? "Last 30 days (demo)" : "Last 180 days (demo)";
}

function wire() {
  document.getElementById("window30Btn").addEventListener("click", () => {
    win = "30";
    charts();
  });
  document.getElementById("window180Btn").addEventListener("click", () => {
    win = "180";
    charts();
  });
  document.getElementById("windowYtdBtn").addEventListener("click", () => {
    win = "30";
    charts();
  });
  document.getElementById("window365Btn").addEventListener("click", () => {
    win = "180";
    charts();
  });

  const modal = document.getElementById("metricInfoModal");
  document.querySelectorAll("[data-metric]").forEach((el) => {
    el.addEventListener("click", () => {
      const k = el.getAttribute("data-metric");
      document.getElementById("metricInfoTitle").textContent = k.replace(/-/g, " ");
      document.getElementById("metricInfoValue").textContent = el.querySelector(".dm-stat-v, .big")?.textContent ?? "-";
      document.getElementById("metricInfoBody").classList.remove("hidden");
      document.getElementById("metricInfoBody").innerHTML =
        "<p>Fabricated drill-down. Production version joined ERP exports and issue codes; nothing here calls a server.</p>";
      modal.dataset.open = "true";
    });
  });
  document.getElementById("metricInfoCloseBtn").addEventListener("click", () => {
    modal.dataset.open = "false";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.dataset.open = "false";
  });
}

renderStats();
charts();
wire();
