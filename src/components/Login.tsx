import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import '../App.css';
import { loginThunk } from '../redux/loginReducer';
import { StateType } from '../redux/reduxStore';

type MapStateType = {
  isAuth: boolean
  status: string
  message: string
  capthaUrl: string
}
type MapDispatchType = {
  login: (email: string, pass: string, remember: boolean) => void
}
type LoginType = MapStateType & MapDispatchType

export function Login(props: LoginType) {

  let loginRef = React.createRef<HTMLInputElement>();
  let passwordRef = React.createRef<HTMLInputElement>();
  let rememberMeRef = React.createRef<HTMLInputElement>();

  const login = () => {
    props.login && props.login(
      //@ts-ignore
      loginRef.current?.value,
      //@ts-ignore
      passwordRef.current?.value,
      //@ts-ignore
      rememberMeRef.current.checked)

  }
  //if (!props.isAuth) return <Redirect to={'main'} />
  return (
    <div className='loginContainer'>
      <div><h3>Login</h3><input type='text' defaultValue="free@samuraijs.com" ref={loginRef} /></div>
      <div><h3>Password</h3><input type='password' defaultValue="free" ref={passwordRef} /></div>
      <div><p>Remember me</p><input type='checkbox' ref={rememberMeRef} /></div>
      <div><button onClick={login}>LogIn</button></div>
    </div>
  );
}

let mapStateToProps = (state: StateType): MapStateType => ({
  isAuth: state.auth.isAuth,
  status: state.login.status,
  message: state.login.message,
  capthaUrl: state.login.captchaUrl,
})
let mapDispatchToProps = (dispatch: any): MapDispatchType => ({
  login: (email: string, pass: string, remember: boolean) => {
    dispatch(loginThunk(email, pass, remember))
  },
})
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
