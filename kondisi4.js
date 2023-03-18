var power = 66;

if (power >= 100 ){
    console.log("Expert");
}
else if (power<=99 && power>70){
    console.log("pro");
}
else if (power<=69 && power>50){
    console.log("normal");
}
else if (power<=49 && power>30){
    console.log("basic");  
}
else {
    console.log("beginer");
} 