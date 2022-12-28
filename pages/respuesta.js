import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
const Respuesta = () => {
    return(
        <div className="App">
            <Layout></Layout>
            <header className="App-header">
                <div className="img2">
                    <Image id="imagen"
                        src="/images/ZUiY(1).gif"
                        height={150} // Desired size with correct aspect ratio
                        width={150} // Desired size with correct aspect ratio
                        alt="ojo"
                    />
                </div>
                <h1 className="title">QUIENES SOMOS</h1>
                <p className="description">
                Somos un grupo de estudiantes de la carrera Ingeniería Civil en Informática de la Universidad Austral de Chile conformado por Luciano Guzmán, Nicole Navarro, Luis Berrocal y Carmen Fuenzalida, todos con tres o más años en la carrera al momento de empezar a trabajar en este proyecto.</p>
                <p className="description">La idea nació gracias a una asignatura llamada Taller de construcción de software, en la que debemos dar solución a una problemática a través de una página web que nosotros mismos debemos diseñar. Pensamos en un problema que se nos presentó a todos en algún punto de nuestro transcurso en la universidad y más aún a los que ingresamos a la Universidad en tiempos de pandemia: no tener una base para cada asignatura. </p>
                <p className="description">Algunas asignaturas como por ejemplo en Ciencias Básicas las guías de ejercicios vienen sin su respectivo solucionario y si es que lo llega a tener no es nada más que la solución, sin tener idea de cómo desarrollar cada uno de los ejercicios. Y así, muchas de las asignaturas no dejan tanto material con el cual poder estudiar y/o apoyarse. </p>
                <p className="description">Es por esto que consideramos la posibilidad de que entre los propios estudiantes nos ayudáramos de alguna forma. Así nació “Orion” una página web en la que todos pueden compartir recursos tales como: videos, artículos, desarrollo de guías, pruebas de semestres anteriores, clases grabadas, etc. Todo lo que cada estudiante consideró útil para su propio estudio, permitiendo el conocimiento compartido y así un aprendizaje más eficaz. </p>

            </header>
            <footer>
                <a className="title2" href="https://siveducmd.uach.cl/" target="_blank">
                    Si deseas que la pagina te rediriga a la pagina oficial de SIVEDUCMD Haz click Aqui!
                </a>
            </footer>
        </div>
    );
};

export default Respuesta;