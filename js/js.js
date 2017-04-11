$(document).ready(function() {
  $('#filters').on('click', '.on-sale', function() {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  });
});

$(document).ready(function() {
  $('.tour').on('click', 'button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<p>Call 1-555-jquery-air for a $' + discount + ' discount.</p>');
    tour.append(message);
    $(this).remove();
  });
});
