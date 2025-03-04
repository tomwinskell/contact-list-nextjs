'use client';
import { createContext, ReactNode, useState, useEffect } from 'react';
import { FormErrorObject, FormValidationType } from '@/app/lib/definitions';
import { formElements } from '../lib/addContactFormElements';

export const FormValidationContext = createContext<FormValidationType>([
  {},
  () => {},
  true,
  () => {},
]);

export default function FormValidationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [error, setError] = useState<FormErrorObject>({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (Object.values(error).length === 0) {
      return;
    } else if (
      Object.values(error).length === formElements.length &&
      Object.values(error).every((v) => !v)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [error]);

  return (
    <FormValidationContext.Provider
      value={[error, setError, disabled, setDisabled]}
    >
      {children}
    </FormValidationContext.Provider>
  );
}
