'use client'
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormData, ValidFieldNames } from '@/app/lib/types';
import { FormField } from './FormField';
import SubmitButton from './SubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema } from '@/app/lib/contactSchema';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { UpdateContext } from '@/app/context/ContactsProvider';

export function Form(): React.ReactNode {
  const forceUpdate = useContext(UpdateContext)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(ContactSchema) });

  async function onSubmit(data: FormData) {
    try {
      const response = await axios.post('/api/contacts', data);
      const { errors = {} } = response.data;

      const fieldErrorMapping: Record<string, ValidFieldNames> = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: 'phone',
        contactImage: 'contactImage',
      };

      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => errors[field]
      );

      if (fieldWithError) {
        setError(fieldErrorMapping[fieldWithError], {
          type: 'server',
          message: errors[fieldWithError],
        });
      } else {
        forceUpdate();
        router.push('/contacts');
      }
    } catch (error) {
      console.error(`Failed to submit form: ${error}`);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        type="text"
        placeholder="First name"
        error={errors.firstName}
        register={register}
        name="firstName"
      />
      <FormField
        type="text"
        placeholder="Last name"
        error={errors.lastName}
        register={register}
        name="lastName"
      />
      <FormField
        type="text"
        placeholder="E-mail address"
        error={errors.email}
        register={register}
        name="email"
      />
      <FormField
        type="tel"
        placeholder="Phone number"
        error={errors.phone}
        register={register}
        name="phone"
      />
      <FormField
        type="text"
        placeholder="Contact image"
        error={errors.contactImage}
        register={register}
        name="contactImage"
      />
      <SubmitButton text="Add Contact" disabled={false} />
    </form>
  );
}
