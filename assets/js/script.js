//tooltip contacto//
  $('#tooltip').on( "mouseenter", function() {
    $('#hoveringTooltip').remove();
  });
  $(function() {
    $( '#tooltip[title]' ).tooltip();
  });

  //tooltip footer//
  $('#vaca').on( "mouseenter", function() {
    $('#hoveringTooltip').remove();
  });
  $(function() {
    $( '#vaca[title]' ).tooltip();
  });

  //alerta formulario de contacto//
  $("#mailsend").on( "click", function() {
    alert( "Gracias por preferir Viajes Chile. Le contactaremos a la brevedad." );
  });