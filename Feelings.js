var HAPPY_INDEX = 0;
var SAD_INDEX = 1;
var EXCITED_INDEX = 2;
var BORED_INDEX = 3;
var SAFE_INDEX = 4;
var SCARED_INDEX = 5;
var PEACEFUL_INDEX = 6;
var ANGRY_INDEX = 7;

var HOT_INDEX = 1;
var COLD_INDEX = 0;
var NOISY_INDEX = 3;
var QUITE_INDEX = 2;
var FULL_INDEX = 5;
var EMPTY_INDEX = 4;
var COMFORT_INDEX = 6;

function setFeelings(feelingsValues, value){
    console.log(value);
    if(value < 0){
    feelingsValues.push(-1);
    feelingsValues.push(Math.abs(value));
    }
    else{
        if(value > 0){
            feelingsValues.push(value);
            feelingsValues.push(-1);
        }
        else{
            feelingsValues.push(0);
            feelingsValues.push(0);
        }
    }
    return feelingsValues;
}

function HAPPY_TO_SERVER(){
    return 'Happy';
}
function SAD_TO_SERVER(){
    return 'Sad';
}
function EXCITED_TO_SERVER(){
    return 'Excited';
}
function BORED_TO_SERVER(){
    return 'Bored';
}
function SAFE_TO_SERVER(){
    return 'Safe';
}
function SCARED_TO_SERVER(){
    return 'Scared';
}
function PEACEFUL_TO_SERVER(){
    return 'Peaceful';
}
function ANGRY_TO_SERVER(){
    return 'Angry';
}

function HOT_TO_SERVER(){
    return 'Hot';
}
function COLD_TO_SERVER(){
    return 'Cold';
}
function NOISY_TO_SERVER(){
    return 'Noisy';
}
function QUIET_TO_SERVER(){
    return 'Quiet';
}
function FULL_TO_SERVER(){
    return 'Full';
}
function EMPTY_TO_SERVER(){
    return 'Empty';
}
function COMFORT_TO_SERVER(){
    return 'Comfort';
}
    