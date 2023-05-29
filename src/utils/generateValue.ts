function generateValue(min: number, max: number) {
  return Array.from({ length: max - min + 1 }, (_, index) => index + min);
}

export default generateValue;
