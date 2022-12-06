import './ContactUs.css';
import { useState } from 'react';


const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            phone,
            timeSubmitted: new Date();
        };

        console.log(payload)

        setName('')
        setEmail('')
        setPhone('')

    }

    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                id='name'
                type='text'
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
                onChange={e => set.email(e.target.value)}
                value={email}
                id='email'
                type='text' />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input
                onChange={e => set.phone(e.target.value)}
                value={phone}
                id='phone'
                type='text' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }

  export default ContactUs;
