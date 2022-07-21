import { User } from '../../types/types';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserForm: React.FC = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     console.log('name', name, 'email', email);
  //   const data = new FormData(event.currentTarget);
  //
  //   const username = data.get('username');
  //   const email = data.get('email');
  //   const password = data.get('password')?.toString();
  //
  //   if (!username || !password || !email) {
  //     toast('Please fill out all the fields.');
  //     return;
  //   }
  //   if (acceptTnC === false) {
  //     toast('Please accept Terms and Conditions!');
  //     return;
  //   }
  //   if (password.length < 8) {
  //     toast('Passwords must be at least 8 characters long.');
  //     return;
  //   }
  //
  //   if (!validateEmail(email)) {
  //     toast('Wrong email format.');
  //     return;
  //   }
  //
  //   fetch(`${url}/auth/register`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: data.get('username'),
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         toast.success('Registration successful');
  //         routeChange();
  //       } else {
  //         toast.error('Registration unsuccesful');
  //         return response.json();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error('Server unavailable');
  //     });
   };

  return (
    <div>
      <Box
        className="form"
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="input-wrapper">
          <TextField
            className="textinput"
            required
            label="Username"
            variant="standard"
            name="username"
          />
          <TextField
            className="textinput"
            required
            label="Email"
            variant="standard"
            name="email"
          />
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  )
}

export default UserForm;
