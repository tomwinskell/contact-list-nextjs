import { RiContactsBook3Fill } from "react-icons/ri";

export default function Header() {
  return (
    <>
      <div className="self-center rounded-full text-8xl text-indigo-500 bg-indigo-700 max-w-max p-5">
        <RiContactsBook3Fill />
      </div>
      <div className="self-center text-4xl text-indigo-700 font-bold mb-5 mt-2">
        Contacts
      </div>
    </>
  );
}
