import React, { useState } from 'react';
import '../Admin/Admin.css';
import { useCustomers, useMessages, useNewsletter, useQuote, useService, useUser } from '../../Hooks';
import CustomerForm from '../../Forms/CustomerForm';
import CustomerUpdateForm from '../../Forms/CustomerUpdateForm';
import MessagesForm from '../../Forms/MessagesForm';
import MessagesUpdateForm from '../../Forms/MessagesUpdateForm';
import NewsletterForm from '../../Forms/NewsletterForm';
import NewsletterUpdateForm from '../../Forms/NewsletterUpdateForm';
import ServicesForm from '../../Forms/ServicesForm';
import ServicesUpdateForm from '../../Forms/ServicesUpdateForm';
import UserForm from '../../Forms/UserForm';
import UserUpdateForm from '../../Forms/UserUpdateForm';

const Admin = () => {
  const [showNewsletterTable, setShowNewsletterTable] = useState(false);
  const [showMessagesTable, setShowMessagesTable] = useState(false);
  const [showCustomersTable, setShowCustomersTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);
  const [showServicesTable, setShowServicesTable] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newsletterData, newsletterError] = useNewsletter();
  const [messagesData, messagesError] = useMessages();
  const [customersData, customersError] = useCustomers();
  const [usersData, usersError] = useUser();
  const [servicesData, servicesError] = useService();

  const handleDeleteNewsletter = async (id) => {
    console.log('Deleting newsletter with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:9090/delete_newsletter/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting newsletter:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting newsletter:', error);
    }
  };

  const handleDeleteMessages = async (id) => {
    console.log('Deleting message with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:9090/delete_message/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting message:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const handleDeleteCustomers = async (id) => {
    console.log('Deleting customer with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:9090/delete_customer/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting customer:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const handleDeleteServices = async (id) => {
    console.log('Deleting service with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:9090/delete_service/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting service:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    console.log('Deleting user with ID:', id);
    try {
      const response = await fetch(`http://127.0.0.1:9090/delete_user/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Data deleted.');
        window.location.reload();
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleUpdateNewsletter = async (newsletter) => {
    setSelectedNewsletter(newsletter);
  };

  const handleUpdateService = async (service) => {
    setSelectedService(service);
  };

  const handleUpdateUser = async (user) => {
    setSelectedUser(user);
  };

  const handleUpdateMessage = async (message) => {
    setSelectedMessage(message);
  };

  const handleUpdateCustomer = async (customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseUpdateForm = () => {
    setSelectedNewsletter(null);
    setSelectedService(null);
    setSelectedUser(null);
    setSelectedMessage(null);
    setSelectedCustomer(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCreateModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  if (customersError || messagesError || newsletterError || usersError || servicesError)
    return <p>{messagesError.message || newsletterError.message || customersError.message || usersError.message || servicesError.message}</p>;

  if (!messagesData || !newsletterData || !customersData || !servicesData || !usersData)
    return null;

  return (
    <>
      <div className='admin-container'>
        <div className="button-container">
        <button type="button" onClick={() => { setShowNewsletterTable(!showNewsletterTable); setShowMessagesTable(false); setShowCustomersTable(false); setShowServicesTable(false);  setShowUsersTable(false); }}>Newsletters</button>
        <button type="button" onClick={() => { setShowMessagesTable(!showMessagesTable); setShowNewsletterTable(false); setShowCustomersTable(false); setShowServicesTable(false); setShowUsersTable(false); }}>Messages</button>
        <button type="button" onClick={() => { setShowCustomersTable(!showCustomersTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowServicesTable(false); setShowUsersTable(false); }}>Customers</button>
        <button type="button" onClick={() => { setShowServicesTable(!showServicesTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowCustomersTable(false); setShowUsersTable(false); }}>Services</button>
        <button type="button" onClick={() => {setShowUsersTable(!showUsersTable); setShowNewsletterTable(false); setShowMessagesTable(false); setShowCustomersTable(false); setShowServicesTable(false); }}>Users</button>
        </div>
        <div className="table-container">
        {showNewsletterTable && (
          <div>
            <table className="admin-table">
              <tbody>
                <h2><strong>Newsletter Data</strong></h2>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>Email</strong></td>
                  <td><strong>Buttons</strong></td>
                </tr>
                {newsletterData.newsletter.map((newsletter) => (
                  <tr key={newsletter.id}>
                    <td>{newsletter.id}</td>
                    <td>{newsletter.email}</td>
                    <td>
                      <button onClick={() => handleDeleteNewsletter(newsletter.id)}>Delete</button>
                      <button onClick={() => handleUpdateNewsletter(newsletter)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={openCreateModal}>Insert Data</button>
          </div>
        )}
        {isModalOpen && showNewsletterTable && (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={closeModal}>&times;</span>
      <NewsletterForm />
    </div>
  </div>
)}
        {selectedNewsletter && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>&times;</span>
              <NewsletterUpdateForm newsletter={selectedNewsletter} onClose={handleCloseUpdateForm} />
            </div>
          </div>
        )}

        {showCustomersTable && (
          <div>
            <table className="admin-table">
              <tbody>
                <h2><strong>Customer Data</strong></h2>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>Name</strong></td>
                  <td><strong>Comment</strong></td>
                  <td><strong>Buttons</strong></td>
                </tr>
                {customersData.customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.comment}</td>
                    <td>
                      <button onClick={() => handleDeleteCustomers(customer.id)}>Delete</button>
                      <button onClick={() => handleUpdateCustomer(customer)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={openCreateModal}>Insert Data</button>
          </div>
        )}
        {isModalOpen && showCustomersTable && (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={closeModal}>&times;</span>
      <CustomerForm />
    </div>
  </div>
)}
        {selectedCustomer && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>&times;</span>
              <CustomerUpdateForm customer={selectedCustomer} onClose={handleCloseUpdateForm} />
            </div>
          </div>
        )}

{showMessagesTable && (
          <div>
            <table className="admin-table">
              <tbody>
                <h2><strong>Message Data</strong></h2>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>Name</strong></td>
                  <td><strong>Message</strong></td>
                  <td><strong>Phone</strong></td>
                  <td><strong>Subject</strong></td>
                  <td><strong>Buttons</strong></td>
                </tr>
                {messagesData.messages.map((message) => (
                  <tr key={message.id}>
                    <td>{message.id}</td>
                    <td>{message.name}</td>
                    <td>{message.message}</td>
                    <td>{message.phone}</td>
                    <td>{message.subject}</td>
                    <td>
                      <button onClick={() => handleDeleteMessages(message.id)}>Delete</button>
                      <button onClick={() => handleUpdateMessage(message)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={openCreateModal}>Insert Data</button>
          </div>
        )}
        {isModalOpen && showMessagesTable && (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={closeModal}>&times;</span>
      <MessagesForm />
    </div>
  </div>
)}
        {selectedMessage && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>&times;</span>
              <MessagesUpdateForm message={selectedMessage} onClose={handleCloseUpdateForm} />
            </div>
          </div>
        )}

{showServicesTable && (
          <div>
            <table className="admin-table">
              <tbody>
                <h2><strong>Service Data</strong></h2>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>Description</strong></td>
                  <td><strong>Page Title</strong></td>
                  <td><strong>Photo Url</strong></td>
                  <td><strong>Price</strong></td>
                  <td><strong>Title</strong></td>
                  <td><strong>Buttons</strong></td>
                </tr>
                {servicesData.services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.description}</td>
                    <td>{service.pageTitle}</td>
                    <td>{service.photo_url}</td>
                    <td>{service.price}</td>
                    <td>{service.title}</td>
                    <td>
                      <button onClick={() => handleDeleteServices(service.id)}>Delete</button>
                      <button onClick={() => handleUpdateService(service)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={openCreateModal}>Insert Data</button>
          </div>
        )}
        {isModalOpen && showServicesTable && (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={closeModal}>&times;</span>
      <ServicesForm />
    </div>
  </div>
)}
        {selectedService && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>&times;</span>
              <ServicesUpdateForm service={selectedService} onClose={handleCloseUpdateForm} />
            </div>
          </div>
        )}    

{showUsersTable && (
          <div>
            <table className="admin-table">
              <tbody>
                <h2><strong>Users Data</strong></h2>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>Email</strong></td>
                  <td><strong>Username</strong></td>
                  <td><strong>Password</strong></td>
                  <td><strong>Buttons</strong></td>
                </tr>
                {usersData.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.password_hash}</td>
                    <td>
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                      <button onClick={() => handleUpdateUser(user)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={openCreateModal}>Insert Data</button>
          </div>
        )}
        {isModalOpen && showUsersTable && (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={closeModal}>&times;</span>
      <UserForm />
    </div>
  </div>
)}
        {selectedUser && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>&times;</span>
              <UserUpdateForm user={selectedUser} onClose={handleCloseUpdateForm} />
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  )
}

export default Admin;
