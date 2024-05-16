import styles from './box.module.scss';
import Icons from '@app/ui/components/Icons';
import {useNavigate} from 'react-router-dom';

function RepairsBox() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/repairs/services/oil');
  };
  return (
    <>
      <div className={styles.box} onClick={goToForm}>
        <div className={styles.icon}>
          <Icons icon='FaOilCan' type='FontAwesome' />
        </div>
        <div className={styles.title}>تعویض روغن</div>
      </div>
    </>
  );
}

export default RepairsBox;
