import styles from './upsert.module.scss';
import {useState} from 'react';

import TopBar from '@app/ui/components/topBar/topBar';
import TextField from '@app/ui/components/Forms/TextField/TextField';

function Upsert() {
  const [car, setCar] = useState({
    name: '',
    model: '',
    color: '',
    type: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setCar(prev => ({
      ...prev,
      [field]: value
    }));
  };
  function save() {
    console.log(car);
  }
  return (
    <>
      <TopBar title='لیست وسایل نقلیه' back='/cars' />
      <div className={styles.upsert}>
        <TextField
          data={car.name}
          label='نام'
          passData={e => handleInputChange('name', e)}
        />
        <TextField
          data={car.model}
          label='مدل'
          passData={e => handleInputChange('model', e)}
        />
        <TextField
          data={car.color}
          label='رنگ'
          passData={e => handleInputChange('color', e)}
        />
        <TextField
          data={car.type}
          label='نوع'
          passData={e => handleInputChange('type', e)}
        />
        <button className={styles.addNew} onClick={save}>
          ذخیره
        </button>
      </div>
    </>
  );
}

export default Upsert;
