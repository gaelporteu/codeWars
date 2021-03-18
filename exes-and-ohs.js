function XO(str) {
  let equal = 0;
  str.split("").forEach((c) => {
    if ("x" === c.toLowerCase()) {
      equal += 1;
    }
    if ("o" === c.toLowerCase()) {
      equal -= 1;
    }
  });
  return equal === 0;
}
