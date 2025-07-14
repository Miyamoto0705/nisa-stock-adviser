
// 積立NISAおすすめ銘柄（仮想AI予測）
const funds = [
  { name: "eMAXIS Slim 全世界株式（オール・カントリー）", expectedReturn: "+8.2%" },
  { name: "SBI・V・S&P500インデックス・ファンド", expectedReturn: "+7.5%" },
  { name: "楽天・全米株式インデックス・ファンド", expectedReturn: "+7.0%" },
];

// 成長投資枠おすすめ銘柄（仮想AI予測）
const stocks = [
  { name: "トヨタ自動車", expectedReturn: "+6.5%" },
  { name: "ソニーグループ", expectedReturn: "+6.2%" },
  { name: "キーエンス", expectedReturn: "+5.9%" },
  { name: "任天堂", expectedReturn: "+5.7%" },
  { name: "三菱UFJフィナンシャル・グループ", expectedReturn: "+5.5%" },
  { name: "東京エレクトロン", expectedReturn: "+5.4%" },
  { name: "リクルートホールディングス", expectedReturn: "+5.2%" },
  { name: "日本電産", expectedReturn: "+5.1%" },
  { name: "伊藤忠商事", expectedReturn: "+4.8%" },
  { name: "NTTデータグループ", expectedReturn: "+4.5%" },
];

// 表示処理
function renderList(list, targetId) {
  const ul = document.getElementById(targetId);
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name}（予測：${item.expectedReturn}）`;
    ul.appendChild(li);
  });
}

// 売買判定処理
function judge() {
  const buy = parseFloat(document.getElementById("buy-price").value);
  const current = parseFloat(document.getElementById("current-price").value);
  const result = document.getElementById("result");

  if (!buy || !current) {
    result.textContent = "※購入価格と現在価格の両方を入力してください。";
    return;
  }

  const diff = ((current - buy) / buy) * 100;
  if (diff >= 5) {
    result.textContent = `✅ 売り時！ 利益 +${diff.toFixed(2)}%`;
  } else if (diff <= -3) {
    result.textContent = `📉 含み損 -${diff.toFixed(2)}%。ナンピン検討？`;
  } else {
    result.textContent = `😐 様子見（差：${diff.toFixed(2)}%）`;
  }
}

// ポートフォリオのダミー資産推移グラフ
function drawChart() {
  const ctx = document.getElementById("portfolioChart").getContext("2d");
  const labels = ["1月", "2月", "3月", "4月", "5月", "6月"];
  const data = [1000000, 1030000, 1070000, 1050000, 1100000, 1140000];

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "資産推移（円）",
        data: data,
        borderColor: "#264653",
        backgroundColor: "rgba(38,70,83,0.1)",
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

renderList(funds, "funds-list");
renderList(stocks, "stocks-list");
drawChart();