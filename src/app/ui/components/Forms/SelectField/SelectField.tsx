import styles from './SelectField.module.scss';
import {useEffect, useRef, useState} from 'react';

interface ISelect {
  text: string;
  value: string | number;
}
function SelectField(props: {
  data: string | number;
  passData: (params: string | number) => void;
  items: ISelect[];
  label?: string;
  placeholder?: string;
}) {
  const [openItems, setOpenItems] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const model = useRef(props.data);

  useEffect(() => {
    filterSelectedItemBefore();
  }, []);
  function selectItem(data: ISelect) {
    setInputValue(data.text);
    model.current = data.value;
    props.passData(model.current);
    setOpenItems(false);
  }

  function setOnChange(event: {target: {value: string}}) {
    setInputValue(event.target.value);
  }

  function filterSelectedItemBefore() {
    if (props.items === undefined) {
      return;
    }
    if (!model.current) {
      return;
    }
    const filtered = props.items.filter(item => item.value === model.current);
    const value = Object.assign({}, ...filtered);
    setInputValue(value.text);
  }

  const id = `selectField_${new Date().getMilliseconds()}`;
  return (
    <>
      <div className={styles.field}>
        <label htmlFor={id}>{props.label}</label>
        <div className={styles.fieldWrapper}>
          <input
            name={id}
            id={id}
            type='text'
            value={inputValue}
            onChange={setOnChange}
            placeholder={props.placeholder}
            readOnly
            onClick={() => setOpenItems(true)}
          />
          {openItems && (
            <div className={styles.items}>
              {props.items.map((item, index) => (
                <div
                  className={styles.item}
                  key={index}
                  onClick={() => selectItem(item)}>
                  {item.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SelectField;
