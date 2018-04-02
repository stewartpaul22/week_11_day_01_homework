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

//// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//// Episode 4

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

//// Episode 5

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
