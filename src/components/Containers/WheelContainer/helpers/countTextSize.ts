const countTextSize = (segmentsNumber: number) => {
  return Math.floor(0.016 * Math.pow(segmentsNumber, 2) - 0.95 * segmentsNumber + 29);
};

export default countTextSize;
