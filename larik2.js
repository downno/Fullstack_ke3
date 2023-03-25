var IPK = 2.8;
var murid = [
    [1,"Bain",3.5],
    [2,"Aji",3.0],
    [3,"Hendra",2.0]
]
for (i=0; i<murid.length; i++)
{
    if (murid[i][2]>=3)
    {
        console.log((i+1)+". "+murid[i][1] + ", IPK = "+  murid[i][2] + " Lulus");
    }
    else 
    {
        console.log((i+1)+". "+murid[i][1] + ", IPK = "+  murid[i][2] + " Gagal");
    }
}