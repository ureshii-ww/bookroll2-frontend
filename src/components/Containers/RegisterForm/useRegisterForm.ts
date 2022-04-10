import { useDispatch } from 'react-redux';
import { register } from '../../../store/reducers/auth';

const useRegisterForm = () => {
  const dispatch = useDispatch();

  const fetchRegister = (username: string, email: string, password: string) => {
    dispatch(register({ username, email, password }));
  };

  return fetchRegister;
};

export default useRegisterForm;