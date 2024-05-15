import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';



const CreditCard = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === 'name') {
      if (!/^[a-zA-Z]*$/.test(value)) {
        return;
      }
    } else {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }
    setState((prev) => ({ ...prev, [name]: value }));
  }
  
  

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='grid border p-5 rounded-lg mt-5 gap-3'>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
      
          maxLength="16"
        />
        <input
          type="text"
          name="expiry"
          placeholder="Card expiry"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
    
          maxLength="4"
        />
         <input
          type="text"
          name="cvc"
          placeholder="Card Cvc"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength="3"
        />
         <input
          type="text"
          name="name"
          placeholder="Card name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength="28"
        />
       
      </form>
    </div>
  );
}

export default CreditCard