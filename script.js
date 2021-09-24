function removeCookieAlert(id){
    console.log("here");
    document.getElementById(id).remove();
}

function convertTemp(){
    console.log("here");
    if (document.getElementById('tempSelect').value == 'celcius'){
        convertC();
    } else {
        convertF();
    }
}
function convertC(){
    console.log('back here');
    var element = document.getElementById('temp');
    var x = parseInt(element.innerHTML-32) * 5 / 9;
    element.innerHTML= Math.round(x);
}
function convertF(){
    console.log("now im Here")
    var temps = document.getElementById('temp');
    var x = parseInt(temps.innerHTML) * 9 / 5 + 32;
    temps.innerHTML = Math.round(x);
}
// function convertAllF(){
//     var elements = document.querySelectorAll(".temp");
//     for (var i = 0; i<elements.length; i++){
//         elements[i].addEventListener("onchange", convertF())

//     }
// }
// function convertallF(){
//     var elements = document.querySelectorAll(".temp").forEach( item => {
//         item.addEventListener("onchange", convertF())
//     });
//     array.forEach(element => {
        
//     }