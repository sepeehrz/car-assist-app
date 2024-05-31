import {Moment} from 'moment';
import AddItem from './addItem/index';
import styles from './index.module.scss';
import {useParams} from 'react-router-dom';
import TopBar from '@app/ui/components/topBar/topBar';
import {useContext, useEffect, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';
import useRepairForm from '@modules/repairs/hooks/useRepairForm';
import TextField from '@app/ui/components/Forms/TextField/TextField';
import TextArea from '@app/ui/components/Forms/TextareaField/Textarea';
import SelectField from '@app/ui/components/Forms/SelectField/SelectField';
import DatePicker from '@app/ui/components/Forms/DatePickerField/DatePicker';

export interface IData {
  name: string;
  typeRepair: number | string;
  reasonDescription: string;
  description: string;
}
interface IServiceData {
  name: string;
  currentkilometer: string;
  nextkilometer: string;
  serviceDate: Moment | null | undefined;
  carModel: string;
  cost: string;
  description: string;
  data: IData[];
}

function RepairFOrm() {
  const [formData, setFormData] = useState<IServiceData>({
    name: '',
    currentkilometer: '',
    nextkilometer: '',
    serviceDate: null,
    carModel: '',
    description: '',
    cost: '',
    data: []
  });
  const request = useContext(AxiosContext);
  const [carItems, setCarItems] = useState([]);
  const {saveForm, deleteForm, data} = useRepairForm(formData);
  const params = useParams();
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
    const serviceFormData: IServiceData = data.data as IServiceData;
    setFormData(serviceFormData);
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
  function getRepairFormData(params: IData[]) {
    setFormData(prev => ({
      ...prev,
      data: params
    }));
  }
  function save() {
    console.log(formData);
    saveForm();
  }

  return (
    <>
      <TopBar title='تعویض قطعات' back='/repairs' />
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
          data={formData.cost}
          label='هزینه'
          placeholder='هزینه خود را وارد نمایید'
          passData={e => handleInputChange('cost', e)}
        />
        <TextArea
          placeholder='توضیحات خود را وارد نمایید'
          label='توضیحات'
          data={formData.description}
          passData={e => handleInputChange('description', e)}
        />
        <AddItem
          passData={params => getRepairFormData(params)}
          data={formData.data}
        />
        {params.id && (
          <button className={styles.removeItem} onClick={deleteForm}>
            حذف
          </button>
        )}
        <button className={styles.addNew} onClick={save}>
          ذخیره
        </button>
      </div>
    </>
  );
}

export default RepairFOrm;
