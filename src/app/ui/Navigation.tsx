import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row gap-5 text-white text-md font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
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
