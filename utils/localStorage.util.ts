export const setLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);
