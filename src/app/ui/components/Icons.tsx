import * as MaterialDesign from 'react-icons/md';
import * as FontAwesome from 'react-icons/fa';

interface IProps {
  icon: string;
  size?: number;
  type: string;
  onClick?: () => void;
}

function Icons({icon, size, type, onClick}: IProps) {
  const MdIcons = MaterialDesign[icon as keyof typeof MaterialDesign];
  const FaIcons = FontAwesome[icon as keyof typeof FontAwesome];
  return (
    <>
      {type === 'MaterialDesign' ? (
        <MdIcons size={size} onClick={onClick} />
      ) : (
        <FaIcons size={size} onClick={onClick} />
      )}
    </>
  );
}
Icons.defaultProps = {
  size: '24',
  type: 'MaterialDesign'
};

export default Icons;
