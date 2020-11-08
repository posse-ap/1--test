'use strict';

function create_piechart_1() {
  
  google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
          var data = google.visualization.arrayToDataTable([ //グラフデータの指定
            ['Task', 'Hours per Day'],
            ['Javascript',     11],
            ['CSS',      2],
            ['PHP',  2],
            ['HTML', 2],
            ['Laravel',    7],
            ['SQL',    7],
            ['SHELL',    7],
            ['情報システム基礎知識',    7]
          ]);
          var options = { //オプションの指定
              pieSliceText: 'label',
              pieHole: 0.4,
              legend:'none'
          };
          var chart = new google.visualization.PieChart(document.getElementById('piechart')); //グラフを表示させる要素の指定
          chart.draw(data, options);
      }
  
}

function create_piechart_2() {
  google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart(){
          var data = google.visualization.arrayToDataTable([ //グラフデータの指定
              ['Task', 'Hours per Day'],
              ['ドットインストール',     11],
              ['N予備校',      2],
              ['POSSE課題',  20]
          ]);
          var options = { //オプションの指定
              pieSliceText: 'label',
              pieHole: 0.4,
              legend:'none'
          };
          var chart = new google.visualization.PieChart(document.getElementById('piechart2')); //グラフを表示させる要素の指定
          chart.draw(data, options);
      }
 }
   
 function create_graph(){
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart(){
      var data = google.visualization.arrayToDataTable([ //グラフデータの指定
          ['Day', 'Hours per Day'],
          ['1',     11],
          ['2',     11],
          ['3',     11],
          ['4',     11],
          ['5',     11],
          ['6',     11],
          ['7',     11],
          ['8',     11],
          ['9',     11],
          ['10',      2],
          ['11',      2],
          ['12',      2],
          ['13',      2],
          ['14',      2],
          ['15',      2],
          ['16',      2],
          ['17',      2],
          ['18',      2],
          ['19',      2],
          ['20',  20],
          ['21',  20],
          ['22',  20],
          ['23',  20],
          ['24',  20],
          ['25',  20],
          ['26',  20],
          ['27',  20],
          ['28',  20],
          ['29',  20],
          ['30',  20],
          ['31',  20],
      ]);
      var options = { //オプションの指定
          
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('graphchart1')); //グラフを表示させる要素の指定
      chart.draw(data, options);
  }
 } 


    create_piechart_1();
    create_piechart_2();
    create_graph();
     


    $(function(){
   
        // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
        $('.modal_open').click(function(){
       
          // 黒い背景をbody内に追加
          $('body').append('<div class="modal_bg"></div>');
          $('.modal_bg').fadeIn();
       
          // data-targetの内容をIDにしてmodalに代入
          var modal = '#' + $(this).attr('data-target');
       
          // モーダルをウィンドウの中央に配置する
          function modalResize(){
              var w = $(window).width();
              var h = $(window).height();
       
              var x = (w - $(modal).outerWidth(true)) / 2;
              var y = (h - $(modal).outerHeight(true)) / 2;
       
              $(modal).css({'left': x + 'px','top': y + 'px'});
          }
       
          // modalResizeを実行
          modalResize();
       
          // modalをフェードインで表示
          $(modal).fadeIn();
       
          // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
          $('.modal_bg, .modal_close').off().click(function(){
              $('.modal_box').fadeOut();
              $('.modal_bg').fadeOut('slow',function(){
                  $('.modal_bg').remove();
              });
          });
       
          // ウィンドウがリサイズされたらモーダルの位置を再計算する
          $(window).on('resize', function(){
              modalResize();
          });
       
          // .modal_switchを押すとモーダルを切り替える
          $('.modal_switch').click(function(){
       
            // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
            $(this).parents('.modal_box').fadeOut();
       
            // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
            var modal = '#' + $(this).attr('data-target');
       
            // モーダルをウィンドウの中央に配置する
            function modalResize(){
                var w = $(window).width();
                var h = $(window).height();
       
                var x = (w - $(modal).outerWidth(true)) / 2;
                var y = (h - $(modal).outerHeight(true)) / 2;
       
                $(modal).css({'left': x + 'px','top': y + 'px'});
            }
       
            // modalResizeを実行
            modalResize();
       
            $(modal).fadeIn();
       
            // ウィンドウがリサイズされたらモーダルの位置を再計算する
            $(window).on('resize', function(){
                modalResize();
            });
          });
        });
      });