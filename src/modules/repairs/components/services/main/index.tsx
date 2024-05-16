import ServicesBox from '../box/box';
import styles from './index.module.scss';

function Services() {
  return (
    <>
      <div className={styles.services}>
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <ServicesBox key={i} />
          ))}
      </div>
    </>
  );
}

export default Services;
