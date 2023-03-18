var voucher = "Freeongkir";
var pembelian = 150000;

switch (voucher) {
    case "Freeongkir":
    if (pembelian>=50000){
        console.log("potongan 10%");
         }
        else if (pembelian>=30000 && pembelian < 50000){
            console.log("potongan 5%")
            }
            else {
                console.log("potongan 2.5%")
            }
    break;

    case "Free 15%":
    if (Pembelian>=30000){
        console.log("potongan 15%")
    }
        else {
            console.log("potongan 0%")
        }
    break;
    default:
        console.log("tidak ada voucher")
}