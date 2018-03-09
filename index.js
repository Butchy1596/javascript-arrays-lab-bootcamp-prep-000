const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var name = "Ralph"

//Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

//Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array:
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

//Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten(){
  kittens.shift(1);
  return kittens
}

//Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten(){
  kittens.pop(-1);
}

//Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function appendKitten(name){
  kittens...name;
  return kittens;
}