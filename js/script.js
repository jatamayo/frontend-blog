// Javascript Code.
$(document).ready(function () {
// $.get("_posts/2014-11-09.json", function(data){
//
// var posts = JSON.parse(data);
// $(".posts").html(posts['posts'][0]['title']);
//
// });
$(this).load("_posts/posts.json", function(data){
var posts = JSON.parse(data);
$(".posts").html(posts['posts'][0]['content']);
$(".posts2").html(posts['posts'][1]['content']);
$(".posts3").html(posts['posts'][2]['content']);
//
//*****************************************************************************
//************************** ocultar cuerpo ***********************************
});
$(document).ready(function() {
$('.boton').click(function() {
$('.cuerpo').toggle('slow');
});
});
//******************************************************************************
//*************************** boton 2 ******************************************
$(document).ready(function() {
$('.boton2').click(function() {
$('.cuerpo').toggle('fast');
$('.posts').show('fast');
});
});
//******************************************************************************
//*************************** boton 3 ******************************************
$(document).ready(function() {
$('.boton3').click(function() {
$('.cuerpo').toggle('fast');
$('.posts').show('fast');
});
});
//******************************************************************************
//*************************** boton 4 ******************************************
$(document).ready(function() {
$('.boton4').click(function() {
$('.cuerpo').toggle('fast');
$('.posts').show('fast');
});
});
//******************************************************************************
//***************************** boton older post********************************

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
//******************************** PROBANDO*************************************
$(document).ready(function() {
$('div.menu>div').hide();
})



//******************************************************************************
//******************************************************************************
});