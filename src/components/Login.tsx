import Button from '@material-ui/core/Button';
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
  isRem: boolean
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
  let errorMessage = props.status === "ERROR" && <div className="error">{props.message}</div>
  if (props.isAuth) return <Redirect to="/main" />
  return (
    <div className='loginContainer'>
      <div>
        <h3 style={{ margin: "6px" }}>Login</h3>
        <input
          className='in'
          type='text'
          defaultValue="free@samuraijs.com"
          style={{ backgroundColor: 'white', outline: "none", borderRadius: "5px" }}
          ref={loginRef} />
      </div>
      <div>
        <h3 style={{ margin: "6px" }}>Password</h3>
        <input
          className='in'
          type='password'
          style={{ backgroundColor: 'white', outline: "none", borderRadius: "5px" }}
          defaultValue="free"
          ref={passwordRef}

        />
      </div>
      <p>Remember me</p>
      <div><input
        type='checkbox'
        onClick={()=>{}} //Добавить чекбокс
        ref={rememberMeRef}
      /></div>
      <div><Button
        variant="contained"
        color="primary"
        onClick={login}
        disabled={props.status === "INPROGRESS"}>LogIn</Button></div>
      {errorMessage}

    </div >
  );
}

let mapStateToProps = (state: StateType): MapStateType => ({
  isAuth: state.auth.isAuth,
  status: state.login.status,
  message: state.login.message,
  capthaUrl: state.login.captchaUrl,
  isRem: state.login.isRem
})
let mapDispatchToProps = (dispatch: any): MapDispatchType => ({
  login: (email: string, pass: string, remember: boolean) => {
    dispatch(loginThunk(email, pass, remember))
  },
})
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
