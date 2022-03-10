import AuthServices from '../../../services/auth.service';
import { RouteNames } from '../../../routes/route-names.enum';
import { useNavigate } from 'react-router-dom';
import FetchRegisterArgs from './types/fetch-register-args';
import useRequest from '../../../hooks/useRequest';

const useRegisterForm = () => {
  const navigate = useNavigate();

  const fetchRegister = useRequest<FetchRegisterArgs>('Post', async ({ username, email, password }) => {
    await AuthServices.register(username, email, password);
    navigate(RouteNames.LOGIN);
  });

  return fetchRegister;
};

export default useRegisterForm;