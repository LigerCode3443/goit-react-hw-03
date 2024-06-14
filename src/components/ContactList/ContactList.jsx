import { Contact } from "../Contact/Contact";
import s from "./Contact.module.css";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      <Contact contacts={contacts} handleDelete={handleDelete} />
    </ul>
  );
};
