/**
 * Datatables Js
 */


$(document).ready(function () {
    $('#datatable').DataTable();

    // Ongoing Serive Requests Data Tables ID's
    $('#datatableNew').DataTable();
    $('#datatableProcessing').DataTable();
    $('#datatablePrartial').DataTable();
    $('#datatableCompleted').DataTable();
    $('#datatableCancel').DataTable();
    $('#datatableHold').DataTable();
    $('#datatableNotComplated').DataTable();
    $('#datatableUnpaid').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
});