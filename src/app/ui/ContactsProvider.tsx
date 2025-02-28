'use client'
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Contact } from '@/app/lib/definitions';
import { getContacts } from '@/app/lib/getContacts';

export const ContactsContext = createContext<Contact[] | null>(null);

export default function ContactsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contacts, setContacts] = useState<Contact[] | null>(null);

  useEffect(() => {
    async function fetchContacts() {
      setContacts(await getContacts());
    }
    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider value={contacts}>
      {children}
    </ContactsContext.Provider>
  );
}
