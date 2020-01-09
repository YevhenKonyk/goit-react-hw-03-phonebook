import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.listItem}>
            <Contact item={item} onDelete={() => onDeleteContact(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
