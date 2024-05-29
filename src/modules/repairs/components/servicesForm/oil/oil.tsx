import styles from './oil.module.scss';
import TopBar from '@app/ui/components/topBar/topBar';
import {useContext, useEffect, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';
import useRepairForm from '@modules/repairs/hooks/useRepairForm';
import {IServiceData} from '@modules/repairs/hooks/useRepairForm';
import TextField from '@app/ui/components/Forms/TextField/TextField';
import TextArea from '@app/ui/components/Forms/TextareaField/Textarea';
import CheckBox from '@app/ui/components/Forms/CheckBoxField/Checkbox';
import SelectField from '@app/ui/components/Forms/SelectField/SelectField';
import DatePicker from '@app/ui/components/Forms/DatePickerField/DatePicker';
import {Moment} from 'moment';

function OilService() {
  const request = useContext(AxiosContext);

  const [formData, setFormData] = useState<IServiceData>({
    name: '',
    currentkilometer: '',
    nextkilometer: '',
    serviceDate: null,
    carModel: '',
    oilName: '',
    description: '',
    cost: '',
    tirePressure: false,
    gasFilter: false,
    gearOil: false,
    oil: false,
    airFilter: false,
    cabinFilter: false,
    oilFilter: false
  });
  const [carItems, setCarItems] = useState([]);
  const {saveForm, deleteForm, data} = useRepairForm(formData);
  const handleInputChange = (
    field: string,
    value: string | number | boolean | undefined | null | Moment
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  useEffect(() => {
    setFormData(data.data);
  }, [data]);
  useEffect(() => {
    getCarItems();
  }, []);
  async function getCarItems() {
    const {data, status} = await request.get('/api/cars');
    if (status === 200) {
      const items = data.data.map((item: {name: string; id: string}) => {
        return {
          text: item.name,
          value: item.id
        };
      });
      setCarItems(items);
    }
  }
  function save() {
    saveForm();
  }
  return (
    <>
      <TopBar title='فرم ثبت تعمیرات روغن' back='/repairs' />
      <div className={styles.oilService}>
        <TextField
          data={formData.name}
          label='نام سرویس'
          placeholder='نام سرویس خود را وارد نمایید'
          passData={e => handleInputChange('name', e)}
        />
        <SelectField
          data={formData.carModel}
          items={carItems}
          passData={e => handleInputChange('carModel', e)}
          label='نام وسیله نقلیه'
          placeholder='نام خودرو خود را انتخاب نمایید'
        />
        <TextField
          data={formData.currentkilometer}
          label='کیلومتر فعلی'
          placeholder='کیلومتر فعلی خود را وارد نمایید'
          passData={e => handleInputChange('currentkilometer', e)}
        />
        <TextField
          data={formData.nextkilometer}
          label='کیلومتر بعدی'
          placeholder='کیلومتر بعدی خود را وارد نمایید'
          passData={e => handleInputChange('nextkilometer', e)}
        />
        <DatePicker
          data={formData.serviceDate}
          placeholder='تاریخ سرویس خود را انتخاب نمایید'
          label='تاریخ سرویس'
          passData={e => handleInputChange('serviceDate', e)}
        />
        <TextField
          data={formData.oilName}
          label='نام روغن'
          placeholder='نام روغن خود را وارد نمایید'
          passData={e => handleInputChange('oilName', e)}
        />
        <TextField
          data={formData.cost}
          label='هزینه'
          placeholder='هزینه خود را وارد نمایید'
          passData={e => handleInputChange('cost', e)}
        />
        <div className={styles.row}>
          <CheckBox
            data={formData.oil}
            label='تعویض روغن'
            passData={e => handleInputChange('oil', e)}
          />
          <CheckBox
            data={formData.airFilter}
            label='تعویض فیلتر هوا'
            passData={e => handleInputChange('airFilter', e)}
          />
        </div>
        <div className={styles.row}>
          <CheckBox
            data={formData.cabinFilter}
            label='فیلتر کابین'
            passData={e => handleInputChange('cabinFilter', e)}
          />
          <CheckBox
            data={formData.oilFilter}
            label='فیلتر روغن'
            passData={e => handleInputChange('oilFilter', e)}
          />
        </div>

        <div className={styles.row}>
          <CheckBox
            data={formData.tirePressure}
            label='باد لاستیک ها'
            passData={e => handleInputChange('tirePressure', e)}
          />
          <CheckBox
            data={formData.gasFilter}
            label='صافی بنزین'
            passData={e => handleInputChange('gasFilter', e)}
          />
        </div>
        <div className={styles.row}>
          <CheckBox
            data={formData.gearOil}
            label='روغن گیربکس'
            passData={e => handleInputChange('gearOil', e)}
          />
        </div>
        <TextArea
          placeholder='نام روغن خود را وارد نمایید'
          label='توضیحات'
          data={formData.description}
          passData={e => handleInputChange('description', e)}
        />
        <button className={styles.removeItem} onClick={deleteForm}>
          حذف
        </button>
        <button className={styles.addNew} onClick={save}>
          ذخیره
        </button>
      </div>
    </>
  );
}

export default OilService;
