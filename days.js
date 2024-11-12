const prompt = require(`prompt-sync`)({sigint: true});


let day = prompt("enter a number betweeen 1 - 7 = ")

if(isNaN(day)){
    console.log(`enter the correct number`)
}

else if(day == 1){
    console.log(`monday`);
}
else if(day == 2){
    console.log(`tuesday`);
}
else if(day == 3){
    console.log(`wednesday`);
}
else if(day == 4){
    console.log(`thursday`);
}
else if(day == 5){
    console.log(`friday`);
}
else if(day == 6){
    console.log(`saturday`);
}
else if(day == 7){
    console.log(`sunday`);
}
else
console.log(`enter a valid number between 1 - 7`);