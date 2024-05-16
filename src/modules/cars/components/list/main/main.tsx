import Box from '../box/box';
import styles from './main.module.scss';
import {useNavigate} from 'react-router-dom';
import TopBar from '@app/ui/components/topBar/topBar';

function CarList() {
  const navigate = useNavigate();

  const addNew = () => {
    navigate('/cars/add');
  };
  return (
    <>
      <TopBar title='لیست وسایل نقلیه' withBack={false}>
        <button className={styles.addNew} onClick={addNew}>
          +
        </button>
      </TopBar>
      <div className={styles.cars}>
        <div className={styles.list}>
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <Box key={i} />
            ))}
        </div>
      </div>
    </>
  );
}

export default CarList;
