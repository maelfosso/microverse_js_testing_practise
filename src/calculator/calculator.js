const add = (a, b) => {
  return a + b;
}

const subtrack = (a, b) => {
  return a - b;
}

const divide = (a, b) => {
  if (b == 0) {
    throw new Error("Divide by 0 is not allowed");
  } else {
    return a / b;
  }
}

const multiply = (a, b) => {
  return a * b;
}

// export { add, subtrack, divide, multiply }
module.exports = { add, subtrack, divide, multiply }