export function dateDiff(startDate: Date, endDate: Date): string {
  if (isNaN(startDate.getTime())) {
    return 'Invalid date format';
  }

  if (startDate > endDate) {
    return 'Start date is in the future';
  }

  let years: number = endDate.getFullYear() - startDate.getFullYear();
  let months: number = endDate.getMonth() - startDate.getMonth();
  let days: number = endDate.getDate() - startDate.getDate();

  // Adjust if the current day is earlier than the start day
  if (days < 0) {
    months -= 1;
  }

  // Adjust if the month calculation is negative
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Output formatting
  if (years === 0 && months === 0) {
    return '~ 0';
  }

  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else if (years < 5) {
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
}

export default dateDiff