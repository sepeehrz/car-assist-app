import styles from './modal.module.scss';
import {ReactNode} from 'react';

function Modal(props: {children: ReactNode}) {
  // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  // const body = document.body;
  // body.style.position = 'fixed';
  // body.style.top = `-${scrollY}`;
  return (
    <>
      <div className={styles.modal}>{props.children}</div>
    </>
  );
}

export default Modal;
