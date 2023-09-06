import React from 'react';
import { Button, Divider } from '../src';
// import { Button, Divider } from '../dist';

export default () => {
  return (
    <div style={{ width: '800px', margin: '30px auto' }}>
      <h1>Vite + React 创建组件库</h1>
      <Divider />
      <section>
        <Button>Click</Button>
      </section>
    </div>
  );
};
