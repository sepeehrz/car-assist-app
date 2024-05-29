import Box from '../box/box';
import Filters from '../filters/filters';
import styles from './main.module.scss';
import TopBar from '@app/ui/components/topBar/topBar';
import ServicesModal from '../servicesModal/index';
import {useContext, useEffect, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';

function RepairServices() {
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [services, setServices] = useState([]);

  const addService = () => {
    setShowServiceModal(true);
  };
  const request = useContext(AxiosContext);

  const fetchData = async () => {
    const {data, status} = await request.get(`/api/services`);
    if (status === 200) {
      setServices(data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TopBar title='لیست وسایل نقلیه' withBack={false}>
        <button className={styles.addNew} onClick={addService}>
          +
        </button>
      </TopBar>
      <div className={styles.list}>
        <Filters />
        {services.map((item, index) => (
          <Box key={index} data={item} />
        ))}
      </div>
      {showServiceModal && <ServicesModal show={setShowServiceModal} />}
    </>
  );
}

export default RepairServices;
