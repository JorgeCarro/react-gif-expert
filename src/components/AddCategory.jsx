import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = (event)=>{

    //console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();

    if( inputValue.trim().length <= 1) return;

    //console.log(inputValue);

    //setCategories(categories =>[inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (

    /* 
    ESTE FORMULARIO SE PODRÍA OPTIMIZAR ASI
    <form onSubmit={(event)=>onSubmit(event)}>
     */
    <form onSubmit={onSubmit}>

        <input 
                type="text"
                placeholder="Buscar gifs"
                value= { inputValue }
                /* SE PODRIA PONER ASÍ, PERO PODEMOS OPTIMIZAR EL CODIGO QUITANDO EL EVENT
                onChange={(event)=>onInputChange(event)}
                */
                onChange={onInputChange}

        />        
    </form>
    

  )
}
