import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import React, {useState} from 'react';
import Image from "next/image";
import {useLocalStorage} from './useLocalStorage'

const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

const Material = () => {
    const [value, setValue] = useLocalStorage("value","");
    
    console.log(value);
    return(
        <div className="App">
            <Layout></Layout>
            <header className="App-header">
                <a
                        className="btn-neon" 
                        href="material" 
                        rel="noopener noreferrer"
                    >
                        <span id="spansb1"></span>
                        <span id="spansb2"></span>
                        <span id="spansb3"></span>
                        <span id="spansb4"></span>
                        Agrgar Link    
                    </a>
            </header>
        </div>

    );
}
export default Material;