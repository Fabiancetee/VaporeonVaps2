/* Formulario jquery*/
const formulario = document.getElementById('formulario2');
var expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var expresionTel = /^\d{9,9}$/;
$(document).ready(function(){
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var email = $("#itEmail").val();
        var telefono = $("#itTelefono").val();
        
        if(nombre == ""){
            $("#mensaje1").fadeIn();
            document.getElementById('formulario-mensaje2').classList.add('formulario-mensaje-activo2');
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if(email == "" || !expresionEmail.test(email)){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if(telefono== "" || !expresionTel.test(telefono)){
                    $("#mensaje3").fadeIn();
                    return false
                }
                else{
                    $("#mensaje3").fadeOut();
                    document.getElementById('formulario-mensaje2').classList.remove('formulario-mensaje-activo2');
                    document.getElementById('formulario-mensaje-exito2').classList.add('formulario-mensaje-exito-activo2');
		                setTimeout(() => {
			            document.getElementById('formulario-mensaje-exito2').classList.remove('formulario-mensaje-exito-activo2');
		            }, 5000);
                }
            }
        }
        formulario2.reset();
        
    });
});
