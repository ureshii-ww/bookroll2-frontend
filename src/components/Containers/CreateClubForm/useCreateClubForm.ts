import useAppDispatch from '../../../hooks/useAppDispatch';
import { createClub } from '../../../store/reducers/auth';

export const useCreateClubForm = () => {
  const dispatch = useAppDispatch();

  const handleCreateClub = (clubname: string) => {
    dispatch(createClub(clubname))
  }

  return {handleCreateClub};
}