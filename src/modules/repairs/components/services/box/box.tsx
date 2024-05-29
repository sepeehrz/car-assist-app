import styles from './box.module.scss';
import Icons from '@app/ui/components/Icons';
import {useNavigate} from 'react-router-dom';
interface IData {
  text: string;
  icon: string;
  serviceType: number;
  to: string;
}
interface IProps {
  data: IData;
}

function RepairsBox({data}: IProps) {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate(`${data.to}?service_type=${data.serviceType}`);
  };
  return (
    <>
      <div className={styles.box} onClick={goToForm}>
        <div className={styles.icon}>
          <Icons icon={data.icon} type='FontAwesome' />
        </div>
        <div className={styles.title}>{data.text}</div>
      </div>
    </>
  );
}

export default RepairsBox;
