import type {IData} from '../index';
import styles from './index.module.scss';
import {useEffect, useState} from 'react';
import Icons from '@app/ui/components/Icons';
import TextField from '@app/ui/components/Forms/TextField/TextField';
import TextArea from '@app/ui/components/Forms/TextareaField/Textarea';
import SelectField from '@app/ui/components/Forms/SelectField/SelectField';

interface IProps {
  passData: (params: IData[]) => void;
  data: IData[];
}
function AddItem({passData, data}: IProps) {
  const [formData, setFormData] = useState<IData[]>(
    data
      ? data
      : [
          {
            name: '',
            typeRepair: '',
            reasonDescription: '',
            description: ''
          }
        ]
  );
  const [carItems] = useState([
    {
      text: 'تعویض',
      value: 1
    },
    {
      text: 'تعمیر',
      value: 2
    },
    {
      text: 'سایر',
      value: 3
    }
  ]);
  useEffect(() => {
    if (data && data.length) {
      setFormData(data);
    }
  }, [data]);
  useEffect(() => {
    passData(formData);
  }, [formData]);

  const handleInputChange = (
    index: number,
    field: string,
    value: string | undefined | number
  ) => {
    const updatedData = formData.map((obj, indx) => {
      if (indx === index) {
        return {...obj, [field]: value};
      }
      return obj;
    });
    setFormData(updatedData);
  };

  function addNew() {
    setFormData(oldArray => [
      ...oldArray,
      {
        name: '',
        typeRepair: '',
        reasonDescription: '',
        description: ''
      }
    ]);
  }
  function removeItem(index: number) {
    const updatedArray = [...formData];
    if (formData.length > 1) {
      updatedArray.splice(index, 1);
      setFormData(updatedArray);
    }
  }

  return (
    <>
      {formData.map((item, index) => (
        <div className={styles.itemsWrapper} key={index}>
          <div className={styles.title}>
            <h2>سرویس {index + 1}</h2>
            <div className={styles.actions}>
              {index === formData.length - 1 && (
                <Icons
                  className={styles.add}
                  onClick={addNew}
                  icon='FaPlus'
                  type='FontAwesome'
                  size={14}
                />
              )}
              {formData.length !== 1 && (
                <Icons
                  onClick={() => removeItem(index)}
                  className={styles.remove}
                  icon='FaTimes'
                  type='FontAwesome'
                  size={14}
                />
              )}
            </div>
          </div>
          <div className={styles.item}>
            <TextField
              data={item.name}
              label='نام'
              passData={name => handleInputChange(index, 'name', name)}
            />
          </div>
          <div className={styles.item}>
            <SelectField
              data={item.typeRepair}
              items={carItems}
              passData={typeRepair =>
                handleInputChange(index, 'typeRepair', typeRepair)
              }
              label='نوع تعمیر'
              placeholder='نوع تعمیر خود را انتخاب نمایید'
            />
          </div>
          {+item.typeRepair === 3 && (
            <div className={styles.item}>
              <TextArea
                placeholder='توضیحات نوع تعمیر خود را وارد نمایید'
                label='توضیحات نوع تعمیر'
                data={item.reasonDescription}
                passData={reasonDescription =>
                  handleInputChange(
                    index,
                    'reasonDescription',
                    reasonDescription
                  )
                }
              />
            </div>
          )}

          <div className={styles.item}>
            <TextArea
              placeholder='توضیحات سرویس خود را وارد نمایید'
              label='توضیحات سرویس'
              data={item.description}
              passData={description =>
                handleInputChange(index, 'description', description)
              }
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default AddItem;
