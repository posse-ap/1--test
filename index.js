
'use strict'

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawTimeChart);
google.charts.setOnLoadCallback(drawLanguageChart);
google.charts.setOnLoadCallback(drawMaterialChart);

// 学習時間のグラフ
function drawTimeChart() {
  var studyTimeGraph = document.getElementById('studyTimeGraph');
  var data;

  data = new google.visualization.arrayToDataTable([
    ['day', 'studyTime'],
    ['1', 5],
    ['2', 5],
    ['3', 5],
    ['4', 5],
    ['5', 5]
  ]);

  var options = {
    title: '学習時間',
    legend: 'none'
  }

  var chart = new google.visualization.ColumnChart(studyTimeGraph);
  chart.draw(data, options);
}


// 学習言語のグラフ
function drawLanguageChart() {

  var languageGraph = document.getElementById('languageGraph');
  var data;

  data = new google.visualization.arrayToDataTable([
    ['Language', 'Potion'],
    ['Javascript', 42],
    ['CSS', 18],
    ['PHP', 10],
    ['HTML', 9],
    ['Laravel', 9],
    ['SQL', 6],
    ['SHELL', 4],
    ['情報システム基礎知識（その他）', 2]
  ]);

  var options = {
    colors: ['#1754EF', '#0F71BD', '#20BDDE', '#3CCEFE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],
    legend: 'none'
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
    colors: ['#1754EF', '#0F71BD', '#20BDDE'],
    legend: 'none'
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