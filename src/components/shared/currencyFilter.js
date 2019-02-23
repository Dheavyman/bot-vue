export default function (amount, sign) {
  return `${sign}${amount.toFixed(2)}`;
}
