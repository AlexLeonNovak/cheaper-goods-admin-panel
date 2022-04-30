import { useEffect, useState } from 'react';

type Colors = 'primary' | 'danger' | 'success' | 'warning' | 'info';

export interface ToastData {
  id?: string;
  color: Colors;
  message: string | null;
}

const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

let listener: ((state: ToastData) => void) | null = null;

let memoryState: ToastData = { color: 'primary', message: null, id: genId() };

const createToast = (state: ToastData) => {
  state.id = genId();
  memoryState = state;
  if (listener) {
    listener(state);
  }
};
const toast = (message: string, color: Colors = 'primary') => {
  createToast({ message, color });
};

toast.success = (message: string) => createToast({ message, color: 'success' });
toast.error = (message: string) => createToast({ message, color: 'danger' });
toast.warning = (message: string) => createToast({ message, color: 'warning' });
toast.primary = (message: string) => createToast({ message, color: 'primary' });
toast.info = (message: string) => createToast({ message, color: 'info' });

export { toast };

export const useToast = () => {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listener = setState;

    return () => {
      listener = null;
    };
  }, [state]);

  return state;
};
