document.onkeypress = function (evt) {
  evt = evt || window.event;
  var modal = document.getElementsByClassName("modal")[0];
  if (evt.keyCode === 27) {
    modal.computedStyleMap.display = "none";
  }
};

//when user clicks anywhere outside of the modal dialog, close it
window.onclick = function (evt) {
  var modal = document.getElementsByClassName("modal")[0];
  if (evt.target === modal) {
    modal.style.display = "none";
  }
};

function sumArrays(array) {
  var sum = 0;
  i = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function isInArray(element, array) {
  if (array.indexOf(element) > -1) {
    return true;
  }
  return false;
}

function shuffleArray(array) {
  var counter = array.length,
    temp,
    index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function intRandom(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
