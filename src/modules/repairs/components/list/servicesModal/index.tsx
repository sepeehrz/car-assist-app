import styles from './index.module.scss';
import Icons from '@app/ui/components/Icons';
import Services from '../../services/main/index';
import Modal from '@app/ui/components/modal/modal';

function ModalTest(props: {show: (params: boolean) => void}) {
  function closeModal() {
    props.show(false);
  }

  return (
    <>
      <Modal>
        <div className={styles.servicesWrapper}>
          <div className={styles.title}>
            <div>سرویس ها</div>
            <Icons
              icon='FaTimes'
              type='FontAwesome'
              onClick={closeModal}
              size={20}
            />
          </div>
          <div className={styles.services}>
            <Services />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalTest;
