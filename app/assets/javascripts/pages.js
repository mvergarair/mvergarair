// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$( document ).ready(function(){

  var go = true;
  var currentSectionId = 1;
  var scrollLock = true;


  $('.modal-trigger').leanModal();

	$('h2').fadeIn(800, function (){
		$('#quote').fadeIn(2500,function(){
			$('#author').fadeIn(500);
		});
	});

  // var lastScrollTop = 0;
  // $(window).scroll(function(event){
  //   if(scrollLock){
  //     scrollLock = false;
  //     console.log(currentSectionId);
  //     console.log(currentSectionId+1);
  //     var st = $(this).scrollTop();
  //     if (st > lastScrollTop){
  //       $( "html,body" ).animate({
  //         scrollTop: $("#" + (currentSectionId +1).toString()).offset().top
  //       }, 1500, function() {
  //         currentSectionId ++; 
  //         scrollLock = true;
  //       });
  //     } else {
  //       $( "html,body" ).animate({
  //         scrollTop: $("#" + (currentSectionId -1).toString()).offset().top
  //       }, 1500, function() {
  //         currentSectionId --;
  //         scrollLock = true;
  //       });
  //     }
  //     lastScrollTop = st;
  //   }
  // });

  $('#new_message').on("ajax:before" , function(){
    $('#to-hide').hide();
    $('#spinner').show();
  }).on("ajax:complete", function(){
    $('#to-hide').show();
    $('#spinner').hide();
    $('#modal1').closeModal();
    $('.modal input').val('');
    $('.modal input').toggleClass('valid');
    $('.modal i').toggleClass('active');
    $('.modal label').toggleClass('active');
    $('.modal textarea').val('');
    $('.modal textarea').toggleClass('valid',false);
  });


	window.setInterval(function(){
    if(go){
      $.ajax({
          headers: {'X-CSRF-Token': $("meta[name='csrf-token']").attr("content") },
          url:   'http://mvergarair.cl/random_quote' ,
          type:  'get',
          beforeSend: function () {
            go = false;
          },
          success:  function (response) {
            $('#author').hide();
            $('#quote').hide().text(response.phrase).fadeIn(2500, function(){
                $('#author').text("-"+ response.author).css('font-style', 'italic').fadeIn(500);;
            });
            go = true;
          }
      });

    }
		
	}, 10000);
});
