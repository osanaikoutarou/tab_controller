$(function(){
  
  // ローカルストレージに設定されているメッセージを表示する。
  // 設定されてない場合は「Hello, world!」を表示する。
  if (localStorage["message"]) {
  $("body").text(localStorage["message"]);
  } else {
  $("body").text("Hello, world!");
  }
  
  // ローカルストレージに背景色が設定されている場合は、
  // 背景色を変更する。
  if (localStorage["bgcolor"]) {
  $("body").css('background-color', localStorage["bgcolor"]);
  }
  
  });
