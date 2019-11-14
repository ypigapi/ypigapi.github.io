try {
  var link_list = [];
  var no_function_tip = new mdui.Dialog('#no_function_dialog');
  var do_feedback_tip = new mdui.Dialog('#do_feedback_dialog');
  var copy_success_tip = new mdui.Dialog('#copy_success_dialog');
  var menulist = new mdui.Menu('#open_menu', '#menu');
  document.getElementById('open_menu').addEventListener('click', function () {
    menulist.open();
  });
  mdui.mutation();
  new ClipboardJS('#docopy').on('success', function(e) {
      copy_success_tip.open();
      e.clearSelection();
  });
} catch(e) {
  eval("console.log(e);");
}
