export default function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  const more = [];
  const add = [];

  if (addition !== '') {
    for (let i = 0; i < additionRepeatTimes; i += 1) {
      add.push(`${addition}`);
    }
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    more.push(`${add.length !== 0 ? str + add.join(additionSeparator) : str}`);
  }

  return more.join(separator);
}
