export const getItem = (key: string) => {
  return localStorage.getItem(key);
};

export const setItem = (key: string, val: any) => {
  const transformedValue = typeof val === 'object' ? JSON.stringify(val) : val;
  localStorage.setItem(key, transformedValue);
};

export const clearData = (key: string) => {
  return localStorage.clearItem(key);
};

export const clearAllData = () => {
  return localStorage.clearAll();
};
