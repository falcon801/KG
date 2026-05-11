let data = { courses: [], people: [] };

async function init() {
  data = await (await fetch("./data.json?v=marvel-demo-1", { cache: "no-store" })).json();
  render();
  document.getElementById("grid").addEventListener("click", (e) => {
    const cell = e.target.closest("[data-person][data-course]");
    if (!cell) return;
    const person = cell.getAttribute("data-person");
    const course = cell.getAttribute("data-course");
    const p = data.people.find((x) => x.name === person);
    if (p) {
      p.done[course] = !p.done[course];
      render();
    }
  });
}

function render() {
  const head = document.getElementById("thead");
  const body = document.getElementById("tbody");
  head.innerHTML = `<tr><th>Name</th>${data.courses.map((c) => `<th>${c}</th>`).join("")}</tr>`;
  body.innerHTML = "";
  for (const p of data.people) {
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<td>${p.name}</td>` +
      data.courses
        .map((c) => {
          const ok = p.done[c];
          return `<td><button type="button" class="dm-btn" data-person="${p.name}" data-course="${c}" style="font-size:12px;border-radius:999px;padding:0.25rem 0.55rem">${ok ? "Done" : "Due"}</button></td>`;
        })
        .join("");
    body.appendChild(tr);
  }
}

init();
