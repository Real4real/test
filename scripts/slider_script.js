$(function(){

 $( "#slider" ).slider({
  range: true,
  min: 0,
  max: 3000,
  values: [ 0, 1000 ],
  slide: function( event, ui ) {
 $( "#pricemin" ).val( "$" + ui.values[ 0 ]);
 $( "#pricemax" ).val("$" + ui.values[ 1 ] );
  }
 });

});
