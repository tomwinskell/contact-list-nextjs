'use client';

import PageHeading from '@/app/ui/PageHeading';

import FormValidationProvider from '@/app/ui/FormValidationProvider';
import EditContactForm from '@/app/ui/EditContactForm';

export default function AddContactPage() {
  return (
    <>
      <PageHeading heading="Add New Contact" />
      <FormValidationProvider>
        <EditContactForm />
      </FormValidationProvider>
    </>
  );
}
