import React from 'react';

export function Login(props:any) {
    
    const login = () =>{

    }
  return (
    <div>
      <div><input type='text'/></div>
      <div><input type='password'/></div>
      <div><input type='checkbox'/></div>
      <div><button onClick={login}>LogIn</button></div>
    </div>
  );
}


