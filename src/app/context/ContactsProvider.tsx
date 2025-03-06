'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ContactData, FormData } from '@/app/lib/types';
import axios from 'axios';
import { keysToTitleCase } from '@/app/lib/helpers';

export const ContactsContext = createContext<FormData[]>([]);
export const UpdateContext = createContext<() => void>(() => {});

export default function ContactsProvider({
  children,
}: {
  children: ReactNode;
}): React.ReactNode {
  const [contacts, setContacts] = useState<FormData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<object>();
  const forceUpdate = () => setState({});

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
  }, [state]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ContactsContext.Provider value={contacts!}>
        <UpdateContext.Provider value={forceUpdate}>
          {children}
        </UpdateContext.Provider>
        </ContactsContext.Provider>
      )}
    </>
  );
}
