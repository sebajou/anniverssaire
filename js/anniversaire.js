

$("#First").click(function() {
  $("#Second").fadeIn("slow", function() {
  });
});

$("#Second").click(function() {
  $("#Third").fadeIn("slow", function() {
  });
});

$("#Third").click(function() {
  $("#Third").fadeIn("slow", function() {
  });
});

$('#lien').mouseover(function(){
  $("#message_popup").fadeIn("fast", function() {
  });
});

$('#afficher').click(function(){
    $('#afficher').attr('disabled','disabled');
    $('#cacher').removeAttr('disabled');
    $('#zebre').show(3000);
});