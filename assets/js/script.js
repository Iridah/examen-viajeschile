//tooltip contacto//
  $('#tooltip').on( "mouseenter", function() {
    $('#hoveringTooltip').remove();
  });
  $(function() {
    $( '#tooltip[title]' ).tooltip();
  });