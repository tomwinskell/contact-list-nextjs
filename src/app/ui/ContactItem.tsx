import Image from 'next/image';
import { Contact } from '../lib/definitions';

export default function ContactItem({
  name,
  image_url,
  email,
  phone,
}: Contact) {
  return (
    <>
      <div>{name}</div>
      <div ><Image className='rounded-full' src={image_url} alt={name} width="128" height="128"/></div>
      <div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </>
  );
}
