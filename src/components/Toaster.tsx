import { useEffect, useRef } from 'react';
import { useToast } from '../common/utils/toast';
import { Toast } from 'primereact/toast';

export const Toaster = () => {
  const toastData = useToast();
  const toaster = useRef<Toast>(null);

  useEffect(() => {
    if (toastData.message) {
      const { type, message, summary } = toastData;
      toaster?.current?.show({
        severity: type,
        summary,
        detail: message,
        life: 5000,
      });
    }
  }, [toastData]);

  return <Toast ref={toaster} />;
};
