/**
 * Format date on X axis from yyyy-mm-dd to dd
 * @param {string} date
 * @returns {string}
 */
export const formatDate = date => {
  const dateToFormat = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
  }).format(new Date(date));
  return dateToFormat;
};

/**
 * Format day on X axis from number to letter
 * @param {number} day
 * @returns {string}
 */
export const formatDay = day => {
  const newDayFormat = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  if (day) return newDayFormat[day - 1];
};

/**
 * Format the labels on the radar axis from number to words
 * @param {number} kind
 * @returns {string}
 */
export const formatKind = kind => {
  const newKindFormat = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  if (kind) return newKindFormat[kind - 1];
};
