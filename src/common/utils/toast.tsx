import { useEffect, useState } from 'react';
import { ToastSeverityType } from 'primereact/toast';

export interface ToastData {
  id?: string;
  summary: string | null;
  type: ToastSeverityType;
  message: string | null;
}

const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

let listener: ((state: ToastData) => void) | null = null;

let memoryState: ToastData = { type: 'info', summary: null, message: null, id: genId() };

const createToast = (state: ToastData) => {
  state.id = genId();
  memoryState = state;
  if (listener) {
    listener(state);
  }
};
const toast = (message: ToastData | string) => {
  if (typeof message === 'string') {
    return toast.info(message);
  }
  createToast(message);
};

toast.success = (message: string) => createToast({ message, summary: 'Success', type: 'success' });
toast.error = (message: string) => createToast({ message, summary: 'Error', type: 'error' });
toast.warning = (message: string) => createToast({ message, summary: 'Warning', type: 'warn' });
toast.info = (message: string) => createToast({ message, summary: 'Information', type: 'info' });

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
