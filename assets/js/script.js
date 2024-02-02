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