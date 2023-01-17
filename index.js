const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((acc, currentValue) => {
    if(currentValue.assembled) {
        return acc + currentValue.battterAmount;
    } else {
        return acc;
    }
}, 31);
    
