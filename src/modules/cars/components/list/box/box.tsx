import styles from './box.module.scss';

function CarBox() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.details}>
          <div className={styles.name}>اطلاعات وسیله نقلیه</div>
          <div className={styles.detailsWrapper}>
            <div className={styles.detailsItem}>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>پزو 206</div>
              </div>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>پزو 206</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>پزو 206</div>
              </div>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>پزو 206</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>پزو 206</div>
              </div>
              <div>
                <div className={styles.detailsTitle}>نام</div>
                <div className={styles.detailsName}>پزو 206</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <button>view</button>
          <button>edit</button>
        </div>
      </div>
    </>
  );
}

export default CarBox;
