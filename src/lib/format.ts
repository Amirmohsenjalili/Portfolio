const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function formatDigits(value: string, locale: string) {
  if (locale !== "fa") return value;
  return value.replace(/\d/g, (digit) => persianDigits[Number(digit)] ?? digit);
}

export function formatIndex(index: number, locale: string) {
  return formatDigits(String(index).padStart(2, "0"), locale);
}
