import {useDispatch} from 'react-redux';
import style from './login.module.scss';
import {useNavigate} from 'react-router-dom';
import {setToken} from '@app/utils/store/slices/auth';
import {ChangeEvent, useContext, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';

function Login(props: {changeState: (params: string) => void}) {
  const dispatch = useDispatch();
  const request = useContext(AxiosContext);

  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (
    field: string,
    value: ChangeEvent<HTMLInputElement>
  ) => {
    setForm(prev => ({
      ...prev,
      [field]: value.target.value
    }));
  };

  async function loginUser() {
    const {data, status} = await request.post('/api/auth/login', form);
    if (status === 200) {
      console.log(data.token);
      dispatch(setToken(data.token));
      navigate('/');
    }
  }

  const changeToRegister = () => {
    props.changeState('register');
  };

  return (
    <>
      <div className={style.loginForm}>
        <div className={style.formItem}>
          <input
            type='text'
            value={form.username}
            onChange={e => handleInputChange('username', e)}
            placeholder='نام کاربری خود را وارد نمایید'
          />
        </div>
        <div className={style.formItem}>
          <input
            type='password'
            value={form.password}
            onChange={e => handleInputChange('password', e)}
            placeholder='رمز عبور خود را وارد نمایید'
          />
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
