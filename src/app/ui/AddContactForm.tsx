import { ErrorBoundary } from 'react-error-boundary';
import TextInput from '@/app/ui/TextInput';
import { ContactFormData } from '@/app/lib/definitions';
import { formElements } from '@/app/lib/addContactFormElements';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import { FormValidationContext } from '@/app/ui/FormValidationProvider';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import ToastSuccess from './ToastSuccess';
import { v4 as uuidv4 } from 'uuid';
import SubmitButton from './SubmitButton';

export default function AddContactForm() {
  const router = useRouter();

  const [contacts, setContacts] = useContext(ContactsContext);
  const [, , disabled, setDisabled] = useContext(FormValidationContext);
  const [isToastOpen, setToastOpen] = useState(false);

  function handleSubmit(formData: FormData) {
    const dataObject = Object.fromEntries(formData.entries());
    const random = Math.floor(Math.random() * 9);
    if (!disabled) {
      setContacts([
        ...contacts,
        {
          ...(dataObject as ContactFormData),
          id: uuidv4(),
          imageUrl: `https://randomuser.me/api/portraits/lego/${random}.jpg`,
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
      <ErrorBoundary
        fallback={<p>There was an error while submitting the form.</p>}
      >
        <form action={handleSubmit} className="flex flex-col">
          {formElements.map((el) => (
            <TextInput key={el.name} {...el} />
          ))}

          <SubmitButton text="Add Contact" disabled={disabled} />
        </form>
      </ErrorBoundary>
      <ToastSuccess isOpen={isToastOpen} onClose={() => setToastOpen(false)}>
        Contact successfully added.
      </ToastSuccess>
    </>
  );
}
