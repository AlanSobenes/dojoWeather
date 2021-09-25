function removeCookieAlert(id){
    console.log("here");
    document.getElementById(id).remove();
}



var temps = document.getElementsByClassName('temp');

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
    for(var i = 0; i < temps.length; i++){
        temps[i].innerHTML= Math.round(parseInt(temps[i].innerHTML-32) * 5 / 9);
    }
}
function convertF(){
    console.log('here');
    for(var i = 0; i < temps.length; i++){
        temps[i].innerHTML= Math.round(parseInt(temps[i].innerHTML) * 9 / 5 + 32);
    }
}

