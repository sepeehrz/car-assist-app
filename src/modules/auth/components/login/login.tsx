import style from './login.module.scss';
import {useNavigate} from 'react-router-dom';

function Login(props: {changeState: (params: string) => void}) {
  const navigate = useNavigate();

  const loginUser = () => {
    navigate('/');
  };

  const changeToRegister = () => {
    props.changeState('register');
  };
  return (
    <>
      <div className={style.loginForm}>
        <div className={style.formItem}>
          <input type='text' placeholder='نام کاربری خود را وارد نمایید' />
        </div>
        <div className={style.formItem}>
          <input type='password' placeholder='رمز عبور خود را وارد نمایید' />
        </div>
        <button className={style.loginBtn} onClick={loginUser}>
          ورود
        </button>
      </div>
      <div className={style.register}>
        میخواهید ثبت نام کنید ؟ <br />
        <button onClick={changeToRegister}>ثبت نام</button>
      </div>
    </>
  );
}

export default Login;