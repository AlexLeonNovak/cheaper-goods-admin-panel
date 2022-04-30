import { CToast, CToastBody, CToastClose, CToaster } from '@coreui/react';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { ToastData, useToast } from '../common/utils/toast';

export const Toaster = () => {
  const [toast, setToast] = useState<ReactElement | undefined>();
  const toastData = useToast();
  const toaster = useRef<HTMLDivElement>(null);
  const toastTpl = ({ id, color, message }: ToastData) => (
    <CToast
      data-toast-id={id}
      autohide={true}
      visible={true}
      color={color}
      className="text-white align-items-center"
      delay={8000}
    >
      <div className="d-flex">
        <CToastBody>{message}</CToastBody>
        <CToastClose className="me-2 m-auto" white />
      </div>
    </CToast>
  );

  useEffect(() => {
    if (toastData.message) {
      setToast(toastTpl(toastData));
    }
  }, [toastData]);

  return <CToaster ref={toaster} placement="top-end" push={toast} />;
};
