const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {
  if (isNaN(parseFloat(sampleActivity)) || typeof (sampleActivity) != "string" || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) {
    return false;
  }

  let elapsedTime = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  if (isNaN(elapsedTime)) {
    return false;
  }

  return Math.ceil(elapsedTime);
}
