const capitalize = (str) => {
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
  return '';
} 

export default capitalize;
// module.exports = capitalize;