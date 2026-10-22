# 国際通り駐車場ガイド

那覇・国際通り周辺に車で行く人のための、失敗しにくい駐車場の探し方。エリア別の傾向、日曜のトランジットモール、停める前に確認すること。

公開先: (まだ。`../site-factory/publish.sh naha-parking-guide` で https://before-ai.github.io/naha-parking-guide/ に出る)

## 動かす

ビルド不要。Claude の preview「naha-parking-guide」か、次のコマンドで http://localhost:8790 を開く。

```bash
python3 -m http.server 8790 --directory docs
```

## 構成

```
docs/index.html      画面
docs/style.css       見た目(色は :root だけ)
docs/app.js          動き。render() が本体
docs/data/*.json     固定データ
```

## データ源と注意

- (出典、更新頻度、載せないと決めたものをここに書く)
