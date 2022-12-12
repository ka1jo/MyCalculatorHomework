function plus1(){
    let val1 =parseInt(document.getElementById("val1").value)
    let val2 =parseInt(document.getElementById("val2").value)
    document.getElementById("result").innerHTML = val1+val2
}
function minus(){
    let val1 =parseInt(document.getElementById("val1").value)
    let val2 =parseInt(document.getElementById("val2").value)
    document.getElementById("result").innerHTML = val1-val2
}
function umnojeniye(){
    let val1 =parseInt(document.getElementById("val1").value)
    let val2 =parseInt(document.getElementById("val2").value)
    document.getElementById("result").innerHTML = val1*val2
}
function stepen(){
    let val1 =parseInt(document.getElementById("val1").value)
    let val2 =parseInt(document.getElementById("val2").value)
    document.getElementById("result").innerHTML = val1**val2
}
function division(){
    let val1 =parseInt(document.getElementById("val1").value)
    let val2 =parseInt(document.getElementById("val2").value)
    document.getElementById("result").innerHTML = val1/val2
}
function modulus(){
    let val1 =parseInt(document.getElementById("val1").value)
    let val2 =parseInt(document.getElementById("val2").value)
    document.getElementById("result").innerHTML = val1%val2
}