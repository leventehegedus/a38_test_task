import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import './UserForm.scss';

const UserForm: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNameChanged, setNameChanged] = useState(false);
  const [isEmailChanged, setEmailChanged] = useState(false);

  useEffect(() =>  {
    if (name) {
      setNameChanged(true);
    }
  }, [name])

  useEffect(() =>  {
    if (email) {
      setEmailChanged(true);
    }
  }, [email])

  return (
    <div className="user-form-container">
      <label>
        <input value={name} placeholder="Name *" onChange={(event) => { setName(event.target.value) }} />
        <div className="error-block">{isNameChanged && !name && <span>Name is required</span>}</div>
      </label>
      <label>
        <input value={email} placeholder="E-mail *" onChange={(event) => { setEmail(event.target.value) }} />
        <div className="error-block">{isEmailChanged && !email && <span>Email is required</span>}</div>
      </label>
      <Footer enableBack={true} enableNext={name &&  email ? true : false} />
    </div>
  )
}

export default UserForm;
