import { ContactsContext } from '@/app/context/ContactsProvider';
import { FormData } from '@/app/lib/types';
import Link from 'next/link';
import { useContext } from 'react';

export function ContactList(): React.ReactNode {
  const contacts = useContext(ContactsContext);

  return (
    <div className="text-center">
      {contacts.map((c: FormData) => (
        <Link key={c.id} href={`/contacts/${c.id}`}>
          <p className="mb-2 font-semibold">
            {c.firstName}, {c.lastName}
          </p>
          <hr className="border-t-2 border-gray-300 mx-auto w-1/8 mb-2" />
        </Link>
      ))}
    </div>
  );
}
