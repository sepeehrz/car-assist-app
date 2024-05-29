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
      text: 'پروفایل',
      icon: 'FaOilCan',
      to: '/profile',
      serviceType: 2
    },
    {
      text: 'تعمیرات',
      icon: 'FaOilCan',
      to: '/repairs',
      serviceType: 3
    },
    {
      text: 'ماشین‌ها',
      icon: 'FaOilCan',
      to: '/cars',
      serviceType: 4
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
