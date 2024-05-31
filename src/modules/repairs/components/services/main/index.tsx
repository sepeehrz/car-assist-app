import ServicesBox from '../box/box';
import styles from './index.module.scss';

function Services() {
  const servicesTypes = [
    {
      text: 'تعویض روغن',
      icon: 'FaOilCan',
      to: '/repairs/services/oil',
      serviceType: 1
    },
    {
      text: 'سرویس موتور',
      icon: 'FaCar',
      to: '/repairs/services/engine',
      serviceType: 2
    },
    {
      text: 'تعمیرات',
      icon: 'FaTools',
      to: '/repairs/services/others',
      serviceType: 3
    }
  ];
  return (
    <>
      <div className={styles.servicesTypes}>
        {servicesTypes.map((item, index) => (
          <ServicesBox key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default Services;
