'use client'
import { useState, useEffect } from 'react'
import Style from './App.module.css'
import { Button, Modal, Switch } from 'antd';
import { useRouter } from 'next/navigation';




function App({ params }) {
  const [grilla, setGrilla] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState('x');

  const [win, setWin] = useState(false);
  const [empate, setEmpate] = useState(false);
  const [punto, setPunto] = useState(false)

  const [dark, setDark] = useState(true);
  const [rondas, setRondas] = useState(0);
  const [contador, setContador] = useState({
    x: 0,
    o: 0
  })
  const [users, setUsers] = useState('');

  const router = useRouter();

  useEffect(() => {

    const tema = localStorage.getItem('dark');
    if (tema === "true") {
        setDark(true);
    }else{
        setDark(false);
    }

    setRondas(params.rondas);

    const jugadorx = localStorage.getItem('jugadorx');
    const Jugadoro = localStorage.getItem('jugadoro');

    setUsers({
      jugadorx: jugadorx,
      Jugadoro: Jugadoro
    })

  },[]);



  const reiniciarJuego = () => {
    setPunto(false);
    setGrilla(Array(9).fill(null));
    setTurno(turno === 'x' ? 'o' : 'x');
    setEmpate(false); 
  };


  const checkWin = (contador) => {
    switch (rondas) {
      case '3':
        if (contador.x === 2 || contador.o === 2) {
          setWin(true);
          console.log(contador.x, contador.o);
        }
        break;
      case '5':
        if (contador.x === 3 || contador.o === 3) {
          setWin(true);
        }
        break;
      case '7':
        if (contador.x === 4 || contador.o === 4) {
          setWin(true);
        }
        break;
    }
  };


  const clickHandler = (index) => {

    const nuevaGrilla = [...grilla];

    if (nuevaGrilla[index] === null) {
      nuevaGrilla[index] = turno;

      setGrilla(nuevaGrilla);

      if (verificarGanador(nuevaGrilla, turno)) {
        if (turno === 'x') {
          setContador(prevContador => {
            const updatedContador = { ...prevContador, x: prevContador.x + 1 };
            checkWin(updatedContador);
            return updatedContador;
          });
        }
        if (turno === 'o') {
          setContador(prevContador => {
            const updatedContador = { ...prevContador, o: prevContador.o + 1 };
            checkWin(updatedContador);
            return updatedContador;
          });
        }

        setPunto(true);

      } else {
        setTurno(turno === 'x' ? 'o' : 'x');
      }

      const noHayNull = nuevaGrilla.every((elemento) => elemento !== null);

      if (noHayNull && !win) {
        setEmpate(true);
      }



    }
  };



  function verificarGanador(grilla, jugador) {

    const combinacionesGanadoras = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];


    for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (grilla[a] === jugador && grilla[b] === jugador && grilla[c] === jugador) {
        return true;
      }
    }

    return false;
  }

  return (
    <div className={dark ? Style.conteiner : Style.claroConteiner}>

      <div className={Style.turno}>
        {turno === 'x' ? (
          <h2>Turno de {users && users.jugadorx ? users.jugadorx : 'Jugador X'} </h2>
        ) : (
          <h2>Turno de  {users && users.Jugadoro ? users.Jugadoro : 'Jugador O'} </h2>
        )}
      </div>
      <section className={Style.conteinerGame}>
        {
          grilla.map((item, index) => {
            return (
              <div key={index} className={dark ? Style.square : Style.claroSquare} onClick={() => clickHandler(index)}>

                <img width={80} src={item === 'x' ? 'https://i.ibb.co/Tv2gWMZ/x.png' : item === 'o' ? 'https://i.ibb.co/ccTh7mK/o.png' : null} alt='' />

              </div>
            )
          })
        }
      </section>

      <Modal
        open={win}
        footer={[<Button key={1} onClick={() => { router.push('/game') }}>Volver</Button>]}
      >
        {turno === 'x' ? (
          <h2>{users && users.jugadorx ? users.jugadorx : 'Jugador X'} Ha Ganado!</h2>
        ) : (
          <h2>{users && users.Jugadoro ? users.Jugadoro : 'Jugador O'} Ha Ganado!</h2>
        )}
      </Modal>

      <Modal
        open={punto}
        footer={[<Button key={2} onClick={reiniciarJuego}>Siguiente ronda!</Button>]}
      >
        {turno === 'x' ? (
          <h2>Punto de {users && users.jugadorx ? users.jugadorx : 'Jugador X'}!</h2>
        ) : (
          <h2>Punto de {users && users.Jugadoro ? users.Jugadoro : 'Jugador O'}!</h2>
        )}
      </Modal>


      <Modal
        open={empate}
        footer={[<Button key={3} onClick={() => { setEmpate(false); setGrilla([null, null, null, null, null, null, null, null, null,]) }}>Repetir</Button>]}
      >
        <h4>Empate!</h4>
      </Modal>

      <div className={Style.contador}>
        <h3 id={Style.equis}>{contador.x}</h3>

        <h3 id={Style.circulo}>{contador.o}</h3>
      </div>
      <h3></h3>
    </div>
  )
}

export default App