import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// import React from 'react';
// import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';

// export const ContactList = ({ filterContact, deleteContact }) => {
//   const filteredContacts = filterContact();

//   return (
//     <ul>
//       {filteredContacts.map(contact => (
//         <ContactListItem
//           key={contact.id}
//           contact={contact}
//           deleteContact={deleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   filterContact: PropTypes.func.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
