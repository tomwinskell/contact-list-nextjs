export type Contact = {
  id?: number;
  firstName: string;
  lastName: string;
  imageUrl?: string;
  email: string;
  phone: string;
};

export type FormErrorObject = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
};

export type RegexValidationObject = Record<string, RegExp>;

export type ValidationKey = 'firstName' | 'lastName' | 'email' | 'phone';
