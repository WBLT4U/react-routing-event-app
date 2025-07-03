export function isValidText(value) {
  return value && value.trim().length > 0;
}

export function isValidDate(value) {
  const date = new Date(value);
  return value && !isNaN(date); // fixed: safer check for invalid date
}

export function isValidImageUrl(value) {
  return value && value.startsWith('http');
}
