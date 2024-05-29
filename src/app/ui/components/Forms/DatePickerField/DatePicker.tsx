import {useEffect, useState} from 'react';
import moment, {Moment} from 'moment-jalaali';
import styles from './DatePicker.module.scss';
import 'jalaali-react-date-picker/lib/styles/index.css';
import {InputDatePicker} from 'jalaali-react-date-picker';
interface IProps {
  data: Moment | null | undefined;
  label?: string;
  placeholder?: string;
  passData: (params: Moment | null | undefined) => void;
}

function DatePickerField({data, label, placeholder, passData}: IProps) {
  const [model, setModel] = useState(data);
  const [open, setOpen] = useState(false);
  const id = `DatePickerField_${new Date().getMilliseconds()}`;

  useEffect(() => {
    setModel(moment(data));
  }, [data]);

  function change(date: Moment | null | undefined) {
    passData(date);
    setModel(date);
    setOpen(false);
  }
  function openCalendar() {
    setOpen(true);
  }

  return (
    <>
      <div className={styles.field}>
        <label htmlFor={id}>{label}</label>
        <InputDatePicker
          wrapperClassName={styles.input}
          onClick={openCalendar}
          placeholder={placeholder}
          open={open}
          value={model}
          onChange={date => change(date)}
        />
      </div>
    </>
  );
}

export default DatePickerField;
