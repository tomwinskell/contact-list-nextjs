import Image from 'next/image';
import { Contact } from '../lib/definitions';
import PageHeading from './PageHeading';

export default function ContactItem({
  firstName,
  lastName,
  imageUrl,
  email,
  phone,
}: Contact) {
  return (
    <>
      <PageHeading heading={`${firstName}, ${lastName}`} />
      <div>
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={firstName}
          width="128"
          height="128"
        />
      </div>
      <div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </>
  );
}
