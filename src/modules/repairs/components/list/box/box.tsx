import styles from './box.module.scss';

function RepairsBox() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.information}>
          <div className={styles.name}>تعویض روغن</div>
          <div className={styles.details}>
            <div className={styles.date}>1402/02/31</div>
            <div className={styles.kilometr}>km 250,0000 </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </div>
          <button className={styles.viewDetails}>جزئیات</button>
        </div>
      </div>
    </>
  );
}

export default RepairsBox;
