import { ContactsContext } from '@/app/context/ContactsProvider';
import { FormData } from '@/app/lib/types';
import Link from 'next/link';
import { useContext } from 'react';

export function ContactList(): React.ReactNode {
  const contacts = useContext(ContactsContext);

  return (
    <div className="text-center">

       { contacts.map((c: FormData) => (
          <Link key={c.id} href={`/contacts/${c.id}`}>
            <p className="mb-2">
              {c.firstName}, {c.lastName}
            </p>
          </Link>
        ))}

    </div>
  );
}
