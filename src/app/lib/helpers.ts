import { ContactData, FormData } from './types';

export function keysToLowerCase(object: ContactData): ContactData {
  let newObject = {};
  for (const [key, value] of Object.entries(object)) {
    newObject = { ...newObject, [key.toLowerCase()]: value };
  }
  return newObject as ContactData;
}

export function keysToTitleCase(object: ContactData): FormData {
  const fieldMapping: Record<string, string> = {
    id: 'id',
    firstname: 'firstName',
    lastname: 'lastName',
    email: 'email',
    phone: 'phone',
    contactimage: 'contactImage',
  };

  const transformed = Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      fieldMapping[key] || key,
      value,
    ])
  );

  return transformed as FormData;
}
