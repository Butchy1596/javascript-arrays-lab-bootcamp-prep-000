const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var name = "Ralph"
function destructivelyAppendKitten(name){
  kittens.pop(name)
  return kittens
}
