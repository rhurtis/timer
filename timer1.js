/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example usage:

*/


let inputArray = process.argv.slice(2);


let testSound = function() {
  process.stdout.write('\x07');
 
};


for (let time of inputArray) {
  
  if ((time >= 0)) {
    setTimeout(testSound,time);
  }
}

