'use client';
import { Contact } from '@/app/lib/definitions';
import ContactItem from '@/app/ui/ContactItem';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

export default function ContactPage() {
  const { id } = useParams();
  const [contacts] = useContext(ContactsContext);

  function getContact(): Contact | undefined {
    if (contacts && id) {
      return contacts.filter((c) => c.id === id)[0];
    }
  }

  const c = getContact();

  return (
    <>{c === undefined ? <div>No contact.</div> : <ContactItem {...c} />}</>
  );
}
