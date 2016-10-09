//minimum of two numbers

function min(a,b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else return a;
}

min (5,10);

//recursion

function isEven(num) {
  if (num === 0) {
    return true;

  } else if (num === 1) {
    return false;
  } else if (num > 0) {
    return (isEven(num - 2));
  } else if (num < 0) {
    return (isEven(num + 2));
  }
}

isEven(75);

// -1 doesnt work because the number is a negative, and it will keep recursing by -2, the way I fix this is that if the number is less than 0, recurse by +2.


//bean counting

function countBs (string) {
  return countChar(string, 'B');
}

function countChar (string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

