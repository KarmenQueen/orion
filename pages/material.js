import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import {useState,useEffect} from 'react';

import Image from "next/image";
import {useLocalStorage} from './useLocalStorage'
import { textChangeRangeIsUnchanged } from "typescript";
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
                <p>{ramosData[value2].descripcion}</p>
                <a
                        className="btn-neon" 
                        href="material" 
                        rel="noopener noreferrer"
                    >
                        <span id="spansb1"></span>
                        <span id="spansb2"></span>
                        <span id="spansb3"></span>
                        <span id="spansb4"></span>
                        Agregar Link    
                    </a>
            </header>
        </div>
    );
};
export default Material;