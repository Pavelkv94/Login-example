import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { loginThunk } from '../redux/loginReducer';
import { StateType } from '../redux/reduxStore';

type LoginType = {
  isAuth: boolean
  status: string
  message: string
  capthaUrl: string
  getLogin: ()=>void
}


export function Login(props: any) {

  let loginRef = React.createRef<HTMLInputElement>();
  let passwordRef = React.createRef<HTMLInputElement>();
  let rememberMeRef = React.createRef<HTMLInputElement>();

  const login = () => {
    props.getLogin && props.getLogin(
      //@ts-ignore
      loginRef.current?.value,
      //@ts-ignore
      passwordRef.current?.value,
      //@ts-ignore
      rememberMeRef.current.checked)

  }

  return (
    <div className='loginContainer'>
      <div><h3>Login</h3><input type='text' defaultValue="test@test.com" ref={loginRef} /></div>
      <div><h3>Password</h3><input type='password' defaultValue="12345" ref={passwordRef} /></div>
      <div><p>Remember me</p><input type='checkbox' ref={rememberMeRef} /></div>
      <div><button onClick={login}>LogIn</button></div>
    </div>
  );
}

let mapStateToProps = (state: StateType) => ({
  isAuth: state.auth.isAuth,
  status: state.login.status,
  message: state.login.message,
  capthaUrl: state.login.captchaUrl,
})
let mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, pass: string, remember: boolean) => {
    dispatch(loginThunk(email, pass, remember))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
