$(function() {
  $( ".sortable" ).sortable({
    connectWith: "ul",
    dropOnEmpty:true,
    appendTo:'body'
  }).disableSelection();

  $("#edit").click(function() {
    $("#edit").hide();
    $("#phone").hide();
    $("#fax").hide();
    $("#address").hide();
    $("#save").show();
    $("#txtphone").show();
    $("#txtfax").show();
    $("#txtaddress").show();
    $("#txtaddress").val($("#address").text());
    $("#txtphone").val($("#phone").text());
    $("#txtfax").val($("#fax").text());
  });
  $("#save").click(function() {
    $("#edit").show();
    $("#phone").show();
    $("#fax").show();
    $("#address").show();
    $("#save").hide();
    $("#txtphone").hide();
    $("#txtfax").hide();
    $("#txtaddress").hide();
  });
});
