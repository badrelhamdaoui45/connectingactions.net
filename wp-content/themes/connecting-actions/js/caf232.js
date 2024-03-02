
(function ($) {

  /* 2021 symposium injector
  if($('BODY').hasClass('home')) {
    $('#custom-announcement-inject').show().insertAfter($('#main-nav'));
  }
  */

  /** Replace tagline text with Middle East event **/
  if($('BODY').hasClass('home')) {
    $('#ribbon_bottom h3').remove();
    $('#ribbon_bottom').addClass('middle-east');
    $('#middle-east-dialogue-content').children().attr('data-scrollreveal',"enter bottom after 0s over 1s").appendTo($('#ribbon_bottom .color-overlay'));

    if($('#middle-east-dialogue-content').attr('data-bg')) {
      $('#ribbon_bottom').attr('style', 'background-image: url('+ $('#middle-east-dialogue-content').attr('data-bg') + ')')
    }
  }

  /** Remove ugly "category" header in post list **/
  if($('BODY').hasClass('archive')) {
    $('h1.page-title').text($('h1.page-title SPAN').text());
  }

  /** Append contact button to What We Do section **/
  $('SECTION#focus').append('<a href="mailto:contact@connectingactions.online" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true" class="btn btn-primary custom-button blue-btn">Contact us for more info</a>');


  /** Give function to close button of E-Book pop up **/
  $('.close-popup').bind("click", function() {
    $('#disable_overlay').hide();
    $('.ca-popup').hide();
  });

})( jQuery );
