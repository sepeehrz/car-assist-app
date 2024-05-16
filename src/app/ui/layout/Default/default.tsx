import {Outlet} from 'react-router-dom';
import styles from './default.module.scss';
import Navigation from '../../components/navigation/navigation';
import {ScrollRestoration} from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <section className={styles.main}>
        <Outlet />
        <Navigation />
        <ScrollRestoration />
      </section>
    </>
  );
}

export default DefaultLayout;
