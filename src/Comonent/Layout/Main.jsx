import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <h1 className="text-5xl font-semibold my-6 text-emerald-400 underline">Fancy-Form</h1>  
          <Outlet/>
        </div>
    );
};

export default Main;