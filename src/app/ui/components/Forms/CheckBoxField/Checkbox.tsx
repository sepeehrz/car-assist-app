import {useState} from 'react';
import styles from './Checkbox.module.scss';
function TextField(props: {
  data: boolean;
  passData: (params: boolean) => void;
  label: string;
}) {
  const [model, setModel] = useState(props.data);

  function handleChange() {
    setModel(!model);
    props.passData(!model);
  }
  const id = `CheckboxField_${new Date().getMilliseconds()}`;
  return (
    <>
      <div className={styles.checkboxField}>
        <label className={styles.checkboxItem}>
          <div>
            <input
              name={id}
              id={id}
              type='checkbox'
              checked={model}
              onChange={handleChange}
            />
          </div>
          <span>{props.label}</span>
        </label>
      </div>
    </>
  );
}

export default TextField;
