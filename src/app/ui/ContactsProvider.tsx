'use client';
import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
  Dispatch,
} from 'react';
import { Contact } from '@/app/lib/definitions';
import { getContacts } from '@/app/lib/getContacts';

type ContactsContext = [Contact[], Dispatch<SetStateAction<Contact[]>>];

export const ContactsContext = createContext<ContactsContext>([[], () => {}]);

export default function ContactsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      setContacts(await getContacts());
    }
    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider value={[contacts, setContacts]}>
      {children}
    </ContactsContext.Provider>
  );
}
