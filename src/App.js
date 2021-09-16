import React,{useState} from 'react';
import Header from './components/Headers'; 
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';



const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {

  const [cargando, guardarCargando]= useState(false);


  const[resumen, guardarResumen]= useState({
    cotizacion : 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });

  //extraer valores
  const {datos, cotizacion}= resumen;

  return (
   <Contenedor>
      <Header
      titulo='Cotizador de Seguros' 
    />
    <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

    {cargando? <Spinner />   :null}
      
    <Resumen 
      datos={datos}
    />    

    { !cargando ?   
      (
        
      <Resultado
        cotizacion={cotizacion}
      />
      ):null }

    </ContenedorFormulario>
   </Contenedor>
  );
}

export default App;
