import { RiContactsBook3Fill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex flex-row items-center">
      <div className="rounded-full text-4xl text-indigo-300 bg-indigo-700 max-w-max p-3">
        <RiContactsBook3Fill />
      </div>
      <div className="text-4xl text-indigo-700 font-bold ms-2">
        Contacts
      </div>
    </div>
  );
}
