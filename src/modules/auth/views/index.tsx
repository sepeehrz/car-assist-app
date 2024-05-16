import {useState} from 'react';
import style from './index.module.scss';
import Login from '../components/login/login';
import SignUp from '../components/singUp/signUp';

function LoginPage() {
  const [state, setState] = useState('login');

  const changeState = (state: string) => {
    setState(state);
  };

  const title = state === 'login' ? 'ورود به اپلیکیشن' : 'ثبت نام در اپلیکیشن';
  const form =
    state === 'login' ? (
      <Login changeState={changeState} />
    ) : (
      <SignUp changeState={changeState} />
    );

  return (
    <>
      <div className={style.wrapper}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.content}>{form}</div>
      </div>
    </>
  );
}

export default LoginPage;
