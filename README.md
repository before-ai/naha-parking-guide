# 国際通り駐車場ガイド

那覇・国際通り周辺に車で行く人のための、失敗しにくい駐車場の探し方。検索流入を Punilo(https://punilo.com)に送る入口として作った(層2: 営業の入口を自動化する仕組みの1本目)。

公開先: https://before-ai.github.io/naha-parking-guide/ (GitHub Pages、main の docs/ を配信。push すると1〜2分で反映)

## 動かす

ビルド不要。Claude の preview「naha-parking-guide」か、次のコマンドで http://localhost:8790 を開く。

```bash
python3 -m http.server 8790 --directory docs
```

## 構成

```
docs/index.html      画面。本文は SEO のため HTML に直書き。FAQ は JSON-LD 付き
docs/style.css       見た目(色は :root だけ)
docs/app.js          「停める前のチェック」の端末内保存だけ
```

## 送客先(仮)

- 停める人 → https://punilo.com/search(`?q=` は効かない。検索画面は区別なし)
- お店 → https://punilo.com/for-advertisers
- 駐車場オーナー → https://punilo.com/for-owners

全リンクに `utm_source=naha-parking-guide` を付けてある。送客先は本人の指定で差し替える。

## データ源と注意

- トランジットモール(日曜 12〜18時、県庁北口交差点〜蔡温橋交差点): 内閣府 国家戦略特区 沖縄県 資料5(2015年) https://www.chisou.go.jp/tiiki/kokusentoc/okinawaken/dai2/shiryou5.pdf 。那覇市の実験報告書も footer に掲載。最終確認 2026-10-22
- 那覇市の公式サイトで現行の実施告知ページは見つからなかった。「雨天中止あり」「最新は那覇市へ」と併記している
- **料金の具体額は載せない。** 公的な出典が無く、看板の内容もよく変わるため。Punilo の原則「分からない情報を正しいように表示しない」に合わせた
- 載せないもの: 特定の民間駐車場の料金・空き状況、取締り情報、個人の体験談の引用
- エリアの傾向(混みやすい・一方通行が多い)は一般的な案内で、計測データではない
