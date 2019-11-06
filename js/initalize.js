var no_function_tip = new mdui.Dialog('#no_function_dialog');
var menulist = new mdui.Menu('#open_menu', '#menu');
document.getElementById('open_menu').addEventListener('click', function () {
  menulist.open();
});
