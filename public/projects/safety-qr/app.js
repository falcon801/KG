const departments = ["Stark shop", "Wakanda lab", "Sanctum office", "Avengers yard"];
const locations = ["Arc bench", "Web bay", "Quinjet dock", "Rooftop lot"];

let step = 1;

function show() {
  document.querySelectorAll("[data-step]").forEach((el) => {
    el.classList.toggle("hidden", Number(el.getAttribute("data-step")) !== step);
  });
  document.getElementById("bar").style.width = `${(step / 4) * 100}%`;
}

document.getElementById("next1").addEventListener("click", () => {
  const area = document.getElementById("concernArea").value.trim();
  if (!area) {
    alert("Describe the concern in a few words.");
    return;
  }
  step = 2;
  show();
});

document.getElementById("back2").addEventListener("click", () => {
  step = 1;
  show();
});
document.getElementById("next2").addEventListener("click", () => {
  step = 3;
  show();
});

document.getElementById("back3").addEventListener("click", () => {
  step = 2;
  show();
});
document.getElementById("submit").addEventListener("click", () => {
  step = 4;
  document.getElementById("ref").textContent = `DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  show();
});

document.getElementById("again").addEventListener("click", () => {
  step = 1;
  document.getElementById("concernArea").value = "";
  show();
});

function fillSelects() {
  const d = document.getElementById("dept");
  const l = document.getElementById("loc");
  d.innerHTML = departments.map((x) => `<option>${x}</option>`).join("");
  l.innerHTML = locations.map((x) => `<option>${x}</option>`).join("");
}

fillSelects();
show();
