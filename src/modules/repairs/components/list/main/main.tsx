import Box from '../box/box';
import Filters from '../filters/filters';
import styles from './main.module.scss';
import TopBar from '@app/ui/components/topBar/topBar';
import ServicesModal from '../servicesModal/index';
import {useState} from 'react';
function RepairServices() {
  const [showServiceModal, setShowServiceModal] = useState(false);

  const addService = () => {
    setShowServiceModal(true);
  };

  return (
    <>
      <TopBar title='لیست وسایل نقلیه' withBack={false}>
        <button className={styles.addNew} onClick={addService}>
          +
        </button>
      </TopBar>
      <div className={styles.list}>
        <Filters />
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <Box key={i} />
          ))}
      </div>
      {showServiceModal && <ServicesModal show={setShowServiceModal} />}
    </>
  );
}

export default RepairServices;
