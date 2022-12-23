import Layout from "../components/layout";
import {useState,useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'
import ramosData from "./ramos.json";


const Material = () => {
    const [value, setValue] = useLocalStorage("value","");
    const [value2, setValue2] = useState("1");
    
    useEffect(()=>{
        setValue2(value);
    },[]);
    
    console.log(value2);
    
    return(
        <div className="App">
            <Layout></Layout>
            <header className="App-header">
                <p className="title6">{ramosData[value2].nombre}</p>
                <p className="title3 ">CÓDIGO: {ramosData[value2].codigo}</p>
                <p className="description ">{ramosData[value2].descripcion}</p>
            </header>
            <footer>
                <a className="title2" href="https://siveducmd.uach.cl/" target="_blank">
                    Si deseas que la pagina te rediriga a la pagina oficial de SIVEDUCMD Haz click Aqui!
                </a>
            </footer>
        </div>
    );
};
export default Material;