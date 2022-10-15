const upperlimit = 50;
const lowerLimit = 40;
const carSpeed= 60;

if (carSpeed>lowerLimit && carSpeed<upperlimit){
    console.log("safe driving");
}
else if(carSpeed<lowerLimit){
    console.log("can increase speed");
}
else if(carSpeed>upperlimit){
    console.log("Need to decrease the speed");
}