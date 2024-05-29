import moment from 'moment-jalaali';

export function toCurrency(item: number | string) {
  return new Intl.NumberFormat().format(+item);
}
export function dateToPersian(item: string) {
  return moment(item).format('jYYYY/jMM/jDD');
}
export function DateFormat(date: string, format: string) {
  return moment(date).format(format);
}
export function toKm(number: string | number) {
  return (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ' + 'کیلومتر'
  );
}
