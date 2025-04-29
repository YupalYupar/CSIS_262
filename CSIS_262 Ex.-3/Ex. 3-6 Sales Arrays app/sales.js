var region1 = [1540, 1130, 1580, 1105];
var region2 = [2010, 1168, 2305, 4102];
var region3 = [2450, 1847, 2710, 2391];
var region4 = [1845, 1491, 1284, 1575];
var region5 = [2120, 1767, 1599, 3888];

let sumReg1 = 0;
let sumReg2 = 0;
let sumReg3 = 0;
let sumReg4 = 0;
let sumReg5 = 0;
let sumQuart1 = 0;
let sumQuart2 = 0;
let sumQuart3 = 0;
let sumQuart4 = 0;
let sumQuart5 = 0;
let totalSum = 0;

sumQuart1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
sumQuart2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
sumQuart3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
sumQuart4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

for (let reg1 of region1) {
    sumReg1 += reg1
}
for (let reg2 of region2) {
    sumReg2 += reg2
}
for (let reg3 of region3) {
    sumReg3 += reg3
}
for (let reg4 of region4) {
    sumReg4 += reg4
}
for (let reg5 of region5) {
    sumReg5 += reg5
}

const allRegion = [...region1, ...region2, ...region3, ...region4, ...region5];
for (eachNum of allRegion) {
    totalSum += eachNum
}

alert ("Sales by Quarter" + 
    "\nQ1: " + sumQuart1 + 
    "\nQ2: " + sumQuart2 +
    "\nQ3: " + sumQuart3 +
    "\nQ4: " + sumQuart4
);

alert ("Sales by Region" +  
    "\nRegion 1: " + sumReg1 + 
    "\nRegion 2: " + sumReg2 +
    "\nRegion 3: " + sumReg3 + 
    "\nRegion 4: " + sumReg4 + 
    "\nRegion 5: " + sumReg5 
);

alert ("Total Sales: " + totalSum);