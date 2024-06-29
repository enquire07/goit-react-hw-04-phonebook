// import React from 'react';
// import css from './ContactListItem.module.css';
// import PropTypes from 'prop-types';

// const ContactListItem = ({ filteredContact, deleteContact }) => {
//   const handleDelete = () => {
//     deleteContact(filteredContact.id);
//   };

//   return (
//     <li className={css.contactListItem}>
//       <p>{filteredContact.name}:</p>
//       <p>{filteredContact.number}</p>
//       <button onClick={handleDelete}>x</button>
//     </li>
//   );
// };

// ContactListItem.propTypes = {
//   filteredContact: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactListItem;
import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li className={css.contactListItem}>
      <p>{filteredContact.name}:</p>
      <p>{filteredContact.number}</p>
      <button onClick={handleDelete}>x</button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
