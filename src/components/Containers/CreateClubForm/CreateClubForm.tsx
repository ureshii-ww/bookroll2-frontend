import React, { FC } from 'react';
import InputText from '../../UI/Input/InputText';
import { useRequest } from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';
import { useActions } from '../../../hooks/useActions';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';

interface CreateClubFormProps {
  onClose: () => void;
}

type Input = {
  clubname: string;
}

const CreateClubForm: FC<CreateClubFormProps> = ({onClose}) => {
  const { setUserData } = useActions();
  const { control, handleSubmit, formState: { errors } } = useForm<Input>();

  const [createClub, error] = useRequest(async (clubname: string) => {
    const response = await ClubService.createClub(clubname);
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
    onClose();
  });

  const onSubmit: SubmitHandler<Input> = data => createClub(data.clubname)

  return (
    <div>
      <h1>Создать клуб</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="clubname"
                    control={control}
                    defaultValue={''}
                    rules={{ required: true, minLength: 3, maxLength: 32 }}
                    render={({ field }) => <InputText {...field}/>}/>
        <SubmitButton>Создать клуб</SubmitButton>
      </form>
    </div>
  );
};

export default CreateClubForm;