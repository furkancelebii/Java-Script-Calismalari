var kullanicilar=[
    {email:"furkancelebi@gmail.com",sifre:"12345"},
    {email:"shirocelebi@gmail.com",sifre:"12345"}
]
var tweetler=[
    {email:"furkancelebi@gmail.com",tweet:"selam naber"},
    {email:"furkancelebi@gmail.com",tweet:"shiroooooo"},
    {email:"shirocelebi@gmail.com",tweet:"efendim"}
]
var email=prompt("E-mailinizi girin :")
var sifre=prompt("Sifrenizi girin :")

function giris(){
    for(i=0;i<kullanicilar.length;i++){
        if(email==kullanicilar[i].email && sifre==kullanicilar[i].sifre){
            console.log("Giris basarili")
            console.log(tweetler) 
        }
    }
}
giris(email,sifre)
