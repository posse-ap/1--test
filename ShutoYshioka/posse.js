// モーダル
$(function () {
    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
        return false
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
      return false
    });
  });


// ラジオボタン
var remove = 0;

function radioDeselection(already, numeric) {
  if(remove == numeric) {
    already.checked = false;
    remove = 0;
  }
 else {
    remove = numeric;
    // button1.style.backgroundColor = "lightblue";
  }
}

//要素の取得 → クリックされたとき
document.getElementById('target').addEventListener('click',function(ev){
    //要素の取得 → 背景色を変える
    ev.target.style.background='pink';
  });