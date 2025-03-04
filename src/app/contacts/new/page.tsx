'use client';

import { ContactFormData } from '@/app/lib/definitions';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import { FormValidationContext } from '@/app/ui/FormValidationProvider';
import PageHeading from '@/app/ui/PageHeading';
import TextInput from '@/app/ui/TextInput';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function AddContactPage() {
  const router = useRouter();

  const [contacts, setContacts] = useContext(ContactsContext);
  const [, , disabled, setDisabled] = useContext(FormValidationContext);

  function handleSubmit(formData: FormData) {
    const dataObject = Object.fromEntries(formData.entries());
    if (!disabled) {
      //TODO: Toast alert on success
      setContacts([
        ...contacts,
        {
          ...(dataObject as ContactFormData),
          id: contacts.length + 1,
          imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
      ]);
      setDisabled(true);
      router.push('/contacts');
    }
  }

  const formElements = [
    {
      label: 'First Name',
      name: 'firstName',
    },
    {
      label: 'Last Name',
      name: 'lastName',
    },
    {
      label: 'E-mail Address',
      name: 'email',
    },
    {
      label: 'Phone Number',
      name: 'phone',
    },
  ];

  return (
    <>
      <PageHeading heading="Add New Contact" />
      <ErrorBoundary
        fallback={<p>There was an error while submitting the form</p>}
      >
        <form action={handleSubmit} className="flex flex-col">
          {formElements.map((el) => (
            <TextInput key={el.name} {...el} />
          ))}

          <button
            type="submit"
            className={clsx(
              'self-end py-3 px-5 font-semibold  rounded-lg w-min text-nowrap mt-3',
              disabled
                ? 'bg-slate-300 text-slate-400 cursor-not-allowed'
                : 'text-white bg-indigo-700'
            )}
          >
            Add Contact
          </button>
        </form>
      </ErrorBoundary>
    </>
  );
}
