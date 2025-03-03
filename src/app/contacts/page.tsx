'use client';
import { Contact } from '@/app/lib/definitions';
import Link from 'next/link';
import { useContext } from 'react';
import { ContactsContext } from '../ui/ContactsProvider';
import PageHeading from '../ui/PageHeading';

export default function Contacts() {
  const contacts = useContext(ContactsContext);

  return (
    <>
      <PageHeading heading='*User* Contacts'/>
      <div>
        {contacts ? (
          contacts.map((c: Contact) => (
            <Link key={c.id} href={`/contacts/${c.id}`}>
              <p className='mb-2'>{c.first_name}, {c.last_name}</p>
            </Link>
          ))
        ) : (
          <div>You have no contacts</div>
        )}
      </div>
    </>
  );
}
