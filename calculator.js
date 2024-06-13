function calculate(expression) {

  //create variables
  let operation = null
  let numA = null
  let numB = null
  let result = undefined

  //take the element in and split it into it's peices
  let stringArr = expression.split(" ")
  const elementCount = stringArr.length  
 
  //Figuring out what operation is being used and what the numbers are

  //inputs less than 2 elements
  if(elementCount < 2){
    alert("Too few inputs")
    return undefined
  }

  //2 element inputs
  else if(elementCount === 2){
    //assign each element to it's corresponding variable
    operation = stringArr[0]

    //check to see if the next item is a number
    if(isNaN(stringArr[1]) === true){
        alert(" input is not a number!")
        return undefined
      }
    else{
      numA = Number(stringArr[1])
      }
  }

  //3 element inputs
  else if(elementCount === 3){
    //assign each element to it's corresponding variable
    //check to see if the next item is a number
    if(isNaN(stringArr[0]) === true){
      alert("first input is not a number!")
      return undefined
    }
    else{
    numA = Number(stringArr[0])
    }
    
    operation = stringArr[1]

    if(isNaN(stringArr[2]) === true){
      alert("second input is not a number!")
      return undefined
    }
    else{
    numB = Number(stringArr[2])
    }
  
  }

  //more than 3 inputs
  else{
    alert("Too many inputs")
  }

  //determine what operation we are doing, and then do that operation
  if(operation === "+"){
    result = add(numA, numB)
  }
  else if(operation === "-"){
    result = subtract(numA, numB)
  }
  else if(operation === "*"){
    result = multiply(numA, numB)
  }
  else if(operation === "/"){
    result = divide(numA, numB)
  }
  else if(operation === "%"){
    result = modulo(numA, numB)
  }
  else if(operation === "^"){
    result = power(numA, numB)
  }
  //factorial also needs to filter the input to ensure it is not a decimal or negative
  else if(operation === "!"){
    if(numA <= 0){ //checks if it's negative
      alert("Factorial input must be positive.")
      return undefined
    }
    else if(!Number.isInteger(numA)){ //checks if it's a decimal
      alert("Factorial input must be a whole number.")
      return undefined
    }
    else{ //if it's not negative and not a decimal, then apply the factorial operation
    result = factorial(numA)
    }
  }
  else if(operation === "sqrt"){
    result = squareRoot(numA)
  }
  else{
   // console.log("Incorrect operation")
  }

  //return the result
  return result
}

//math operation functions
function add(a, b){
  return a + b
}
function subtract(a, b){
  return a - b
}
function multiply(a, b){
  return a*b
}
function divide(a, b){
  return a/b
}
function modulo(a, b){
  return a%b
}
function power(a, b){
  return a**b
}
function squareRoot(a){
  return Math.sqrt(a)
}
function factorial(a){
  let total = 1
  for(let i = a; i > 0; i--){
    total = i*total
  }
  return total
}



/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
