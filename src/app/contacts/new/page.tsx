'use client';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import PageHeading from '@/app/ui/PageHeading';
import TextInput from '@/app/ui/TextInput';
import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function NewContact() {
  const [contacts, setContacts] = useContext(ContactsContext);

  async function addContact(formData: FormData) {
    const dataObject = Object.fromEntries(formData.entries());
    dataObject.id = contacts.length + 1;
    dataObject.image_url = 'https://randomuser.me/api/portraits/women/2.jpg';
    let newContacts;
    if (contacts) {
      newContacts = [...contacts, dataObject];
    }
    setContacts(newContacts);
  }

  return (
    <>
      <PageHeading heading="Add New Contact" />
      <ErrorBoundary
        fallback={<p>There was an error while submitting the form</p>}
      >
        <form action={addContact} className="flex flex-col">
          <TextInput label="First Name" name="first_name" />
          <TextInput label="Last Name" name="last_name" />
          <TextInput label="Email Address" name="email" />
          <TextInput label="Phone Number" name="phone" />
          <div className="self-end py-3 px-5 text-white font-semibold bg-indigo-700 rounded-lg w-min text-nowrap mt-3">
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </ErrorBoundary>
    </>
  );
}
