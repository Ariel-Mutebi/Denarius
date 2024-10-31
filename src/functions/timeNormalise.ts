const timeNormalise = (time: Date) => {
  const normalisedTime = time;
  normalisedTime.setHours(0, 0, 0, 0); // set to midnight for day comparisons
  return normalisedTime;
};

export default timeNormalise;