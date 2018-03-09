const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var name = "Ralph"
function destructivelyAppendKitten(name){
  name.pop(kittens)
  return kittens
}
