/*jQuery(document).ready(function() {
  console.log(jQuery('#p-test').text());
  console.log(jQuery('#p-test').html());
  console.log(jQuery('#input-test').val());
  console.log('La vida');
});*/

$( _ => {
  //console.log($('p'));
  var paragraph = $('p');
  //console.log(paragraph.eq(0).text());
  // Seleccionando el cuarto párrafo
 /* console.log(paragraph.eq(0).text('Mom'));
  console.log(paragraph.eq(1).text('Dad'));
  console.log(paragraph.eq(2).text('Me'));
  console.log(paragraph.eq(3).text('My brother'));*/

  var lista = $('ul').children();
  var items = $('li');
  console.log(lista.eq(0).addClass('textColor').text());
  console.log(items.eq(0));
  //console.log(lista.children()[0]);
/*
  $('input').attr('disabled');
  "disabled"
  $('input').attr('data-key', 'un valor');
  jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
  $('input').attr('data-key', 'un valor');
  jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
  $('input').data('key');
  "un valor"
  $('input').data('name','nombre');
  jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
  $('input').data('name');
  "nombre"*/
});
