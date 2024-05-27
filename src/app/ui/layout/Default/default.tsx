import {Outlet} from 'react-router-dom';
import styles from './default.module.scss';
import Navigation from '../../components/navigation/navigation';

function DefaultLayout() {
  return (
    <>
      <section className={styles.main}>
        <Outlet />
        <Navigation />
      </section>
    </>
  );
}

export default DefaultLayout;
