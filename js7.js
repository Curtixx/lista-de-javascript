function evt_onblur(){
    alert("perdeu o foco")
    var text = document.getElementById("txtnum").value;
    if (text == ""){
        alert("campo obrigatorio")
    }
}
