const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const cipher = (word, k) => {
  let result = [...word].map((w) => {
    let l = w.toLowerCase();

    let ix = letters.indexOf(l);
    if (ix == -1) {
      return l;
    }

    let nix = (ix + k) % 26;
    return (l == w) ? letters[nix] : letters[nix].toUpperCase();
  });

  return result.join('');
}

export default cipher;
