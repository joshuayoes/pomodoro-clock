const secondsToClock = (_seconds: number): string => {
  const pureSeconds: number = _seconds % 60;
  const pureMinutes: number = (_seconds - pureSeconds) / 60;

  const prependSingleDigit = (number: number): string => {
    const time: string = number.toString();
    return time.length === 1 ? '0'.concat(time) : time;
  };

  const minutes = prependSingleDigit(pureMinutes);
  const seconds = prependSingleDigit(pureSeconds);

  return `${minutes}:${seconds}`;
};

export default secondsToClock;
