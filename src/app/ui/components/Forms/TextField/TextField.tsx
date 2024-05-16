import {useState} from 'react';
import styles from './TextField.module.scss';
function TextField(props: {
  data: string;
  passData: (params: string) => void;
  label?: string;
  placeholder?: string;
}) {
  const [model, setModel] = useState(props.data);

  function changeData(event: {target: {value: string}}) {
    setModel(event.target.value);
    props.passData(event.target.value);
  }
  const id = `TextField_${new Date().getMilliseconds()}`;
  return (
    <>
      <div className={styles.field}>
        <label htmlFor={id}>{props.label}</label>
        <input
          name={id}
          id={id}
          type='text'
          value={model}
          placeholder={props.placeholder}
          onChange={changeData}
        />
      </div>
    </>
  );
}

export default TextField;
