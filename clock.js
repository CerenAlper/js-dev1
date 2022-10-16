let name= prompt("İsminiz:");
let myName = document.querySelector("#myName");
myName.innerHTML=name;

function tarihSaat(){
    let date= new Date().toLocaleDateString("tr-TR");
    document.getElementById("myClock").innerHTML = date;
}
setInterval(tarihSaat,1000);