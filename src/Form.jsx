import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
//const [formData, setFormData] = useState({ name: '',email: '' ,text: '' });
//const [message, setMessage] = useState('')
 
const [state, handleSubmit] = useForm("xleandlk");
  if (state.succeeded) {
      return <h3 className='submit-message'>Thanks for your feedback!</h3>;
  }


return (
<form className='form'  
onSubmit={handleSubmit} 
autoComplete='off'>

{  (!state.succeeded) && <h2 className='form-headline'>Please send us your Feedback or compliments. </h2>}   

<div className='contact-details'>
   <label htmlFor="name"></label>
   <input
   id='name'
   type='text'
   name='name'
   placeholder='Your name is?'
   // value={formData.name}
   // onChange={changeHandler}
   />
    <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
   
   <input
   id='email'
   type='email'
   name='email'
   placeholder='Your mail is?'
   // value={formData.email}
   // onChange={changeHandler}
   />

   <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

</div>

<textarea
rows="8"
id='message'
name='message'
placeholder='Your lovely message * '
// value={formData.text}
// onChange={changeHandler}
required
/>
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
<p>* required</p>
<button type='submit' disabled={state.submitting} >Submit</button>
</form>
);
};

export default Form; 