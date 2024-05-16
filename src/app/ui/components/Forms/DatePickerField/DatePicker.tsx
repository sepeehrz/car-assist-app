import {useState} from 'react';
import styles from './DatePicker.module.scss';
import {DatePicker} from 'zaman';

function DatePickerField(props: {
  data: string;
  passData: (params: string) => void;
  label?: string;
  placeholder?: string;
}) {
  const [model, setModel] = useState(props.data);

  const id = `DatePickerField_${new Date().getMilliseconds()}`;
  function change(e: {value: string}) {
    setModel(e.value);
    console.log(model);
    props.passData(model);
  }
  return (
    <>
      <div className={styles.field}>
        <label htmlFor={id}>{props.label}</label>

        <DatePicker
          inputClass={styles.input}
          onChange={e => change(e)}
          inputAttributes={{placeholder: props.placeholder}}
        />
      </div>
    </>
  );
}

export default DatePickerField;
