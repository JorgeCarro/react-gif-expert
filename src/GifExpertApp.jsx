import { useState } from 'react';
import {AddCategory,GifGrid} from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Electricidad']);

  const onAddCategory = (newCategory)=>{

    
    //console.log(newCategory);
    // INICIALMENTE PENSARIAMOS QUE CON EL .PUSH SE HARÍA, PERO NO ES CORRECTO DEL TODO
    // PORQUE REACT NO QUIERE QUE SE CAMBIEN LOS ESTADOS
    // categories.push('Valorant');


    //para no copiar categorias existentes, se comprueba su nombre

    if (categories.includes(newCategory)) return;

    //ASI SE CREA UN NUEVO ARRAY QUE COPIA EL ANTERIOR Y LE METEMOS UN NUEVO ELEMENTO
    setCategories([newCategory, ...categories]);


  }
  
  return (

    <>
    {/* titulo */}

    <h1>DivisionLED</h1>

    {/* INPUT */}

    <AddCategory 
    
   /*  setCategories = {setCategories}   */
      onNewCategory = {(value)=>onAddCategory(value)}
    />  

    {/* LISTA DE GIF */}

    <button onClick={onAddCategory}>Agregar</button>

        {   categories.map (category=>

                /* return <li key={category}>{category}</li> */

                //podemos quitar el return porque retornamos solo un objeto
                //return (
                 /*  (
                  <div key={{category}}>
                    <h3>{category}</h3>
                    <li>{category}</li>

                  </div>

                  USAMOS EL COMPONENTE ESPECIFICO EN VEZ DE ESTE CODIGO
                ) */

                <GifGrid 
                  key={category}
                  category={category}/> 

            )
        }
        
   

    {/* GIF ITEMS */}
    </>
  )
}
