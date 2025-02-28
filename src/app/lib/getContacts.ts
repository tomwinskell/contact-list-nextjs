import axios from "axios";

export async function getContacts() {
  const response = await axios.get(
    'http://localhost:3000/data/contacts.json'
  );
  return response.data.contacts;
}