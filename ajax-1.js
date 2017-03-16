function hide(id){

  var name = "#" + id;
  $(name).toggleClass("clickable");
  $(name).addClass("hidden");
};

$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "fich1.html",
    cache: false
    }).done(function(text){
      $('#text-location').html(text);
    });

  $("#clickMe").click(function(){
    $.ajax({
      type: "GET",
      url: "fich2.txt",
      cache: false
    }).done(function( text ) {
      $("#clicked").html(text);
      hide("clickMe");
    }); 
  })

  $("#loader").click(function(){
    $.ajax("fich3.txt")
    .done(function( text ) {
      $("#loaded").html(text);
      hide("loader");
    })
    .fail(function(){
      $("#loaded").html("Failed to load text");
    }); 
  })


});// document.ready()

