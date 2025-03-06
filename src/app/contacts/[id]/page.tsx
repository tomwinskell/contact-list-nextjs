'use client';

import { Contact } from '@/app/ui/Contact';

export default function ContactPage() {
  const { id } = useParams();


  function getContact(): Contact | undefined {
    if (contacts && id) {
      return contacts.filter((c) => c.id === id)[0];
    }
  }

  const c = getContact();

  return (
    <>{c === undefined ? <div>No contact.</div> : <Contact {...c} />}</>
  );
}
