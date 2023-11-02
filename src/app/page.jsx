'use client'
import { useState, useEffect } from 'react'
import Style from './page.module.css'
import { useRouter } from 'next/navigation'
import { Button, Modal, Switch } from 'antd';



function App() {
  const [dark, setDark] = useState(false);
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
},[]);

  const temeHandler = () => {
    if (!dark) {
      setDark(true);
      return localStorage.setItem('dark', true);
    }
    setDark(false);
    localStorage.setItem('dark',false);
  }

  const comfirmHandler = () => {
    router.push(`/game`);
  }

  return (
    <div className={!dark ? Style.conteiner : Style.darkConteiner}>

      <div className={Style.switchConteiner}>
        <Switch style={{margin:10}} className={Style.switch} size='default' checkedChildren="Dark" unCheckedChildren="light" onChange={temeHandler} />
      </div>

      <div className={Style.conteinerMenu}>
        <img width={200} src="./icon.png" alt="logo" />
        <h1>3 en raya!</h1>
        <p>Revive la nostalgia del juego clásico que todos alguna vez disfrutamos en las aulas, ahora en una experiencia digital.</p>
        <div id={Style.first} class={Style.buttonBox}>
          <button className='' onClick={comfirmHandler}>Jugar!</button>
        </div>
      </div>
    </div>
  )
}

export default App
