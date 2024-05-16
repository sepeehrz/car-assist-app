import style from './signUp.module.scss';
import {useNavigate} from 'react-router-dom';

function SignUp(props: {changeState: (params: string) => void}) {
  const navigate = useNavigate();

  const loginUser = () => {
    navigate('/');
  };

  const changeToLogin = () => {
    props.changeState('login');
  };

  return (
    <>
      <div className={style.signUpform}>
        <div className={style.formItem}>
          <input type='text' placeholder='نام خود را وارد نمایید' />
        </div>
        <div className={style.formItem}>
          <input type='text' placeholder='نام خانوادگی خود را وارد نمایید' />
        </div>
        <div className={style.formItem}>
          <input type='text' placeholder='ایمیل خود را وارد نمایید' />
        </div>
        <div className={style.formItem}>
          <input type='text' placeholder='نام کاربری خود را وارد نمایید' />
        </div>

        <div className={style.formItem}>
          <input type='password' placeholder='رمز عبور خود را وارد نمایید' />
        </div>
        <button className={style.signUpBtn} onClick={loginUser}>
          ورود
        </button>
      </div>
      <div className={style.register}>
        اکانت دارید ؟ <br />
        <button onClick={changeToLogin}>ورود</button>
      </div>
    </>
  );
}

export default SignUp;
