// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".posts").html(posts['posts'][0]['title']);
    //

  });


    $(document).ready(function() {
    $('.boton').click(function() {
        $('.ejemplo').fadeOut('slow');
    });
});

//******************************************************************************
//*****************************PROBANDO*****************************************
$(document).ready(function() {
   $('.post').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.post').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.post').click(function() {
       $(this).toggle(1000);
   }); 
});
//******************************************************************************

$(document).ready(function() {
    $('div.menu>div').hide();
  })
//******************************************************************************
//******************************************************************************



});

