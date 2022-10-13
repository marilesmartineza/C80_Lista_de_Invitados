invitado_array = [];

function submit()
{
    var ver_invitado_array = [];
    for (var j = 1; j <= 4; j++) 
    {
        var invitado = document.getElementById("nombre_invitado_"+j).value;
        console.log(invitado);
       invitado_array.push(invitado);
    }

    console.log(invitado_array);

    var longitud_invitado_array = invitado_array.length;
    console.log(longitud_invitado_array);

    for (var k = 0; k < longitud_invitado_array; k++) 
    {
        ver_invitado_array.push("<h4>NOMBRE - "+ invitado_array[k] + "</h4>");
        console.log(ver_invitado_array);
    }


    var remover_comas = ver_invitado_array.join(" ");
    console.log(remover_comas);
    document.getElementById("mostrar_nombres_sin_comas").innerHTML = remover_comas;

    document.getElementById("botón_enviar").style.display = "none";
    document.getElementById("botón_ordenar").style.display = "inline-block";



}

function sorting()
{
   invitado_array.sort();
    console.log(invitado_array);

    var ver_invitado_array_ordenar = [];

    var longitud_invitado_array = invitado_array.length;
    console.log(longitud_invitado_array);

    for (var k = 0; k < longitud_invitado_array; k++) 
    {
        ver_invitado_array_ordenar.push("<h4>NOMBRE - " + invitado_array[k] + "</h4>");
        console.log(ver_invitado_array_ordenar);
    }

    var remover_comas = ver_invitado_array_ordenar.join(" ");
    console.log(remover_comas);

    document.getElementById("mostrar_nombres_sin_comas").innerHTML = remover_comas;
}