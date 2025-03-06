import Image from 'next/image';
import PageHeading from './layout/PageHeading';
// import clsx from 'clsx';
import { useEffect, useState } from 'react';
// import { AlertModal } from './ModalElement';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { FormData } from '@/app/lib/types';

export function Contact() {
  const [data, setData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function getContact(): Promise<void> {
      axios
        .get(`/api/contacts/${id}`)
        .then((res) => {
          const data = res.data.contacts;
          return data.map((c: ContactData) => keysToTitleCase(c));
        })
        .then((data) => setData(data))
        .then(() => setLoading(false));
    }
    getContact();
  });

  return (
    <>
      
      {loading ? (
        <PageHeading heading={'No contact.'} />
      ) : (
        <>
        <PageHeading heading={`${data!.firstName}, ${data!.lastName}`} />
          <div className="flex sm:flex-row flex-col justify-around items-center py-5 mb-5">
            <div>
              <Image
                className="rounded-full"
                src={data!.contactImage}
                alt={data!.firstName}
                width="128"
                height="128"
              />
            </div>
            <div className="self-center text-center mt-5 sm:m-0">
              <div className="font-semibold text-sm">E-mail</div>
              <div className="mb-2">{data!.email}</div>
              <div className="font-semibold text-sm">Phone</div>
              <div>{data!.phone}</div>
            </div>
          </div>
          {/* <div className="flex flex-row justify-between">
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
          /> */}
        </>
      )}
    </>
  );
}
