// 国際通り駐車場ガイド の画面の動き。ビルド不要。

// 端末内保存(ユーザーのデータはサーバーに送らない)
const store = {
  key: "naha-parking-guide:v1",
  load() { try { return JSON.parse(localStorage.getItem(this.key)) ?? {}; } catch { return {}; } },
  save(obj) { try { localStorage.setItem(this.key, JSON.stringify(obj)); } catch {} },
};

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  node.append(...children);
  return node;
}

const CHECKS = [
  { id: "sunday", text: "日曜の12〜18時に本線を通る予定ではない(通るなら裏通りか周辺エリアに変更)" },
  { id: "entrance", text: "停める駐車場の入口の向きと、そこまでの一方通行を地図で見た" },
  { id: "rate", text: "看板で時間あたりの料金を見た(平日と土日祝の違いも)" },
  { id: "max", text: "最大料金があるか、効く時間帯はいつまでかを見た" },
  { id: "where", text: "停めた場所を記録した(階・番号・目印、または Punilo で記録)" },
];

function render() {
  const app = document.getElementById("app");
  app.replaceChildren();
  const state = store.load();
  const done = new Set(state.done ?? []);
  const list = el("ul", { class: "checks" },
    ...CHECKS.map((c) => {
      const box = el("input", { type: "checkbox", id: `chk-${c.id}` });
      box.checked = done.has(c.id);
      box.addEventListener("change", () => {
        if (box.checked) done.add(c.id); else done.delete(c.id);
        store.save({ ...state, done: [...done] });
        render();
      });
      return el("li", { class: done.has(c.id) ? "done" : "" }, el("label", { for: `chk-${c.id}` }, box, " ", c.text));
    }),
  );
  const n = done.size;
  const status = el("p", { class: "muted small" },
    n === CHECKS.length ? "全部確認できました。いってらっしゃい。" : `${n} / ${CHECKS.length} 確認済み`);
  const reset = el("button", { class: "ghost", onclick: () => { store.save({ ...state, done: [] }); render(); } }, "リセット");
  app.append(list, el("div", { class: "row" }, status, reset));
}

document.getElementById("updated").textContent = "最終更新 2026-10-22";
render();
