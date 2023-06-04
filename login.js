
function mostrarAlerta() {
    var fecha = new Date();

    var fechaActual = fecha.toLocaleDateString();
    var horaActual = fecha.toLocaleTimeString();

    
   if(horaActual >= "8:30:00" ){
    alert("¡Asistencia registrada con exito!" + " "+ fechaActual +" "+ horaActual);
   }else{
    alert("¡Asistencia registrada con exito! TARDANZA!!!!!" + " "+ fechaActual +" "+ horaActual);
   }
 
  }