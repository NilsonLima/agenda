import { renderHook, act } from '@testing-library/react-hooks';

import useLocalStorage from '../useLocalStorage';

const renderWrappedHook = (
  key: string,
  initialValue: any,
) => renderHook(() => useLocalStorage(key, initialValue));

describe('useLocalStorage', () => {
  const key = 'someKey';

  afterEach(() => {
    localStorage.clear();
  });

  describe('when key is not stored', () => {
    const initialValue = 'initialValue';

    it('should return initial value', () => {
      const { result } = renderWrappedHook(key, initialValue);
      expect(result.current.value).toEqual(initialValue);
    });
  });

  describe('when key is stored', () => {
    const storedValue = 'storedValue';

    beforeAll(() => {
      localStorage.setItem(key, JSON.stringify(storedValue));
    });

    it('should return stored value', () => {
      const { result } = renderWrappedHook(key, null);
      expect(result.current.value).toEqual(storedValue);
    });
  });

  describe('when some value must be stored', () => {
    const valueToBeStored = 'valueToBeStored';

    it('should store it with given callback', () => {
      const { result } = renderWrappedHook(key, null);

      act(() => result.current.setValue(valueToBeStored));

      const storedValue = localStorage.getItem(key) || '';

      expect(result.current.value).toEqual(valueToBeStored);
      expect(JSON.parse(storedValue)).toEqual(valueToBeStored);
    });
  });
});
