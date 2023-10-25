
// Crea un formulario que permita a los usuarios ingresar su nombre y correo electrónico.
// Muestra los valores ingresados en tiempo real debajo del formulario.

// Utiliza el hook useState para administrar el estado de los campos del formulario.
// Agrega manejadores de eventos para los cambios en los campos de entrada (onChange) y actualiza el estado.
// Utiliza el valor del estado para mostrar los valores ingresados en tiempo real debajo del formulario.

import React, { useState } from 'react';

 const ListComponent =() => {
    const [ formUsers, setFormUsers ] = useState({
        name: '',
        email: '',
    });

    const handleOnChange = (e) => { //contiene información sobre el cambio que ocurrira en el elemento del formulario.
        const { name, value} = e.target // desestructuración que extrae dos propiedades del elemento input.

        setFormUsers({ 
            ...formUsers,
            [name]: value,
          });
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input
                        name='name'
                        value={formUsers.name}
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name='email'
                        value={formUsers.email}
                        onChange={handleOnChange}
                    />
                </label>
            </form>

            <div>
                <h2>Valores ingresados:</h2>
                <p>Name: {formUsers.name}</p>
                <p>Email: {formUsers.email}</p>
            </div>
        </div>
    )

}

export default ListComponent;