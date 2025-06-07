// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs (pickupLocation - 42 );

}
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;

}
function distanceTravelledInFeet(start, destination) {
    return Math.abs (destination - start) * 264;
}  
function calculatesFarePrice (start, destination) {
    const distance = Math.abs(destination - start) * 264;
    if (distance <= 400) {
        return 0;
    } else if(distance > 400 && distance <= 2000) {
        return 2.56;
    } else if (distance > 2000 && distance <=2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}
