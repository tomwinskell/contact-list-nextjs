import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

export type FormData = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactImage: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  options?: RegisterOptions<FormData, ValidFieldNames>;
};

export type ValidFieldNames =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'contactImage';

export type ContactData = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  contactimage: string;
};
