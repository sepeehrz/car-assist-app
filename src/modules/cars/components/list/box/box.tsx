import {useNavigate} from 'react-router-dom';
import styles from './box.module.scss';
import Icons from '@app/ui/components/Icons';

interface IData {
  name: string;
  model: string;
  color: string;
  type: string;
  id: number;
}
interface IProps {
  data: IData;
}
function CarBox({data}: IProps) {
  const navigate = useNavigate();
  function editCar() {
    navigate(`/cars/${data.id}`);
  }
  function viewCar() {
    console.log(data);
  }
  return (
    <>
      <div className={styles.box}>
        <div className={styles.details}>
          <div className={styles.name}>اطلاعات وسیله نقلیه</div>
          <div className={styles.detailsWrapper}>
            <div className={styles.detailsItem}>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>{data.name}</div>
              </div>
              <div>
                <div className={styles.detailsTitle}>مدل</div>
                <div className={styles.detailsName}>{data.model}</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div>
                <div className={styles.detailsTitle}>رنگ</div>
                <div className={styles.detailsName}>{data.color}</div>
              </div>
              <div>
                <div className={styles.detailsTitle}>نوع</div>
                <div className={styles.detailsName}>{data.type}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <Icons
            className={styles.icon}
            icon='FaEye'
            type='FontAwesome'
            onClick={viewCar}
            size={14}
          />
          <Icons
            className={styles.icon}
            icon='FaEdit'
            type='FontAwesome'
            onClick={editCar}
            size={14}
          />
        </div>
      </div>
    </>
  );
}

export default CarBox;
