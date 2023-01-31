var selamFonksiyonu = function selam(){
    console.log("merhaba");
}
selamFonksiyonu();

var selamFonksiyonu2 = ()=> console.log("merhaba");

selamFonksiyonu2();

var selamFonksiyonu3= ()=> {
    console.log("merhaba");
    console.log("birşey");
}
var selamFonksiyonu4 = (mesaj)=> console.log(mesaj);
selamFonksiyonu4("selam fonksiyonu 4");

var topla =(sayi1,sayi2) => {return sayi1+sayi2;}
let toplam=topla(3,8);
console.log(toplam);