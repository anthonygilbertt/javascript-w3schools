// this array property Returns the function that created the Array object's prototype


//This is related to how you generate objects

//The purpose of the constructor function is to have a special function that makes the object for you.


// var myCar = {

//     maxSpeed: 100,
//     driver: "Anthony",
//     drive: function(speed, time){
//         console.log(speed * time);
//     },
//     logDriver: function(){
//         console.log("driver's name is" + this.driver);
//     }

// }

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver's name is " + this.driver);
    };
    
}

var myCar = new Car(70, "Net Ninja");
var myCar2 = new Car(60, "Spongebob");
var myCar3 = new Car(80, "Patrick");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();