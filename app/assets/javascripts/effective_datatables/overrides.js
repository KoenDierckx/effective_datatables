$.extend(true, $.fn.dataTable.Buttons.defaults, {
  dom: {
    button: {
      className: 'btn btn-link btn-sm'
    }
  }
});

/* Default class modification */
$.extend($.fn.dataTable.ext.classes, {
  sWrapper: 'dataTables_wrapper dt-bootstrap4', // Remove container-fluid
});
