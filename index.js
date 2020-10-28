
'use strict'

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLanguageChart);
google.charts.setOnLoadCallback(drawMaterialChart);

// 学習時間のグラフ
function drawLanguageChart() {

  var languageGraph = document.getElementById('languageGraph');
  var data;

  data = new google.visualization.arrayToDataTable([
    ['Language', 'Votes'],
    ['Javascript', 42],
    ['CSS', 18],
    ['HTML', 10]
  ]);

  var options = {
    title: 'My Chart',
  };

  var chart = new google.visualization.PieChart(languageGraph);
  chart.draw(data, options);
};

// 学習教材のグラフ
function drawMaterialChart() {

  var materialGraph = document.getElementById('materialGraph')
  var data;

  data = new google.visualization.arrayToDataTable([
    ['studyMaterial', 'time'],
    ['ドットインストール', 42],
    ['N予備校', 33],
    ['POSSE課題', 25],
  ])

  var options = {
    title: '学習コンテンツ',
  }

  var chart = new google.visualization.PieChart(materialGraph);
  chart.draw(data, options);

};


// ツイートエリアの伸縮
function flexTextarea(el) {
  const dummy = el.querySelector('.FlexTextarea__dummy')
  el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
    dummy.textContent = e.target.value + '\u200b'
  })
}
document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)