'use strict';
console.log('Hello');
(function () {
  const modalArea = document.getElementById('modalArea');
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modalBg = document.getElementById('modalBg');
  const toggle = [openModal,closeModal,modalBg];
  
  for(let i=0, len=toggle.length ; i<len ; i++){
    toggle[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
  }
}());

// ここからドーナツチャート１
// パッケージのロード
google.charts.load('current', {'packages':['corechart']});
// コールバックの登録
google.charts.setOnLoadCallback(drawChart1);

// コールバック関数の実装
function drawChart1() {
  // データの準備
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['JavaScript',  11],
    ['CSS',  2],
    ['PHP',  2],
    ['HTML', 2],
    ['Laravel',  7]
  ]);
  // オプションの準備
  var options = {
    title: '',
    pieHole: 0.4,
    legend: 'none',
    'vAxis': {minValue:0},
    'colors': [
        '#1754EF',
        '#1071BD',
        '#20BEDE',
        '#3CCEFE',
        '#B29EF3',
        '#6D46EC',
        '#4A18EF',
        '#3105C0',
        '#aaaaaa',
        '#bbbbbb',
        '#cccccc',
        '#dddddd']
  };
  // 描画用インスタンスの生成および描画メソッドの呼び出し
  var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart.draw(data, options);
}

// ここからドーナツチャート２
// パッケージのロード
google.charts.load('current', {'packages':['corechart']});
// コールバックの登録
google.charts.setOnLoadCallback(drawChart2);

// コールバック関数の実装
function drawChart2() {
  // データの準備
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['ドットインストール',  11],
    ['N予備校',  2],
    ['POSSE課題',  2]
  ]);
  // オプションの準備
  var options = {
    title: '',
    pieHole: 0.4,
    legend: 'none',
    'vAxis': {minValue:0},
    'colors': [
        '#1754EF',
        '#1071BD',
        '#20BEDE',
        '#aaaaaa',
        '#bbbbbb',
        '#cccccc',
        '#dddddd']
  };
  // 描画用インスタンスの生成および描画メソッドの呼び出し
  var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options);
}