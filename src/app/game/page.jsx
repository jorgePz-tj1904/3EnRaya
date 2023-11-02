'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Style from './page.module.css';
import { message } from 'antd';

const Game = () => {
    const [rondas, setRondas] = useState(0);
    const [jugadorx, setJugadorx] = useState('');
    const [jugadoro, setJugadoro] = useState('');
    const [dark, setDark] = useState(false)
    const [selectedRondas, setSelectedRondas] = useState(0);
    const router = useRouter();


    useEffect(()=>{
        const tema = localStorage.getItem('dark');
        if (tema === "true") {
            setDark(true);
            console.log(tema);
            console.log(dark);
        }else{
            setDark(false);
        }
    });

    const rondasHandler = (value) => {
        setRondas(value);
        setSelectedRondas(value);
    }

    const comfirmHandler = () => {
        if(rondas !== 0){
            if (jugadorx !== '' && jugadoro !== '') {
                localStorage.setItem('jugadorx', jugadorx);
                localStorage.setItem('jugadoro', jugadoro);
                router.push(`/game/${rondas}`);
            }else{
                message.error('Inserta los nombres de los jugadores');
            }
        }else{
            message.error('Selecciona las rondas');
        }
    }



    return (
        <div className={!dark? Style.conteiner : Style.darkConteiner}>
            <h1 id={Style.titulo}>Selecciona las rondas</h1>
            <div className={Style.botones}>
                <button className={selectedRondas === 3 ? Style.selected : Style.unSelected} onClick={() => rondasHandler(3)}>3</button>
                <button className={selectedRondas === 5 ? Style.selected : Style.unSelected} onClick={() => rondasHandler(5)}>5</button>
                <button className={selectedRondas === 7 ? Style.selected : Style.unSelected} onClick={() => rondasHandler(7)}>7</button>
            </div>

                <h2 id={Style.subTitulo}>Ingrese los nombres de los jugadores</h2>
            <form>

                <div className={!dark ? Style.inputsConteiner : Style.darkInputsConteiner}>
                    <img width={50} src="./x.png" alt="x" />
                    <input id={Style.equis} type="text" value={jugadorx} onChange={(e) => setJugadorx(e.target.value)} />

                    <img width={50} src="./o.png" alt='o'/>
                    <input id={Style.circulo} type="text" value={jugadoro} onChange={(e) => setJugadoro(e.target.value)} />
                </div>
            </form>



            <div id={Style.first} class={Style.buttonBox}>
                <button className='' onClick={comfirmHandler}>Empezar!</button>
            </div>
        </div>
    )
}

export default Game