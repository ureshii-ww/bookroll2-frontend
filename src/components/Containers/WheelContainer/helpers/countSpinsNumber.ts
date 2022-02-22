const countSpinsNumber = (spinTime: number) => {
  const rangeNumber = 2;
  const divider = Math.floor(spinTime / rangeNumber)
  const minNumber = spinTime - divider;
  const maxNumber = spinTime + divider;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

export default countSpinsNumber;
