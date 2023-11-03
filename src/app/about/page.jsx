'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Avatar, Card, Skeleton, ConfigProvider,theme } from 'antd';
import { GithubOutlined,LeftOutlined,LinkedinOutlined  } from '@ant-design/icons';
import { useRouter } from 'next/navigation'


const Page = () => {
    const router = useRouter();
    const { Meta } = Card;
    
    const [dark, setDark] = useState(false);
    
    useEffect(() => {
        const tema = localStorage.getItem('dark');
        if (tema === "true") {
            setDark(true);
        } else {
            setDark(false);
        }
      }, [dark]); 

    const nav = () => {
        router.push('/');
    }

    return (
        <div style={{backgroundColor: dark ?'rgb(20,20,20)': '#f3f3f3', height: '100%', display:'flex', alignItems:'center' }}>
            <ConfigProvider
                theme={dark?{
                    // 1. Use dark algorithm
                    algorithm: theme.darkAlgorithm,

                    // 2. Combine dark algorithm and compact algorithm
                    // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
                }:null}
            >
                <Card
                    style={{
                        margin: '20px',
                    }}
                    actions={[
                        <LeftOutlined onClick={nav} key='volver' size={80}/>,
                        <a target='blank' href='https://www.linkedin.com/in/jorge-perez-tichij-38a15523b/'><LinkedinOutlined key='linkedin' size={80}/></a>,
                        <a target='blank' href='https://github.com/jorgePz-tj1904/3EnRaya'><GithubOutlined  key='github' size={80}/></a>,
                    ]}
                >
                    <Skeleton loading={false} avatar active>
                        <Meta
                            avatar={<Avatar size={200} src="https://i.ibb.co/tKyYMFV/toto-mia-de-frente.jpg" />}
                            style={{display:'flex', justifyContent:'center'}}
                        />
                        <h1>Jorge Perez</h1>
                        <h2>Full Stack Developer</h2>
                        <p>¡Bienvenidos a mi proyecto de Juego de 3 en Raya! Este emocionante juego clásico ha sido recreado y desarrollado utilizando tecnologías modernas como JavaScript, React, Next.js y CSS para dar vida a una experiencia de juego interactiva y atractiva.</p>
                        <h3>Características Destacadas:</h3>
                        <ul>
                            <li>Diseño Interactivo: Hemos aplicado estilos atractivos y un diseño amigable al usuario para crear una experiencia de juego visualmente agradable.</li>
                            <li>Selección de Rondas: Los jugadores pueden elegir la cantidad de rondas para jugar, lo que agrega un elemento estratégico al juego.</li>
                            <li>Nombres Personalizados: Personaliza los nombres de los jugadores para una experiencia de juego personalizada.</li>
                            <li>Modo Oscuro: Hemos incorporado un modo oscuro para aquellos que prefieren una estética más oscura.</li>
                            <li>Gestión de Puntos: El juego realiza un seguimiento automático de los puntos de los jugadores y anuncia al ganador al final de las rondas</li>
                        </ul>
                        <h3>Tecnologías Utilizadas:</h3>
                        <ul>
                            <li>JavaScript: La lógica del juego se ha implementado en JavaScript para gestionar las reglas y la mecánica del juego.</li>
                            <li>React: Hemos utilizado React para crear una interfaz de usuario interactiva y componentes reutilizables.</li>
                            <li>Next.js: Next.js proporciona una base sólida para crear aplicaciones web eficientes y optimizadas para SEO.</li>
                            <li>CSS: Los estilos personalizados se han aplicado con CSS para dar vida al diseño y la apariencia del juego.</li>
                        </ul>

                    </Skeleton>
                </Card>
            </ConfigProvider>
        </div >
    )
}

export default Page