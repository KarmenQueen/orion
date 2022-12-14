import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import React, {useState} from 'react';
import Image from "next/image";

const Form = () => {
    const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Formulario Enviado!');
	}

	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
    const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}
    return(
    <div className="App">
    <Layout></Layout>
    <header className="App-header">
    <>
			<form action="" onSubmit={handleSubmit} className="formulario">
            <Image
                src="/images/AA.png"
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="ojo"
            />
                <div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

                <div>
					<label htmlFor="link">Link</label>
					<input
						type="text"
						name="link"
						placeholder="Link"
						id="link"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
                <h1 className="title4">RAMO</h1>
                <label className="custom-selectt" for="styledSelect1">
                    
                    <select id="styledSelect1" name="options">
                    <option aria-disabled>CLICK AQUI PARA SELECCIONAR</option>
                    <optgroup label="PRIMER SEMESTRE">
                        <option value="1">ÁLGEBRA PARA INGENIERÍA</option>
                        <option value="2">GEOMETRÍA PARA INGENIERÍA</option>
                    </optgroup>
            
                    <optgroup label="SEGUNDO SEMESTRE">
                        <option value="3">ÁLGEBRA LINEAL PARA INGENIERÍA</option>
                        <option value="4">CÁLCULO EN UNA VARIABLE</option>
                    </optgroup>
            
                    <optgroup label="TERCER SEMESTRE">
                        <option value="5">FÍSICA: MECÁNICA</option>
                        <option value="6">ECUACIONES DIFERENCIALES PARA INGENIERÍA</option>
                        <option value="7">CÁLCULO EN VARIAS VARIABLES</option>
                        <option value="8">ESTRUCTURA DE DATOS Y ALGORITMOS</option>
                    </optgroup>
            
                    <optgroup label="CUARTO SEMESTRE">
                        <option value="9">FÍSICA: ONDAS Y ELECTROMAGNETISMO</option>
                        <option value="10">MÉTODOS NUMÉRICOS PARA INGENIERÍA</option>
                        <option value="11">ESTRUCTURAS DISCRETAS</option>
                    </optgroup>
            
                    <optgroup label="QUINTO SEMESTRE">
                        <option value="12">ARQUITECTURA DE COMPUTADORES </option>
                        <option value="13">TEORÍA DE AUTÓMATAS</option>
                        <option value="14">DISEÑO Y ANÁLISIS DE ALGORITMOS</option>
                    </optgroup>
            
                    <optgroup label="SEXTO SEMESTRE">
                        <option value="15">PROGRAMACIÓN EN PARADIGMAS FUNCIONAL Y PARALELO</option>
                    </optgroup>

                    <optgroup label="SEPTIMO SEMESTRE">
                        <option value="16">COMUNICACIONES</option>
                        <option value="17">INTELIGENCIA ARTIFICIAL</option>
                    </optgroup>

                    <optgroup label="OCTAVO SEMESTRE">
                        <option value="18">REDES</option>
                        <option value="19">TALLER DE INGENIERÍA DE SOFTWARE</option>
                    </optgroup>

                    <optgroup label="NOVENO SEMESTRE">
                        <option value="20">SISTEMAS DISTRIBUIDOS</option>
                    </optgroup>
                    </select>
                </label>
                <a className="btn-neon" href="/respuesta" target="_blank" rel="noopener noreferrer">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    COMPARTIR MATERIAL
                </a>
			</form>
	</>
    </header>
        <footer>
            <a className="title2" href="https://siveducmd.uach.cl/" target="_blank">
                Si deseas que la pagina te rediriga a la pagina oficial de SIVEDUCMD Haz click Aqui!
            </a>
        </footer>
    </div>
    );
};
export default Form;
