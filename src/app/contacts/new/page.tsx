'use client';

import PageHeading from '@/app/ui/PageHeading';
import AddContactForm from '@/app/ui/AddContactForm';
import FormValidationProvider from '@/app/ui/FormValidationProvider';

export default function AddContactPage() {
  return (
    <>
      <PageHeading heading="Add New Contact" />
      <FormValidationProvider>
        <AddContactForm />
      </FormValidationProvider>
    </>
  );
}
