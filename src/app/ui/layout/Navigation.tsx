import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='text-white text-md font-semibold p-5 text-nowrap bg-indigo-700 rounded-2xl w-full min-w-min lg:w-min'>
      <ul className="flex flex-row gap-5 justify-center">
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/contacts/new">New Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
