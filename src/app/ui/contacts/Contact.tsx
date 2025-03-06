import Image from 'next/image';
import PageHeading from '@/app/ui/layout/PageHeading';
// import clsx from 'clsx';
// import { AlertModal } from './ModalElement';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useRef } from 'react';
import { ContactsContext, UpdateContext } from '@/app/context/ContactsProvider';
import clsx from 'clsx';
import AlertModal, { ModalHandle } from '@/app/ui/alerts/ModalElement';
import axios from 'axios';

export function Contact() {
  const modal = useRef<ModalHandle>(null);
  const contacts = useContext(ContactsContext);
  const forceUpdate = useContext(UpdateContext)
  const { id } = useParams();
  const router = useRouter();

  const c = contacts.find((c) => c.id == id);

  function handleModal() {
    if (modal.current) {
      modal.current.changeModalState(!modal.current.modalState);
    }
  }

  async function handleDelete() {
    try {
      const response = await axios.delete('/api/contacts', {
        data: {
          id: id,
        },
      });
      if (response.status === 200) {
        forceUpdate();
        router.push('/contacts')
      }
    } catch (error) {
      console.error(`Failed to delete contact: ${error}`);
    }
  }

  return (
    <>
      {c === undefined ? (
        <PageHeading heading={'No contact found.'} />
      ) : (
        <>
          <PageHeading heading={`${c.firstName}, ${c.lastName}`} />
          <div className="flex sm:flex-row flex-col justify-around items-center py-5 mb-5">
            <div>
              <Image
                className="rounded-full"
                src={c.contactImage}
                alt={c.firstName}
                width="128"
                height="128"
              />
            </div>
            <div className="self-center text-center mt-5 sm:m-0">
              <div className="font-semibold text-sm">E-mail</div>
              <div className="mb-2">{c.email}</div>
              <div className="font-semibold text-sm">Phone</div>
              <div>{c.phone}</div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            {/* <button
              onClick={() => router.push(`/contacts/${id}/edit`)}
              className={clsx(
                'py-2 px-4 font-semibold  rounded-lg w-min bg-indigo-700 text-white'
              )}
            >
              Edit
            </button> */}
            <button
              onClick={handleModal}
              className={clsx(
                ' py-2 px-4 font-semibold  rounded-lg w-min bg-red-400 text-white'
              )}
            >
              Delete
            </button>
          </div>
          <AlertModal
            ref={modal}
            onYes={() => handleDelete()}
            onCancel={handleModal}
            message="Do you wish to delete this contact?"
          />
        </>
      )}
    </>
  );
}
