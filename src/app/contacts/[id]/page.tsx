'use client';
import { Contact } from '@/app/lib/definitions';
import ContactItem from '@/app/ui/ContactItem';
import { ContactsContext } from '@/app/ui/ContactsProvider';
import Error from 'next/error';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

export default function ContactPage() {
  const { id } = useParams();
  const contacts = useContext(ContactsContext)

  function getContact(): Contact {
    if (contacts && id) {
      return contacts[parseInt(id.toString()) - 1];
    } else {
      //TODO: id and contacts may return undefined, deal with these edge cases
      throw Error;
    }
  }

  const c = getContact();

  return (
    <>
      <ContactItem {...c} />
    </>
  );
}
