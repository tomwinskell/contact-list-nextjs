import { SetStateAction, Dispatch } from 'react';

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Contact = {
  id?: number;
  imageUrl?: string;
} & ContactFormData;

export type TextInputProps = {
  label: string;
  name: string;
};

export type FormErrorObject = Record<string, boolean>;

export type RegexValidationObject = Record<string, RegExp>;

export type ValidationKey = 'firstName' | 'lastName' | 'email' | 'phone';

export type FormValidationType = [
  FormErrorObject,
  Dispatch<SetStateAction<FormErrorObject>>,
  boolean,
  Dispatch<SetStateAction<boolean>>
];
