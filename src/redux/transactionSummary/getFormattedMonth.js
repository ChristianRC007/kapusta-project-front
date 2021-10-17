import { nanoid } from 'nanoid';

const formatter = Intl.DateTimeFormat('ru', { month: 'long' });

export const getFormattedMonth = payload => {
  return payload.map(({ total, _id: { month, year } }) => {
    const date = new Date(year, month - 1);

    const obj = {
      id: nanoid(),
      month: formatter.format(date).toUpperCase(),
      total,
    };

    return obj;
  });
};
