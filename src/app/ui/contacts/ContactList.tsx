import { keysToTitleCase } from '@/app/lib/helpers';
import { ContactData, FormData } from '@/app/lib/types';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ContactList(): React.ReactNode {
  const [data, setData] = useState<FormData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContacts(): Promise<void> {
      axios
        .get('/api/contacts')
        .then((res) => {
          const data = res.data.contacts;
          return data.map((c: ContactData) => keysToTitleCase(c));
        })
        .then((data) => setData(data))
        .then(() => setLoading(false));
    }
    getContacts();
  }, []);

  return (
    <div className="text-center">
      {loading ? (
        <div>You have no contacts.</div>
      ) : (
        data!.map((c: FormData) => (
          <Link key={c.id} href={`/contacts/${c.id}`}>
            <p className="mb-2">
              {c.firstName}, {c.lastName}
            </p>
          </Link>
        ))
      )}
    </div>
  );
}
