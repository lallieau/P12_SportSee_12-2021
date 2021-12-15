export const formatDate = date => {
  const dateToFormat = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
  }).format(new Date(date));

  return dateToFormat;
};

export const formatDay = day => {
  const newDayFormat = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  if (day) return newDayFormat[day - 1];
};

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
