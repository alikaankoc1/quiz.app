//sınav sorularının olduğu js dosyası

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Yaz aylarında kış lastiklerinin kullanılması aşağıdakilerden hangisine neden olur?", { a: "Aracın maksimum hızının artmasına", b: "Lastiklerin daha çabuk aşınmasına", c: "Fren sisteminin arızalanmasına" , d: "Yakıt tüketiminin azalmasına " }, "b"),
    new Soru("2-Aşağıdakilerden hangisi motor soğutma suyunun azalmasına sebep olur?", { a: "Fren balatalarının aşınmasına", b: "Isıtma bujilerinin arızalanması", c: "Hareket göstergesinin arızalanması", d: "Radyatör hortumlarının su sızdırması" }, "d"),
    new Soru("3-Otoyolda 120 km/saat hızla seyreden bir otomobil sürücüsü, önündeki araçla arasında en az kaç metre mesafe bırakmalıdır?", { a: "30", b: "40", c: "50", d: "60" }, "d"),
    new Soru("4-Motorlu araçlarda motorun yağ seviyesini kontrol etmeye yarayan ve özel işaretleri bulunan parçaya ne ad verilir?", { a: "Yağdanlık", b: "Yağ çubuğu", c: "Yağ filtresi", d: "Yağ pompası" }, "b"),
    new Soru("5-Aşağıdaki araçlardan hangisinde takograf bulundurulması zorunludur?", { a: "Otomobil", b: "Traktör", c: "Motosiklet", d: "Otobüs" }, "d"),
    new Soru("6-Kara Yolları Trafik Kanununa göre “M,A1, A2, A, B1, B, BE, F ve G” sınıfı sürücü belgeleri kaç yıl süreyle geçerlidir??", { a: "10", b: "15", c: "20", d: "25" }, "a"),
    new Soru("7-Periyodik bakımda aşağıdakilerden hangisinin değiştirilmemesi araç motorunun çalışmasını olumsuz etkiler??", { a: "Polen filtresinin", b: "Yağ filtresinin", c: "Araç lastiklerinin", d: "Cam sileceklerinin" }, "b"),
    new Soru("8-Aşağıdakilerden hangisi, durmuş olan dolaşım sistemini yeniden çalışır hâle getirmek için uygulanır?", { a: "Kalp masajı", b: "Köprü tekniği", c: "Atelle tespit", d: "Rentek manevrası" }, "a")
   
   
    
];