function validSession() {
    $.ajax({
        type: "GET",
        data: data,
        url: "http://localhost:3000/session",
        beforeSend: function() {
            alert('Antes de enviar informacion');
        },
        success: function(json) {
            alert('Informacion insertada con exito: ' +json.status + ',' + json.data);
            $('email').val(json.data.email);
        },
        error: function(){
            alert('ERROR');
        },
        complete: function() {
            alert('Accion completada');
        }
    });
}