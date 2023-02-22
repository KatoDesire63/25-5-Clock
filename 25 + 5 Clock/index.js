var breakIncrement = document.getElementById('break-increment');
var breakDecrement = document.getElementById('break-decrement');
var sessionIncrement = document.getElementById('session-increment');
var sessionDecrement = document.getElementById('session-decrement');
var startStop = document.getElementById('start|_stop');
var reset = document.getElementById('reset');


var breakLength = document.getElementById('break-length');
var sessionLength = document.getElementById('session-length');
var timeLeft = document.getElementById('time-left');

var timer;
var timerStatus = "begin";

startStop.addEventListener('click', function() {
	if(timerStatus === 'begin' || timerStatus === 'stopped') {


		console.log('start');
		timerStatus = 'counting';
		timer = setInterval( function(){
			timeLeft.innerText = decrementTime(timeLeft.innerText);
		}, 1000);
		
	} else if(timerStatus === 'counting') { 

		console.log('stop');
		timerStatus = 'stopped';
		clearInterval(timer);
	}
})

reset.addEventListener('click', function(){
	console.log('reset');
	clearInterval(timer);
});


function decrementTime(timeString){
	var timeDisplay = timeString.split(":")
	var secondDisplay = pareInt(timeDisplay[0]);
	var minuteDisplay = pareInt(timeDisplay[1]);

    secondDisplay -= 1;

    if(secondDisplay === -1){
    	secondDisplay = 59;
    	minuteDisplay = 1;
    }

    if(secondDisplay <=9) {
    	secondDisplay = '0' + secondDisplay;
    }
    return minuteDisplay + ':' + secondDisplay;
}