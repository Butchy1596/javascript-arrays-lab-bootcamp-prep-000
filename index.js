const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var name = "Ralph"

function destructivelyAppendKitten(name){

  kittens.push(name);
  return kittens
}


function destructivelyPrependKitten(name){
  //var name = "Ralph"
  kittens.unshift(name);
  return kittens
}
