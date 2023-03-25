var caca = {
     name:"caca",
     berat:45,
     tinggi:155,
     hobi: ["nonton", "makan", "coding"],

     sebutkanHobi: function() {
        console.log("Hobby Caca :");
        for (var i=0; i<this.hobi.length; i++){
            console.log(i+1 + ". " + this.hobi[i]);
        }
     }

};

caca.sebutkanHobi();
