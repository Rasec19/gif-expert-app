import { useState } from "react";

export const GiftExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

  const onAddCategory = () => {
    setCategories( [ 'Nueva Categoria', ...categories ] );
  };
  
  return (
    <>
      {/** titulo */}
      <h1>GiftExpertApp</h1>

      {/** Input */}

      {/** Listado de Gif */}
      <button onClick={  onAddCategory } >Agregar</button>
      <ol>
        { 
        categories.map( category => {
          return <li key={ category }>{ category }</li>
        }) 
        }
        {/* <li>ABC</li> */}
      </ol>
        {/** Gif Item */}
    </>
  );
}
