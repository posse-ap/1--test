// モーダル
$(function () {


    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
        return false
    });

    
    $('#openModal2').click(function(){
      $('#modalArea').fadeIn();
      return false
  });


    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
      return false
    });


  });


// document.getElementById("tweet").addEventListener('click', function(event) {
//     event.preventDefault();
//     var left = Math.round(window.screen.width / 2 - 275);
//     var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
//     window.open(
//         "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("txtbox").value),
//         null,
//         "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
// });

// // ラジオボタン
// var remove = 0;

// function radioDeselection(already, numeric) {
//   if(remove == numeric) {
//     already.checked = false;
//     remove = 0;
//   }
//  else {
//     remove = numeric;
//     // button1.style.backgroundColor = "lightblue";
//   }
// }

//要素の取得 → クリックされたとき
// document.getElementById('target').addEventListener('click',function(ev){
//     //要素の取得 → 背景色を変える
//     ev.target.style.background='pink';
//   });