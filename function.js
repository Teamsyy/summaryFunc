function fillStartWord(startWord, word) {
  const a = startWord + word;

  if (word === null || word === undefined) {
    return undefined;
  }

  if (a.includes(word)) {
    return a;
  }
}
// console.log(fillStartWord("JS", "beginner"));
// console.log(fillStartWord("first", undefined));

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

function getBMIMeaning(BMI) {
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "Normal weight";
  } else {
    return "Overweight";
  }
}
// let bmi = calculateBMI(65, 1.8);
// console.log(getBMIMeaning(bmi));

// console.log(calculateBMI(65, 1.8));
// console.log(calculateBMI(80, 1.7));
// console.log(calculateBMI(44, 1.6));

function getMaxLength(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined;
  }
  return arrayOfString.reduce((a, b) => (a.length > b.length ? a : b));
}

// let array = ["hello", "hi", "hey"];
// console.log(getMaxLength(array));

function concatArray(array1, array2) {
  if (
    array1 === null ||
    array2 == null ||
    array1 === undefined ||
    array2 == undefined
  ) {
    return undefined;
  }

  // Check if both arrays are empty arrays
  if (array1.length === 0 && array2.length === 0) {
    return [];
  }

  // Check if one of the arrays is empty or null or undefined
  if (array1.length === 0 || array1 === null || array1 === undefined) {
    return array2;
  } else if (array2.length === 0 || array2 === null || array2 === undefined) {
    return array1;
  }

  return array1.concat(array2);
}

// console.log(concatArray([5, 10, 15], [2, 4, 6, 7]));
// console.log(concatArray([], []));
// console.log(concatArray([10, 6, 5], []));
// console.log(concatArray([], [5]));
// console.log(concatArray(undefined, undefined));
// console.log(concatArray(undefined, null));

function MinMedMax(num1, num2, num3) {
  const obj = {
    Min: Math.min(num1, num2, num3),
    Mid: Math.max(
      Math.min(num1, num2),
      Math.min(num1, num3),
      Math.min(num2, num3)
    ),
    Max: Math.max(num1, num2, num3),
  };
  return obj;
}
console.log(MinMedMax(85, 30, 1));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const myArray = [1, "hello", true, { name: "John" }];
console.log(shuffleArray(myArray));
