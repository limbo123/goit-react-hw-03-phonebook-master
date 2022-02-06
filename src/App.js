import React from "react";
import shortid from "shortid";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";



class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if(contacts) {
      this.setState({ contacts });
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  createForm = (name, number) => {
    if (
      this.state.contacts.every((el) => {
        return el.name !== name;
      })
    ) {
      const contact = {
        name,
        number,
        id: shortid.generate(),
      };

      this.setState((prevState) => {
        return {
          contacts: [contact, ...prevState.contacts],
        };
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((cont) => cont.id !== id),
    }));
  };

  setFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createForm={this.createForm} />

        <h1>Contacts</h1>
        <Filter filter={this.state.filter} filterChange={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
