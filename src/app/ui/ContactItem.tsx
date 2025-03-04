import Image from 'next/image';
import { Contact } from '../lib/definitions';
import PageHeading from './PageHeading';
import clsx from 'clsx';
import { ContactsContext } from './ContactsProvider';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertModal } from './ModalElement';

export default function ContactItem({
  id,
  firstName,
  lastName,
  imageUrl,
  email,
  phone,
}: Contact) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [contacts, setContacts] = useContext(ContactsContext);
  const router = useRouter();

  function handleDelete() {
    setModalOpen(false);
    router.push('/contacts');
    setContacts(contacts.filter((c) => c.id !== id));
  }

  return (
    <>
      <PageHeading heading={`${firstName}, ${lastName}`} />
      {id === undefined ? (
        <div>No contact.</div>
      ) : (
        <>
          <div className="flex sm:flex-row flex-col justify-around items-center py-5 mb-5">
            <div>
              <Image
                className="rounded-full"
                src={imageUrl}
                alt={firstName}
                width="128"
                height="128"
              />
            </div>
            <div className="self-center text-center mt-5 sm:m-0">
              <div className="font-semibold text-sm">E-mail</div>
              <div className="mb-2">{email}</div>
              <div className="font-semibold text-sm">Phone</div>
              <div>{phone}</div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <button
              onClick={() => router.push(`/contacts/${id}/edit`)}
              className={clsx(
                'py-2 px-4 font-semibold  rounded-lg w-min bg-indigo-700 text-white'
              )}
            >
              Edit
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className={clsx(
                ' py-2 px-4 font-semibold  rounded-lg w-min bg-red-400 text-white'
              )}
            >
              Delete
            </button>
          </div>
          <AlertModal
            isOpen={isModalOpen}
            onYes={() => handleDelete()}
            onCancel={() => setModalOpen(false)}
            message="Do you wish to delete this contact?"
          />
        </>
      )}
    </>
  );
}
