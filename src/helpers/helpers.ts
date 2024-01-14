const API_KEY = '1adf20763036c4de1305591df5db2b73';

export const createUrl = (url: string, city: string) => {
  return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`;
};