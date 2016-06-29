/**
 * Created by hiepvo on 6/26/16.
 */
$(document).ready(function(){
  $("#left-panel-tabs li span.add-panel a").click(function(){
    addTab($(this));
  });

  $('#left-panel-tabs a.tab').live('click', function(){
    // Get the tab name
    var contentname = $(this).attr("id") + "_content";
    // hide all other tabs
    $("#content section").hide();
    $("#left-panel-tabs li").removeClass("current");

    // show current tab
    $("#" + contentname).show();
    $(this).parent().addClass("current");
  });

  $('#left-panel-tabs span.remove').live('click', function(){
    // Get the tab name
    var tabid = $(this).parent().find(".tab").attr("id");
    // remove tab and related content
    var contentname = tabid + "_content";
    $("#" + contentname).remove();
    $(this).parent().remove();

    // if there is no current tab and if there are still tabs left, show the first one
    if($("#left-panel-tabs li.current").length == 0 && $("#left-panel-tabs li").length > 0){

      // find the first tab
      var firsttab = $("#left-panel-tabs li:first-child");
      firsttab.addClass("current");

      // get its link name and show related content
      var firsttabid = $(firsttab).find("a.tab").attr("id");
      $("#" + firsttabid + "_content").show();
    }
  });
});
function addTab(link){
  // If tab already exist in the list, return
  if($("#" + $(link).attr("rel")).length != 0)
    return;

  // hide other tabs
  $("#left-panel-tabs li").removeClass("current");
  $("#content section").hide();

  // add new tab and related content
  $("#left-panel-tabs").append("<li class='current'><a class='tab' id='" +
      $(link).attr("rel") + "' href='#'>" + $(link).html() +
      "</a><span class='remove'><a href='#' class='close black'></a></span></li>");

  $("#content").append("<p id='" + $(link).attr("rel") + "_content'>" +
      $(link).attr("title") + "</p>");

  // set the newly added tab as current
  $("#" + $(link).attr("rel") + "_content").show();
}