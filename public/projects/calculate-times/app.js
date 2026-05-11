const TIME_LABELS = [
  "Stark template",
  "Friday review",
  "Jarvis CAD drawing",
  "Wakanda slab layout",
  "Avengers approval",
  "Stark shop files",
  "Spider pathing",
  "Vibranium slabs",
  "Shield rodding",
  "Laser saw",
  "Milling gauntlet",
  "Splash zone",
  "CNC helicarrier",
  "CNC: arc sinks",
  "Wakanda CNC",
  "Mirror polish",
  "Vibranium polish",
  "Miter protocol",
  "Quantum lamination",
  "Rock chip",
  "Pym chip repair",
  "Avengers install",
];

const FRAC = [
  0.07, 0.03, 0.11, 0.08, 0.02, 0.07, 0.04, 0.05, 0.03, 0.09, 0.04, 0.03, 0.06, 0.02, 0.03, 0.05, 0.04, 0.04, 0.02,
  0.02, 0.1, 0.04,
];

function num(name) {
  const el = document.querySelector(`[name="${name}"]`);
  const v = Number.parseFloat(el?.value ?? "0");
  return Number.isFinite(v) ? v : 0;
}

function payload() {
  return {
    sf_tops_2_3: num("sf_tops_2_3"),
    lf_edge_2_3: num("lf_edge_2_3"),
    sf_tops_4_6: num("sf_tops_4_6"),
    lf_edge_4_6: num("lf_edge_4_6"),
    seams: num("seams"),
    um_sink_count: num("um_sink_count"),
    mileage: num("mileage"),
    number_of_tops: num("number_of_tops"),
    lf_splash: num("lf_splash"),
    sf_full_splash: num("sf_full_splash"),
  };
}

function coreMinutes(r, p) {
  const tops = p.sf_tops_2_3 + p.sf_tops_4_6;
  const edge = p.lf_edge_2_3 + p.lf_edge_4_6;
  const cad =
    tops * r.cad_sf_rate +
    edge * r.cad_edge_rate +
    p.sf_full_splash * r.cad_full_splash_rate +
    p.seams * (r.cad_layout_seam_rate / 10);
  const saw = tops * r.saw_sf_rate + p.um_sink_count * r.saw_sink_rate + p.um_sink_count * r.saw_lav_rate * 0.2;
  const splash = p.lf_splash * r.splash_lf_rate + p.sf_full_splash * r.splash_sf_rate;
  const install = tops * r.install_m11 * 0.08 + p.number_of_tops * r.install_m30;
  const base = r.cad_layout_base_minutes * 0.35;
  const travel = p.mileage * r.template_mileage_rate;
  return Math.max(12, base + cad + saw + splash + install + travel);
}

function fmt(n) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

async function init() {
  const rates = await (await fetch("./rates.json")).json();
  const form = document.getElementById("est");

  function recalc() {
    const p = payload();
    const total = coreMinutes(rates, p);
    TIME_LABELS.forEach((label, i) => {
      const cell = document.querySelector(`[data-row="${i}"]`);
      if (cell) cell.textContent = fmt(total * FRAC[i]);
    });
    const ttrak = document.getElementById("ttrak");
    ttrak.textContent = fmt(total / 9.2);
  }

  form.querySelectorAll(".live").forEach((el) => el.addEventListener("input", recalc));
  document.getElementById("reset").addEventListener("click", () => {
    form.querySelectorAll(".live").forEach((el) => {
      if (el.type === "number") el.value = "0";
    });
    recalc();
  });
  recalc();
}

init();
