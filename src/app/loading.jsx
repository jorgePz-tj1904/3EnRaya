'use client'
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect} from 'react';

const Loading = () => {
    const [dark, setDark] = useState(false);

    useEffect(()=>{
        const tema = localStorage.getItem('dark');
        if (tema === "true") {
            setDark(true);
        }else{
            setDark(false);
        }
    });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: dark? 'rgb(20, 20, 20)':'white'}}>
      <LoadingOutlined style={{fontSize:'50px', color:'blue'}}/>
    </div>
  );
};

export default Loading;