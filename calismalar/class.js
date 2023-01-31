class Personel{

    constructor(ad,soyad){
        this.ad= ad;
        this.soyad= soyad;
    }
    kaydet(){
        console.log(`personel kaydedildi ${this.ad+" "+this.soyad}`)
    }
}

const personel =new Personel("sora", "shiro");

personel.kaydet();
