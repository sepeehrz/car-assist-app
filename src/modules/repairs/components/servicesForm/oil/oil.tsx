import styles from './oil.module.scss';
import {useState} from 'react';

import TopBar from '@app/ui/components/topBar/topBar';
import TextField from '@app/ui/components/Forms/TextField/TextField';
// import AutoComplete from '@app/ui/components/Forms/AutoComplete/AutoComplete';
import SelectField from '@app/ui/components/Forms/SelectField/SelectField';
import DatePicker from '@app/ui/components/Forms/DatePickerField/DatePicker';
import CheckBox from '@app/ui/components/Forms/CheckBoxField/Checkbox';
import TextArea from '@app/ui/components/Forms/TextareaField/Textarea';
function OilService() {
  const [service, setService] = useState({
    name: '',
    currentkilometer: '',
    nextkilometer: '',
    serviceDate: '',
    carModel: '',
    oilName: '',
    description: '',
    tirePressure: false,
    gasFilter: false,
    gearOil: false,
    oil: false,
    airFilter: false,
    cabinFilter: false,
    oilFilter: false
    // checkedsss: false,
    // checked: false
  });
  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setService(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const carItems = [
    {
      text: '206',
      value: '212121206'
    },
    {
      text: '207',
      value: '2121222221207'
    },
    {
      text: 'benz',
      value: '2121222221benz'
    }
  ];
  function save() {
    console.log(service);
  }
  return (
    <>
      <TopBar title='لیست وسایل نقلیه' back='/cars' />
      <div className={styles.oilService}>
        <TextField
          data={service.name}
          label='نام سرویس'
          placeholder='نام سرویس خود را وارد نمایید'
          passData={e => handleInputChange('name', e)}
        />
        <SelectField
          data={service.carModel}
          items={carItems}
          passData={e => handleInputChange('model', e)}
          label='نام وسیله نقلیه'
          placeholder='نام خودرو خود را انتخاب نمایید'
        />
        <TextField
          data={service.currentkilometer}
          label='کیلومتر فعلی'
          placeholder='کیلومتر فعلی خود را وارد نمایید'
          passData={e => handleInputChange('currentkilometer', e)}
        />
        <TextField
          data={service.nextkilometer}
          label='کیلومتر بعدی'
          placeholder='کیلومتر بعدی خود را وارد نمایید'
          passData={e => handleInputChange('nextkilometer', e)}
        />
        <DatePicker
          data={service.serviceDate}
          placeholder='تاریخ سرویس خود را انتخاب نمایید'
          label='تاریخ سرویس'
          passData={e => handleInputChange('serviceDate', e)}
        />
        <TextField
          data={service.oilName}
          label='نام روغن'
          placeholder='نام روغن خود را وارد نمایید'
          passData={e => handleInputChange('oilName', e)}
        />
        <TextField
          data={service.oilName}
          label='هزینه'
          placeholder='هزینه خود را وارد نمایید'
          passData={e => handleInputChange('oilName', e)}
        />
        <div className={styles.row}>
          <CheckBox
            data={service.oil}
            label='تعویض روغن'
            passData={e => handleInputChange('oil', e)}
          />
          <CheckBox
            data={service.airFilter}
            label='تعویض فیلتر هوا'
            passData={e => handleInputChange('airFilter', e)}
          />
        </div>
        <div className={styles.row}>
          <CheckBox
            data={service.cabinFilter}
            label='فیلتر کابین'
            passData={e => handleInputChange('cabinFilter', e)}
          />
          <CheckBox
            data={service.oilFilter}
            label='فیلتر روغن'
            passData={e => handleInputChange('oilFilter', e)}
          />
        </div>

        <div className={styles.row}>
          <CheckBox
            data={service.tirePressure}
            label='باد لاستیک ها'
            passData={e => handleInputChange('tirePressure', e)}
          />
          <CheckBox
            data={service.gasFilter}
            label='صافی بنزین'
            passData={e => handleInputChange('gasFilter', e)}
          />
        </div>
        <div className={styles.row}>
          <CheckBox
            data={service.gearOil}
            label='روغن گیربکس'
            passData={e => handleInputChange('gearOil', e)}
          />
        </div>
        <TextArea
          placeholder='نام روغن خود را وارد نمایید'
          label='توضیحات'
          data={service.description}
          passData={e => handleInputChange('description', e)}
        />
        {/* <AutoComplete
          data={car.model}
          items={carItems}
          passData={e => handleInputChange('model', e)}
          label='خودرو'
          placeholder='نام خودرو خود را انتخاب نمایید'
        /> */}
        {/* <DatePicker
          data={car.date}
          placeholder='dssdsd'
          label='تاریخ فعلی'
          passData={e => handleInputChange('date', e)}
        />
        <CheckBox
          data={car.checkedsss}
          label='dsds'
          passData={e => handleInputChange('checkedsss', e)}
        />
        <CheckBox
          data={car.checked}
          label='dsds'
          passData={e => handleInputChange('checked', e)}
        />
        {/* <DatePicker placeholder='dssdsd' label='تاریخ بعدی' /> */}
        {/* <SelectField
          data={car.model}
          items={carItems}
          passData={e => handleInputChange('model', e)}
          label='خودرو'
          placeholder='نام خودرو خود را انتخاب نمایید'
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
        />  */}
        <button className={styles.addNew} onClick={save}>
          ذخیره
        </button>
      </div>
    </>
  );
}

export default OilService;
