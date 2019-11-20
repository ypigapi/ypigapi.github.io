function loadurls(auth) {
  var mainthread;
  var timeout = setTimeout(function(){
    try{
      clearTimeout(mainthread);
    } catch (e) {
      eval("console.log(e);");
    }
    $('#link_list_load').fadeOut();
    $('<li class="mdui-list-item mdui-ripple"><i class="mdui-list-item-icon mdui-icon material-icons">error_outline</i><div class="mdui-list-item-content" href="javascript:void(0);">获取出错，刷新一下吧</div></li>').appendTo("#link_list_show");
    $("#link_list_show").fadeIn();
  },5000);


  mainthread = setTimeout(function(){
    $.get("https://www.ypigapi.tk/getssr_c.php?auth=" + auth,function(data,status){


        if (status == "success") {
          try{
            clearTimeout(timeout);
          } catch (e) {
            eval("console.log(e);");
          }
          $('#link_list_load').fadeOut();
          var links = jQuery.parseJSON(data);
          for (var i = 0; i < links.links.length; i++) {
            link_list[i] = links.links[i];
          }
          for  (var j = 0; j < links.name.length; j++) {
              $('<li class="mdui-list-item mdui-ripple" onclick="location.href=\'https://apps.ypig.tk/p/'+ link_list[j] +'\'"><i class="mdui-list-item-icon mdui-icon material-icons">send</i><div class="mdui-list-item-content" href="javascript:void(0);">' + links.name[j] + '</div></li>').appendTo("#link_list_show");
          }
          $("#link_list_show").fadeIn();
          mdui.mutation();
        } else {
          $('<li class="mdui-list-item mdui-ripple"><i class="mdui-list-item-icon mdui-icon material-icons">error_outline</i><div class="mdui-list-item-content" href="javascript:void(0);">获取出错，刷新一下吧</div></li>').appendTo("#link_list_show");    }


    });
  });
}
