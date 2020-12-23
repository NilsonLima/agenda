import { useState, useEffect } from 'react';

const getValueOnStore = (key: string, onGet: (v: any) => void) => {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    onGet(JSON.parse(storedValue));
  }
};

const setValueOnStore = (key: string, value: any, onSet: (v: any) => void) => {
  localStorage.setItem(key, JSON.stringify(value));
  onSet(value);
};

const useLocalStorage = (key: string, initialValue: any = null) => {
  const [state, setState] = useState(initialValue);

  const setValue = (value: any) => setValueOnStore(key, value, setState);

  useEffect(() => {
    getValueOnStore(key, setState);
  }, [key]);

  return { value: state, setValue };
};

export default useLocalStorage;
