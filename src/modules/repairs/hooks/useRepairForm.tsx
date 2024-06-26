import {useContext, useEffect, useState} from 'react';
import AxiosContext from '@app/utils/context/axiosContext';
import {useSearchParams, useParams, useNavigate} from 'react-router-dom';

function useRepairForm(form: {carModel: number | string}) {
  const request = useContext(AxiosContext);
  const params = useParams();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const [data, setData] = useState<{
    service_type?: number;
    data: object;
    car_id: number;
  }>({
    data: {},
    car_id: 1
  });
  const fetchData = async () => {
    if (params.id) {
      const {data, status} = await request.get(`/api/services/${params.id}`);
      if (status === 200) {
        setData(data.data);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  async function handleSaveBtn() {
    if (params.id) {
      const serverData = {
        service_type: data.service_type,
        data: form,
        car_id: data.car_id
      };
      const {status} = await request.put(
        `/api/services/${params.id}`,
        serverData
      );
      if (status === 200) {
        navigate('/repairs');
      }
    } else {
      const serverData = {
        service_type: query.get('service_type'),
        data: form,
        car_id: form.carModel
      };
      const {status} = await request.post('/api/services', serverData);
      if (status === 200) {
        navigate('/repairs');
      }
    }
  }
  function saveForm() {
    handleSaveBtn();
  }
  async function deleteForm() {
    const {status} = await request.delete(`/api/services/${params.id}`);
    if (status === 200) {
      navigate('/repairs');
    }
  }
  return {saveForm, deleteForm, data};
}

export default useRepairForm;
