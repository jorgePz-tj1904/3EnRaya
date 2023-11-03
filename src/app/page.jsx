'use client'
import { useState, useEffect } from 'react'
import Style from './page.module.css'
import { useRouter } from 'next/navigation'
import { Switch } from 'antd';



function App() {
  const router = useRouter();
  const [dark, setDark] = useState(false);

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
        <img id={Style.temeImg}  src={!dark? "./luna.png": './sol.png'} alt="" onClick={temeHandler}/>
      </div>

      <div className={Style.conteinerMenu}>
        <img width={200} src="./icon.png" alt="logo" />

        <p style={{width:'400px'}}>Revive la nostalgia del juego clásico que todos alguna vez disfrutamos en las aulas, ahora en una experiencia digital.</p>
        <div id={Style.first} class={Style.buttonBox}>
          <button className='' onClick={comfirmHandler}>Jugar!</button>
        </div>
        <div  id={Style.first} class={Style.buttonBox}>
          <button style={{fontSize:'20px'}} className='' onClick={()=>router.push('/about')}>Información</button>
        </div>
      </div>
    </div>
  )
}

export default App
