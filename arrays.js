var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, arg) {
  var newArray = new Array();
  //return array.unshift(arg);
  newArray = [arg, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, arg) {
  //return array.unshift(arg);
  newArray = [arg, ...array]
  return newArray
}

