import styles from './topBar.module.scss';
import SvgLoader from '@app/ui/components/SvgLoader';
import {ReactNode, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
function TopBar(props: {
  title: string;
  back?: string;
  children?: ReactNode;
  withBack?: boolean;
}) {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState('');

  function goBack() {
    if (props.back) {
      navigate(props.back);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setSticky(styles.sticky) : setSticky('');
  };
  const classes = () => {
    return [styles.topBar, sticky].join(' ');
  };

  const backBtn =
    props.withBack === false ? null : (
      <SvgLoader name='back' fill='#000' size={28} onClick={goBack} />
    );

  return (
    <>
      <div className={classes()}>
        <div className={styles.back}>{backBtn}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.icon}>{props.children}</div>
      </div>
    </>
  );
}

export default TopBar;
