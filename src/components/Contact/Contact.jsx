import React from "react";

import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={styles.list}>
      {name}: {number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
