import mmkv from './mmkv';

const mmkvStorage = {
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return Promise.resolve(value ?? null); // Ensure it returns a Promise
  },
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
    return Promise.resolve(true); // Ensure a resolved Promise
  },
  removeItem: (key: string) => {
    mmkv.delete(key);
    return Promise.resolve(); // Ensure a resolved Promise
  },
};

export default mmkvStorage;
