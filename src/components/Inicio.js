import {useState} from 'react';
const Inicio = () => {
    const [Catalogo, setCatalogo] = useState([
        
    { title: 'Casa', price: '$10000', author: 'mario', id: 1 },
    { title: 'Departamento', price: '20000', author: 'yoshi', id: 2 },
    { title: 'Local', price: '30000', author: 'mario', id: 3 }
    ]);
    return ( 
        <div className = "Inicio">
        {Catalogo.map ((catalogo) =>(
            <div className= "catalogo-preview" key = {catalogo.id} >
                <h2>{catalogo.title}</h2>
                <p>Precio {catalogo.price}</p>
            </div>
        ) )}
        </div>
     );
}
 
export default Inicio;