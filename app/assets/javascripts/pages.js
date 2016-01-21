// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('h1').fadeIn(500, function (){
		console.log('hola');
		$('.flow-text').fadeIn(500,function(){
			$('.right-align').fadeIn(500);
		});
	});

	window.setInterval(function(){

	}, 5000);
});
