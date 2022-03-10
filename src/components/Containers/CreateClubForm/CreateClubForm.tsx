import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import useRequest from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';
import { useActions } from '../../../hooks/useActions';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import CreateClubFormInput from './types/create-club-form-inputs';
import CreateClubArgs from './types/create-club-args';

const CreateClubForm: FC = () => {
  const { setUserData, closeModal } = useActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClubFormInput>();

  const createClub = useRequest<CreateClubArgs>('Page', async ({ clubname }) => {
    const response = await ClubService.createClub(clubname);
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
    closeModal();
  });

  const onSubmit: SubmitHandler<CreateClubFormInput> = data => createClub({ clubname: data.clubname });

  return (
    <div>
      <h1>Создать клуб</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="clubname"
          control={control}
          defaultValue={''}
          rules={{ required: true, minLength: 3, maxLength: 32 }}
          render={({ field }) => <InputText {...field} />}
        />
        <SubmitButton>Создать клуб</SubmitButton>
      </form>
    </div>
  );
};

export default CreateClubForm;
