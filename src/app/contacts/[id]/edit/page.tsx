'use client';
import PageHeading from '@/app/ui/layout/PageHeading';
import { Form } from '@/app/ui/form/Form';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { ContactsContext } from '@/app/context/ContactsProvider';

export default function EditContact() {
  const contacts = useContext(ContactsContext);
  const { id } = useParams();

  const c = contacts.find((c) => c.id == id);

  return (
    <>
      <PageHeading heading="Edit Contact" />
      <Form values={c} update={true}/>
    </>
  );
}
