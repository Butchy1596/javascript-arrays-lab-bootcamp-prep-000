const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var name = "Ralph"

function destructivelyAppendKitten(name){

  kittens.push(name);
  return kittens
}

function destructivelyAppendKitten(name){
  var name = "Ralph"
  kittens.shift(name);
  return kittens
}
