import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsUserLoggedIn }) => {
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak navigasyonu yapılabilir hale getiriyoruz

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    navigate('/login'); // logout işlemi tamamlandıktan sonra '/login' rotasına yönlendir
  };

  return (
    <>
      <div className="login-header">
        <h2>Logout</h2>
        <p className="lead">Are you sure?</p>
      </div>
      <button onClick={handleLogout} type="button" className="btn btn-primary btn-lg">Logout</button>
    </>
  );
};

export default Logout;