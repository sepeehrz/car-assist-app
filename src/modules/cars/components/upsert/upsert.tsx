import {useContext, useEffect, useState} from 'react';
import styles from './upsert.module.scss';
import TopBar from '@app/ui/components/topBar/topBar';
import AxiosContext from '@app/utils/context/axiosContext';
import TextField from '@app/ui/components/Forms/TextField/TextField';
import {useNavigate, useParams} from 'react-router-dom';

function Upsert() {
  const request = useContext(AxiosContext);
  const params = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    model: '',
    color: '',
    type: ''
  });

  const fetchData = async () => {
    if (params.id) {
      try {
        const {data, status} = await request.get(`/api/cars/${params.id}`);
        if (status === 200) {
          setFormData({
            name: data.data.name,
            model: data.data.model,
            color: data.data.color,
            type: data.data.type
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  async function handleSubmit(e: {preventDefault: () => void}) {
    e.preventDefault();
    if (params.id) {
      const {data, status} = await request.put(
        `/api/cars/${params.id}`,
        formData
      );
      if (status === 200) {
        console.log(data);
        setFormData(data.data);
      }
    } else {
      const {status} = await request.post('/api/cars', formData);
      if (status === 200) {
        navigate('/cars');
      }
    }
  }

  return (
    <>
      <TopBar title='لیست وسایل نقلیه' back='/cars' />
      <form onSubmit={handleSubmit} className={styles.upsert}>
        <TextField
          data={formData.name}
          label='نام'
          passData={name => handleInputChange('name', name)}
        />
        <TextField
          data={formData.model}
          label='مدل'
          passData={model => handleInputChange('model', model)}
        />
        <TextField
          data={formData.color}
          label='رنگ'
          passData={color => handleInputChange('color', color)}
        />
        <TextField
          data={formData.type}
          label='نوع'
          passData={type => handleInputChange('type', type)}
        />
        <button className={styles.save}>ذخیره</button>
      </form>
    </>
  );
}

export default Upsert;
