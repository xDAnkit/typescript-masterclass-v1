export const getItem = key => {
  return localStorage.getItem(key);
};

export const setItem = (key, val) => {
  const transformedValue = typeof val === 'object' ? JSON.stringify(val) : val;
  localStorage.setItem(key, transformedValue);
};

export const clearData = key => {
  return localStorage.clearItem(key);
};

export const clearAllData = key => {
  return localStorage.clearAll();
};
