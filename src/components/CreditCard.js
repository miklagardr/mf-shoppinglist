import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';



const CreditCard = ({setPay}) => {
  const [alert , setAlert] = useState(false)
  const [fill , setFill] = useState(false)
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
   
    setState((prev) => ({ ...prev, [name]: value }));
  }
  
  

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }


  const handleSubmit = (e) => {
    e.preventDefault() 
    if(state.number && state.expiry && state.cvc && state.name) {
      setPay(true)
      setAlert(true)
    }else{
      setFill(true)

    }
    

  }
  setTimeout(() => {
    setAlert(false)
    setFill(false)
  }
  , 5000)

 

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form onSubmit={handleSubmit} className='grid border p-5 rounded-lg mt-5 gap-3'>
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
        <button className='bg-blue-500 rounded-full w-fit p-3 flex justify-center' type="submit">Submit</button>
      </form>
      {alert && <div className='bg-green-500 text-white p-3 rounded-lg mt-3'>Payment Successful</div>}
      {fill && <div className='bg-red-500 text-white p-3 rounded-lg mt-3'>Please fill all fields</div>}
    </div>
  );
}

export default CreditCard