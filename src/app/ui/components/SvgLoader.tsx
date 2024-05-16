import {useEffect, useState} from 'react';

interface IProps {
  stroke?: string;
  name: string;
  size?: number;
  fill?: string;
  onClick?: () => void;
}

function SvgLoader({name, stroke, size, fill, onClick}: IProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [importedComponent, setImportedComponent]: any = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`@app/ui/assets/svg/${name}.svg?react`);
      const AnotherComponent = module.default;
      setImportedComponent(
        <AnotherComponent
          style={{fill: fill, stroke: stroke}}
          width={size}
          onClick={onClick}
        />
      );
    };

    importComponent();
  }, [name, size, stroke]);

  return <>{importedComponent}</>;
}
SvgLoader.defaultProps = {
  stroke: '#000',
  size: '24'
};

export default SvgLoader;
