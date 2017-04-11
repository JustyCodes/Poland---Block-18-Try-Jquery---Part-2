
var init = function () {
  
  var onSaleClickHandler = function () {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  };
  $('#filters').on('click', '.on-sale', onSaleClickHandler);

  
  var filtersClickHandler = function () {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  };
  $('#filters').on('click', '.featured', filtersClickHandler);
};

$('.tour').on('click', 'button', function () {
  var tour = $(this).closest('.tour');
  var discount = tour.data('discount');
  var message = $('<p>Call 1-555-jquery-air for a $' + discount + ' discount.</p>');
  tour.append(message);
  $(this).remove();
});


$(document).ready(init);
