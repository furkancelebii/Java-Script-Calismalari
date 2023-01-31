// // document.getElementById("bio").innerHTML = "Furkan Celebi : 2019"

// // var bio1 = document.getElementById("bio1");

// // var mesaj = document.getElementById("mesaj");

// // mesaj.innerHTML = bio1.innerHTML;

// // var tumListe=document.getElementsByTagName("ul");

// // var sehirler=tumListe[0]

// // tumElemanlar=sehirler.getElementsByTagName("li")
// // for(i=0;i<tumElemanlar.length;i++){
// //     alert(tumElemanlar[i].innerHTML)
// // }

// // var classElemanlari=document.getElementsByClassName("bio1");

// // alert(classElemanlari[0].innerHTML)

// var queryElemanlari= document.querySelectorAll("p.bio1");

// alert(queryElemanlari.length)

// var isimElemanlari = document.getElementsByName("musteriAdi")

// alert(isimElemanlari[0].value)

// var isimElemanlari = document.getElementsByName("musteriAdi")

// var degisim = document.getElementById("sora").addEventListener("mouseover",rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color="blue";
//     isimElemanlari[0].value="SORA"

// }

// var node =document.getElementById("agac");
// alert(node.childNodes[0].nodeValue)


var baslik =document.createElement("h2");
var node =document.createTextNode("Merhaba JavaScript")
baslik.appendChild(node)

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")
div1.insertBefore(baslik,p2)


alert("p2 siliniyor");
div1.removeChild(p2)

var p1= document.getElementById("p1");
div1.replaceChild(baslik,p1)