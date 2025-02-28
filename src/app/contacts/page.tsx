'use client';
import { Contact } from '@/app/lib/definitions';
import Link from 'next/link';
import ContactItem from '@/app/ui/ContactItem';
import { useContext } from 'react';
import { ContactsContext } from '../ui/ContactsProvider';

export default function Contacts() {
  const contacts = useContext(ContactsContext)

  return (
    <>
      <div>View All Contacts</div>
      <div>
        {contacts ? (
          contacts.map((c: Contact) => (
            <Link key={c.id} href={`/contacts/${c.id}`}>
              <ContactItem {...c}></ContactItem>
            </Link>
          ))
        ) : (
          <div>You have no contacts</div>
        )}
      </div>
    </>
  );
}
