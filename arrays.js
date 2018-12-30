var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, arg) {
  var newArray = new Array();
  //return array.unshift(arg);
  newArray = [arg, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, arg) {
  array.unshift(arg);
  return array
}

function addElementToBeginningOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newArray = new Array();
  newArray = [...array, element]
  return newArray
}

