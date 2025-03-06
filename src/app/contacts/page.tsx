'use client';
import PageHeading from '@/app/ui/layout/PageHeading';
import { ContactList } from '../ui/contacts/ContactList';

export default function Contacts() {
  return (
    <>
      <PageHeading heading="*User Contacts" />
      <ContactList />
    </>
  );
}
