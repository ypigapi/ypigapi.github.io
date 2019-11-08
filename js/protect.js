$.get("https://www.ypigapi.tk/getssr_b.php",function(data,status){


    if (status == "success") {
      $('#link_list_load').remove();
      var links = jQuery.parseJSON(data);
      for (var i = 0; i < links.links.length; i++) {
        link_list[i] = links.links[i];
      }
      for  (var j = 0; j < links.name.length; j++) {
          $('<li class="mdui-list-item mdui-ripple"><i class="mdui-list-item-icon mdui-icon material-icons">send</i><div class="mdui-list-item-content" href="javascript:void(0);" onclick="location.href=\'https://apps.ypig.tk/p/'+ link_list[j] +'\'">' + links.name[j] + '</div></li>').appendTo("#link_list_show");
      }
      mdui.mutation();
    } else {
      $('<li class="mdui-list-item mdui-ripple"><i class="mdui-list-item-icon mdui-icon material-icons">error_outline</i><div class="mdui-list-item-content" href="javascript:void(0);">获取出错，刷新一下吧</div></li>').appendTo("#link_list_show");
    }
});
