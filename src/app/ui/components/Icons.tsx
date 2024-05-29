import * as MaterialDesign from 'react-icons/md';
import * as FontAwesome from 'react-icons/fa';

interface IProps {
  icon: string;
  size?: number;
  className?: string;
  type: string;
  onClick?: () => void;
}

function Icons({icon, size, type, className, onClick}: IProps) {
  const MdIcons = MaterialDesign[icon as keyof typeof MaterialDesign];
  const FaIcons = FontAwesome[icon as keyof typeof FontAwesome];
  return (
    <>
      <div className={className}>
        {type === 'MaterialDesign' ? (
          <MdIcons size={size} onClick={onClick} />
        ) : (
          <FaIcons size={size} onClick={onClick} />
        )}
      </div>
    </>
  );
}
Icons.defaultProps = {
  size: '24',
  type: 'MaterialDesign'
};

export default Icons;
