let number = 3
let text = ""

if(number % 3 == 0){
  text = text.concat("Fizz")
}

if(number % 5 == 0){
  text = text.concat("Buzz")
}

if(text == ""){
  text = number
}

console.log(text)

