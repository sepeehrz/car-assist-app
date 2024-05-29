import {useEffect, useState} from 'react';
import styles from './Textarea.module.scss';
function TextField(props: {
  data: string;
  passData: (params: string) => void;
  label?: string;
  placeholder?: string;
}) {
  const [model, setModel] = useState(props.data);

  useEffect(() => {
    setModel(props.data);
  }, [props.data]);

  function changeData(event: {target: {value: string}}) {
    setModel(event.target.value);
    props.passData(event.target.value);
  }
  const id = `TextareaField_${new Date().getMilliseconds()}`;
  return (
    <>
      <div className={styles.field}>
        <label htmlFor={id}>{props.label}</label>
        <textarea
          name={id}
          id={id}
          rows={4}
          cols={40}
          value={model}
          placeholder={props.placeholder}
          onChange={changeData}
        />
      </div>
    </>
  );
}

export default TextField;
