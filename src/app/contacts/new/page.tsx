'use client';
import {
  Contact,
  FormErrorObject,
  RegexValidationObject,
  ValidationKey,
} from '@/app/lib/definitions';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import PageHeading from '@/app/ui/PageHeading';
import TextInput from '@/app/ui/TextInput';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function AddContactPage() {
  const router = useRouter();

  const [contacts, setContacts] = useContext(ContactsContext);

  const [errors, setErrors] = useState<FormErrorObject>({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
  });

  const [formData, setFormData] = useState<Contact>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const validationRegex: RegexValidationObject = {
    firstName: /^[a-zA-Z]{4,}$/,
    lastName: /^[a-zA-Z]{4,}$/,
    email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
  };

  function validate(): FormErrorObject {
    const newErrors = { ...errors };
    for (const [key, value] of Object.entries(formData)) {
      newErrors[key as ValidationKey] = validationRegex[
        key as ValidationKey
      ].test(value.toString());
    }
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (Object.values(errors).some((v) => !v)) {
      //TODO: Toast alert on error
      console.log('Errors in form.');
      return;
    } else {
      //TODO: Toast alert on success
      setContacts([
        ...contacts,
        {
          ...formData,
          id: contacts.length + 1,
          imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        } as Contact,
      ]);
      router.push('/contacts');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(validate());
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formElements = [
    {
      label: 'First Name',
      name: 'firstName',
      valid: errors.firstName,
      value: formData.firstName,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      valid: errors.lastName,
      value: formData.lastName,
    },
    {
      label: 'E-mail Address',
      name: 'email',
      valid: errors.email,
      value: formData.email,
    },
    {
      label: 'Phone Number',
      name: 'phone',
      valid: errors.phone,
      value: formData.phone,
    },
  ];

  return (
    <>
      <PageHeading heading="Add New Contact" />
      <ErrorBoundary
        fallback={<p>There was an error while submitting the form</p>}
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          {formElements.map((el) => (
            <TextInput key={el.name} {...el} handleChange={handleChange} />
          ))}
          <div className="self-end py-3 px-5 text-white font-semibold bg-indigo-700 rounded-lg w-min text-nowrap mt-3">
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </ErrorBoundary>
    </>
  );
}
