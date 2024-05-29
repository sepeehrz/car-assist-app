import styles from './SelectField.module.scss';
import {useEffect, useState} from 'react';

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
  const [items, setItems] = useState(props.items);
  const [inputValue, setInputValue] = useState('');
  const [model, setModel] = useState(props.data);

  useEffect(() => {
    setModel(props.data);
    setItems(props.items);
    filterSelectedItemBefore();
  }, [props.items, props.data, model]);

  function selectItem(data: ISelect) {
    setInputValue(data.text);
    setModel(data.value);
    props.passData(data.value);
    setOpenItems(false);
  }

  function setOnChange(event: {target: {value: string}}) {
    setInputValue(event.target.value);
  }

  function filterSelectedItemBefore() {
    if (!items || items === undefined) {
      return;
    }
    if (!model) {
      return;
    }
    const filtered = items.filter(item => item.value === model);
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
            defaultValue={inputValue}
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
