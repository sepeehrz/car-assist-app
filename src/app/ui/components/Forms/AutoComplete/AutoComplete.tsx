import styles from './AutoComplete.module.scss';
import {useEffect, useMemo, useRef, useState} from 'react';

interface ISelect {
  text: string;
  value: string | number;
}
function AutoComplete(props: {
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
  const filteredItems = useMemo(() => filteredData, [inputValue]);

  function selectItem(data: ISelect) {
    setInputValue(data.text);
    model.current = data.value;
    props.passData(model.current);
    setOpenItems(false);
  }

  function setOnChange(event: {target: {value: string}}) {
    setInputValue(event.target.value);
  }

  function filteredData() {
    if (inputValue.length) {
      return props.items.filter(e => {
        const searchWord = inputValue.toLowerCase();
        return e.text.toLowerCase().indexOf(searchWord) >= 0;
      });
    } else {
      return props.items;
    }
  }
  function filterSelectedItemBefore() {
    if (filteredItems() === undefined) {
      return;
    }
    if (!model.current) {
      return;
    }
    const filtered = filteredItems().filter(
      item => item.value === model.current
    );
    const value = Object.assign({}, ...filtered);
    setInputValue(value.text);
  }

  const id = `autoComplete_${new Date().getMilliseconds()}`;
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
            onClick={() => setOpenItems(true)}
          />
          {openItems && (
            <div className={styles.items}>
              {filteredItems().map((item, index) => (
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

export default AutoComplete;
