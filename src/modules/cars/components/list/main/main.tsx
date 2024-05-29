import Box from '../box/box';
import styles from './main.module.scss';
import {useNavigate} from 'react-router-dom';
import TopBar from '@app/ui/components/topBar/topBar';
import {useContext, useEffect, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';

function CarList() {
  const navigate = useNavigate();
  const request = useContext(AxiosContext);
  const [cars, setCars] = useState([]);

  const addNew = () => {
    navigate('/cars/add');
  };
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const {data, status} = await request.get('/api/cars');
    if (status === 200) {
      setCars(data.data);
    }
  }
  return (
    <>
      <TopBar title='لیست وسایل نقلیه' withBack={false}>
        <button className={styles.addNew} onClick={addNew}>
          +
        </button>
      </TopBar>
      <div className={styles.cars}>
        <div className={styles.list}>
          {cars.map((item, index) => (
            <Box key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CarList;
