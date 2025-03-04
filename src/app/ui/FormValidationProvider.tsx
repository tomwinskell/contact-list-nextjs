'use client';
import { createContext, ReactNode, useState, useEffect } from 'react';
import { FormErrorObject, FormValidationType } from '@/app/lib/definitions';

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
  const [error, setError] = useState<FormErrorObject>({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (Object.values(error).every((v) => !v)) {
      setDisabled(false);
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
