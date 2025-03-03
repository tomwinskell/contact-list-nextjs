import Image from 'next/image';
import { Contact } from '../lib/definitions';
import PageHeading from './PageHeading';

export default function ContactItem({
  first_name,
  last_name,
  image_url,
  email,
  phone,
}: Contact) {
  return (
    <>
      <PageHeading heading={`${first_name}, ${last_name}`} />
      <div>
        <Image
          className="rounded-full"
          src={image_url}
          alt={first_name}
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
