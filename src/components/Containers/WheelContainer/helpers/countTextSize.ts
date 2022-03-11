const countTextSize = (segmentsNumber: number) => {
  return Math.ceil(
    18.61463 -
      0.3442469 * segmentsNumber +
      0.00358241 * Math.pow(segmentsNumber, 2) -
      0.0000139929 * Math.pow(segmentsNumber, 3)
  );
};

export default countTextSize;
