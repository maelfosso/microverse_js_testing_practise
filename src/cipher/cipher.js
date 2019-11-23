const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const cipher = (word, k) => {
  let result = word.map((l) => {
    let ix = letters.indexOf(l);
    if (ix == -1) {
      return l;
    }

    let nix = (ix + k) % 26;
    return letters[nix];
  });

  return result;
}

export default cipher;
