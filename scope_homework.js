//// Go through each sample code and work out what the output will be and explain what happened.

//// Episode 1:  The variable 'name' is global, so it can be accessed from within printName when printName is invoked.  When printName is invoked it concatenates the value assigned to 'name' to the string within the function body, then prints out the full string.

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//// Episode 2:  The variable 'score' is declared globally and has a value assigned.  The variable 'score' is then declared locally to the result function; the local 'score' variable will take priority over the global version - known as variable shadowing.  Therefore, when result is invoked it returns 3.

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//// Episode 3:  The array 'myAnimals' is declared globally.  Then, within the 'listAnimals' function, instead of creating a new array, 'myAnimals' is reassigned a new set of values.  When listAnimals is invoked the for loop iterates over the new values in the array.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//// Episode 4:  suspects one to four are declared globally.  'sustectThree' is then declared and assigned a new value within the allSuspects function, but because var is used, the newly assigned value only exists in the scope of the function.  Therefore, when 'suspectThree' is referenced from outside of the allSuspects function it has the globally assigned value 'Keith'.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//// Episode 5:  An object called 'detective' is created with the properties 'name' and 'pet', each of which is assigned a value.  The function 'printName' is then declared. The function takes in the 'detective' object as an argument and returns the value of the name property.  The function 'detectiveInfo' is then declared; it assigns a new value to the detective object's 'name' property then returns the method call of printName(detective). The result being, when detectiveInfo() is called it returns the updated value for the detective object's name.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//// Episode 7 - Make up your own episode/s!

//// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
