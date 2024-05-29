import {useNavigate} from 'react-router-dom';
import styles from './box.module.scss';
import {serviceType} from '@modules/repairs/enums/index';
import {dateToPersian, toKm} from '@app/utils/filters/index';
interface IData {
  name: string;
  description: string;
  serviceDate: string;
  currentkilometer: string;
}
interface IDataForm {
  data: IData;
  id: number;
  service_type: number;
}
interface IProps {
  data: IDataForm;
}
function RepairsBox({data}: IProps) {
  const navigate = useNavigate();
  function details() {
    navigate(`/repairs/services/${serviceType[data.service_type]}/${data.id}`);
  }
  return (
    <>
      <div className={styles.box}>
        <div className={styles.information}>
          <div className={styles.name}>{data.data.name}</div>
          <div className={styles.details}>
            <div className={styles.date}>
              {dateToPersian(data.data.serviceDate)}
            </div>
            <div className={styles.kilometr}>
              {toKm(data.data.currentkilometer)}
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.text}>{data.data.description}</div>
          <button className={styles.viewDetails} onClick={details}>
            جزئیات
          </button>
        </div>
      </div>
    </>
  );
}

export default RepairsBox;
