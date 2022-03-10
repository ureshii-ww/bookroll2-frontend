import { useRequestPost } from '../../../hooks/useRequestPost';
import AuthServices from '../../../services/auth.service';
import { RouteNames } from '../../../routes/route-names.enum';
import { useNavigate } from 'react-router-dom';
import FetchRegisterArgs from './types/fetch-register-args';

const useRegisterForm = () => {
  const navigate = useNavigate();

  const fetchRegister = useRequestPost<FetchRegisterArgs>(async ({ username, email, password }) => {
    await AuthServices.register(username, email, password);
    navigate(RouteNames.LOGIN);
  });

  return fetchRegister;
};

export default useRegisterForm;