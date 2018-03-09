const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var name = "Ralph"

//1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

//2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array:
function destructivelyPrependKitten(name){
  //var name = "Ralph"
  kittens.unshift(name);
  return kittens
}

//3) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten(){
  kittens.pop(1);
  return kittens
}

//1) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
//function destructivelyRemoveLastKitten(){
//  kittens.shift
//}
