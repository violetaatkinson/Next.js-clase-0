
// Utiliza la función fetch para obtener datos de una API pública de usuarios.
// Muestra los nombres y correos electrónicos de los usuarios en tu aplicación.

// Encuentra una API pública que ofrezca datos de usuarios.
// Por ejemplo, JSON Placeholder es una API de prueba que proporciona datos ficticios.
// Utiliza el método fetch para hacer una solicitud GET a la URL de la API y obtener los datos en formato JSON.
// Utiliza el estado local para almacenar los datos de usuarios obtenidos. 
// Utiliza el método map para recorrer los datos y mostrar los nombres y correos electrónicos de los usuarios.

import React, { useState, useEffect } from 'react';

const UserFetchData = () => {
// En este caso, useState empieza con un [] porque la lista de usuarios se obtendrá de la API.
// se esta indicando que no tienes información de usuarios, y una vez que se obtengan los datos de la API,
// puedes utilizar setUsuarios para actualizar el estado y almacenar los datos de los usuarios.

    const [usuarios, setUsuarios] = useState ([])

// useEffect (() => {},[]) = a una funcion pero trae un () + y luego de los {}, [] con array de dependencias.

//se utiliza para realizar efectos secundarios en componentes funcionales, como solicitudes a una API.
// En este caso, se utiliza useEffect para realizar una solicitud GET a la API de usuarios
//cuando el componente se monta o se carga por primera vez.

useEffect(() => {
    // Realiza la solicitud GET a la API de usuarios.
    fetch('https://jsonplaceholder.typicode.com/users')
    // Una vez que la solicitud se complete con éxito, la primera llamada
    // then convierte la respuesta de la solicitud a JSON llamando a response.json().
    // Esto es necesario porque la respuesta de la API generalmente se recibe en formato JSON.
      .then(response => response.json())
    // La segunda llamada toma los datos (data) obtenidos de la respuesta JSON y los pasa a la función setUsuarios.
      .then(data => setUsuarios(data))
    // si hay un error en la solicitud, el catch maneja el error e imprime un mensaje de error en la consola.
      .catch(error => console.error('Error al obtener los usuarios:', error));
  }, []);

    return (
        <div>
            <h1>Lista de usuarios</h1>
                <ul>
                    {usuarios.map(usuario =>(
                        <li key={usuario.id}>
                            <p>Nombre: {usuario.name}</p>
                            <p>Emai: {usuario.email}</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default UserFetchData