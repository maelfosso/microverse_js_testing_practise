const analysis = (arr) => {
  let final = arr.every((a) => typeof a === 'number');

  if (arr.length == 0) {
    throw new Error('Array must have at least one number');
  }

  if (!final) {
    throw new Error('Array must only contains number.');
  }
  
  return {
    average: arr.reduce((a,b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

export default analysis;
