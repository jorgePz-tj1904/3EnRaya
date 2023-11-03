import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoadingOutlined style={{fontSize:'50px'}}/>
    </div>
  );
};

export default Loading;