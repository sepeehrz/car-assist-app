import styles from './navigation.module.scss';
import SvgLoader from '@app/ui/components/SvgLoader';
import {NavLink} from 'react-router-dom';

function Navigation() {
  const navigationItems = [
    {
      text: 'خانه',
      icon: 'users',
      to: '/'
    },
    {
      text: 'پروفایل',
      icon: 'users',
      to: '/profile'
    },
    {
      text: 'تعمیرات',
      icon: 'users',
      to: '/repairs'
    },
    {
      text: 'ماشین‌ها',
      icon: 'users',
      to: '/cars'
    }
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.navigation}>
          {navigationItems.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={({isActive}) =>
                [styles.navItem, isActive ? styles.active : ''].join(' ')
              }>
              <div className={styles.navItemIcon}>
                <SvgLoader name={item.icon} stroke='#000' />
              </div>
              <div className={styles.navItemName}>{item.text}</div>
            </NavLink>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Navigation;
