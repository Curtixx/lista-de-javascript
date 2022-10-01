function evt_calculo(){
    var div1 = document.getElementById("total");
    var div2 = document.getElementById("brancos");
    var div3 = document.getElementById("nulos");
    var aux =10;
    var validos = document.getElementById("txtvalidos").value;
    var brancos = document.getElementById("txtbrancos").value;
    var nulos = document.getElementById("txtnulos").value;
    var total = (parseInt(validos, aux) + parseInt(brancos, aux) + parseInt(nulos, aux))
    
    div1.innerHTML = "o total de eleitores: " + total +"<br/>";
    div2.innerHTML = "o percentual de votos nulos: "+ nulos/total*100 +"<br/>";
    div3.innerHTML = "o percentual de votos em branco: "+ brancos/total*100 +"<br/>";
}
