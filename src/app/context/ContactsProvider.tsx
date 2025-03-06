'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ContactData, FormData } from '@/app/lib/types';
import axios from 'axios';
import { keysToTitleCase } from '@/app/lib/helpers';

export const ContactsContext = createContext<FormData[]>([]);

export default function ContactsProvider({
  children,
}: {
  children: ReactNode;
}): React.ReactNode {
  const [contacts, setContacts] = useState<FormData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContacts(): Promise<void> {
      axios
        .get('/api/contacts')
        .then((res) => {
          const data = res.data.contacts;
          return data.map((c: ContactData) => keysToTitleCase(c));
        })
        .then((data) => setContacts(data))
        .then(() => setLoading(false));
    }
    getContacts();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ContactsContext.Provider value={contacts!}>
          {children}
        </ContactsContext.Provider>
      )}
    </>
  );
}
