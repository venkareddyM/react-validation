
import { useState } from 'react';
import './App.css';

function App() {

  const initialData = {
    name: '',
    password: '',
    mail:''
  }

  const [data, setData] = useState(initialData)
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mailError, setMailError]=useState('')

  const MyEvent = ((e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    if (e.target.name === 'name') {
      if (e.target.value.trim() === '') {
        setNameError('name is required');
      } else {
        setNameError('');
      }
    } else if (e.target.name === 'password') {
      if (e.target.value.trim() === '') {
        setPasswordError('Password is required');
      } else {
        setPasswordError('');
      }
    } else if (e.target.name === 'mail'){
      if (e.target.value.trim() === ''){
        setMailError('Mail is required');
      }else{
        setMailError ('')
      }
    }

  })

  const handleReset = (() => {
    setData(initialData)
  })

  const handleconsole = ((e) => {
    e.preventDefault();

    if (data.name.trim() === '') {
      setNameError('Name is required');
    }

    if (data.password.trim() === '') {
      setPasswordError('Password is required');
    }

    if (data.mail.trim() === ''){
      setMailError('Mail is required');
    }

    if (data.name.trim() !== '' && data.password.trim() !== '' && data.mail.trim() !== '') {
      console.log(data);
    }

  })

  return (
    <div className="container">
      <h1>Register Page</h1>
      <div className="form-group">
        <div>
          <label>name</label>
          <input type="text" name='name' placeholder="Enter the your name" onChange={MyEvent} value={data.name} />
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div>
          <label>password</label>
          <input type="password" name='password' placeholder="Enter the your password" onChange={MyEvent} value={data.password} />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>

       <div>
        <label>mail</label>
        <input type='mail' name='mail' placeholder='Enter the your mail'onChange={MyEvent} value={data.mail} />
        {mailError && <div className="error">{mailError}</div>}
       </div>

        <div className='form-buttons'>
          <button onClick={handleReset} >Reset</button>
          <button onClick={handleconsole}>Submit</button>
        </div>

      </div>
    </div>
  )

}
export default App;