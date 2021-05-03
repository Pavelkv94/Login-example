import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

export function Login(props: any) {

  let loginRef = React.createRef();
  let passwordRef = React.createRef();
  let rememberMeRef = React.createRef();

  const login = () => {
    props.login && props.login(
      //@ts-ignore
      loginRef.current.value,
      //@ts-ignore
      passwordRef.current.value,
      //@ts-ignore
      rememberMeRef.current.checked)

  }

  return (
    <div className='loginContainer'>
      <div><h3>Login</h3><input type='text' /></div>
      <div><h3>Password</h3><input type='password' /></div>
      <div><p>Remember me</p><input type='checkbox' /></div>
      <div><button onClick={login}>LogIn</button></div>
    </div>
  );
}
let mapStateToProps = (state: any) => {
  isAuth: state.auth.isAuth,
    status: state.auth.isStatus,
      message: state.auth.message,
        capthaUrl: state.auth.captchaUrl,
}
let mapDispatchToProps = (dispatch: any) => {
  login: (l, p, rm) => {
    dispatch(loginThunk(l, p, rm))
  },
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
