
// Crea un componente de lista que muestre una lista de elementos en la interfaz de usuario.
// Cada elemento debe tener un botón para eliminarlo de la lista. 
// Utiliza el estado local para administrar la lista de elementos.


// Utiliza el método map para iterar sobre la lista y renderizar cada elemento junto con el botón de eliminación.
// Agrega un manejador de eventos al botón de eliminación para actualizar el estado y eliminar el elemento seleccionado.


import React, { useState } from 'react';
// Los componentes tienen un Estado(donde se almacenan datos que pueden cambiar).
// Para administrar el estado en un componente funcional, se utiliza el hook useState.


function FormComponent() {
  const [formData, setFormData] = useState({ // Estado para crear formulario
    nombre: '',
    correo: '',
    password: '',
    recordar: false,
  });

  const [itemList, setItemList] = useState([]); // Estado para la lista de elementos  del formulario

// maneja los cambios en los campos de entrada del formulario
// desestructuración que extrae propiedades específicas del objeto
// determina el valor que se debe asignar a inputValue
// si la entrada es una casilla de verificación ('checkbox'), se asigna checked para rastrear su estado.
// de lo contrario, se asigna value para rastrear el valor ingresado en campos de texto, contraseñas, etc.

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;  
    const inputValue = type === 'checkbox' ? checked : value;

    // función que se utiliza para actualizar el estado del formulario 
   // spreed operator(...formData) crea una copia del estado actual para no modificarlo directamente. 
  // actualizamos el campo correspondiente utilizando [name]: inputValue, 
  // donde name es el atributo "name" del campo de entrada y inputValue es el nuevo valor.

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };


  //La función onSubmit permite controlar el envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
  // el spread operator se utiliza para agregar un nuevo elemento a la lista que ya existe
    setItemList([...itemList, formData]);
  };

// el índice del elemento que deseas eliminar de la lista itemList.
//const updatedItemList = [...itemList];: Se crea una copia de la lista itemList 
//splice se utiliza para eliminar un elemento de updatedItemList en el índice especificado (index). 
//El segundo argumento, 1, indica que se debe eliminar solo un elemento a partir del índice index.
// se actualiza el estado itemList con la nueva lista updatedItemList, lista original con el elemento eliminado.

  const handleRemoveItem = (index) => {  
    // Elimina un elemento de la lista por índice
    const updatedItemList = [...itemList];
    updatedItemList.splice(index, 1);
    setItemList(updatedItemList);
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type = "text"
            name = "nombre"
            value= {formData.nombre} // accedo a cada valor dentro de formData especificando cada uno ej : nombre
            onChange={handleInputChange} // lo que cambiamos con la funcion handleInputChange
          />
        </label>
        <label>
          Correo:
          <input
            type = "text"
            name = "correo"
            value= {formData.correo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type = "text"
            name = "password"
            value= {formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Recordar:
          <input
            type = "checkbox"
            name = "recordar"
            value= {formData.recordar}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        {/* si no le pongo el boton de submit no se envian los datos al formulario */}
        <button type="submit">Agregar a la lista</button>
      </form>
      {/* si no itero sobre item list no veo cada dato del campo */}
      <ul>
        {itemList.map((item, index)=>
          <li key={index}>
            <p>Nombre: {item.nombre}</p>
            <p>Correo: {item.correo}</p>
            <p>password: {item.password}</p>
            <p>Recordar sesión: {item.recordar ? 'Sí' : 'No'}</p>
            {/* si no llamo a mi funcion handleRemoveItem(index) no se va a eliminar */}
            <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
          </li>
        
        )}
      </ul>

    </div>
  );
}

export default FormComponent;

