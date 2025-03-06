'use client';

import { formElements } from '@/app/lib/addContactFormElements';
import { Contact, ContactFormData } from '@/app/lib/types';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import { FormValidationContext } from '@/app/ui/FormValidationProvider';
import SubmitButton from '@/app/ui/form/SubmitButton';
import TextInput from '@/app/ui/TextInput';
import ToastSuccess from '@/app/ui/alerts/Toast';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function EditContactForm() {
  const { id } = useParams();
  const router = useRouter();
  const [contacts, setContacts] = useContext(ContactsContext);
  const [, , disabled, setDisabled] = useContext(FormValidationContext);
  const [isToastOpen, setToastOpen] = useState(false);

  function getContact(): Contact | undefined {
    if (contacts && id) {
      return contacts.filter((c) => c.id === id)[0];
    }
  }
  const c = getContact();

  function createFormElements() {
    let newFormEls = [...formElements];
    if (c) {
      for (const [key, value] of Object.entries(c)) {
        newFormEls = newFormEls.map((el) => {
          if (el.name === key) {
            return { ...el, data: value };
          } else {
            return { ...el };
          }
        });
      }
    }
    return newFormEls;
  }

  const f = createFormElements();

  function handleSubmit(formData: FormData) {
    const dataObject = Object.fromEntries(formData.entries());
    if (!disabled) {
      setContacts([
        ...contacts.filter((c) => c.id !== id),
        {
          ...(dataObject as ContactFormData),
          id: c!.id,
          imageUrl: c!.imageUrl,
        },
      ]);
      showToast();
    }
  }

  function cleanUp() {
    setDisabled(true);
    router.push('/contacts');
  }

  function showToast() {
    const toast = new Promise((resolve) => {
      setToastOpen(true);
      setTimeout(() => resolve('resolved'), 1000);
    });
    toast.then(() => {
      setToastOpen(false);
      cleanUp();
    });
  }

  return (
    <>
      {c === undefined ? (
        <div>No contact.</div>
      ) : (
        <>
          <ErrorBoundary
            fallback={<p>There was an error while submitting the form.</p>}
          >
            <form action={handleSubmit} className="flex flex-col">
              {f.map((el) => (
                <TextInput key={el.name} {...el} />
              ))}

              <SubmitButton text="Update Contact" disabled={disabled} />
            </form>
          </ErrorBoundary>
          <ToastSuccess
            isOpen={isToastOpen}
            onClose={() => setToastOpen(false)}
          >
            Contact updated successfully.
          </ToastSuccess>
        </>
      )}
    </>
  );
}
