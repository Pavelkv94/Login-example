import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import '../App.css';
import { setAuthUserAC } from '../redux/authReducer';
import { DispatchType, StateType } from '../redux/reduxStore';

type MainProps = MapStateType & MapDispatchType
export function Main(props: MainProps) {

  if (!props.isAuth)  return <Redirect to='/' />
  return (
    <div className="main">
      <h2>HELLO WORLD</h2>
      <Button
        color='secondary'
        variant='contained'
        style={{ margin: '10px' }}
        onClick={() => { props.login(false) }}
      >LogOut</Button>
    </div>
  );
}

type MapStateType = { isAuth: boolean }
type MapDispatchType = { login: (isAuth: boolean) => void }
let mapStateToProps = (state: StateType): MapStateType => ({
  isAuth: state.auth.isAuth,
})
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchType => ({
  login: (isAuth: boolean) => {
    dispatch(setAuthUserAC(isAuth))
  },
})


export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

