import style from './signUp.module.scss';
import {ChangeEvent, useContext, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';

function SignUp(props: {changeState: (params: string) => void}) {
  const request = useContext(AxiosContext);

  const [form, setForm] = useState({
    name: '',
    family: '',
    email: '',
    username: '',
    password: ''
  });
  const registerUser = async () => {
    const {data, status} = await request.post('/api/auth/register', form);
    if (status === 200) {
      console.log(data);
      changeToLogin();
    }
  };
  const handleInputChange = (
    field: string,
    value: ChangeEvent<HTMLInputElement>
  ) => {
    setForm(prev => ({
      ...prev,
      [field]: value.target.value
    }));
  };
  const changeToLogin = () => {
    props.changeState('login');
  };

  return (
    <>
      <div className={style.signUpform}>
        <div className={style.formItem}>
          <input
            type='text'
            value={form.name}
            onChange={e => handleInputChange('name', e)}
            placeholder='نام خود را وارد نمایید'
          />
        </div>
        <div className={style.formItem}>
          <input
            type='text'
            value={form.family}
            onChange={e => handleInputChange('family', e)}
            placeholder='نام خانوادگی خود را وارد نمایید'
          />
        </div>
        <div className={style.formItem}>
          <input
            type='text'
            value={form.email}
            onChange={e => handleInputChange('email', e)}
            placeholder='ایمیل خود را وارد نمایید'
          />
        </div>
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
        <button className={style.signUpBtn} onClick={registerUser}>
          ثبت نام
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
