import { joiResolver } from '@hookform/resolvers/joi';
import { Add, DriveFileRenameOutline } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { WorkExperience } from '@reactive-resume/schema';
import dayjs from 'dayjs';
import Joi from 'joi';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import BaseModal from '@/components/shared/BaseModal';
import MarkdownSupported from '@/components/shared/MarkdownSupported';
import { VALID_URL_REGEX } from '@/constants/index';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import { addItem, editItem } from '@/store/resume/resumeSlice';

type FormData = WorkExperience;

const defaultState: FormData = {
  name: '',
  position: '',
  date: '',
  url: '',
  summary: '',
  about: '',
};

const schema = Joi.object<FormData>().keys({
  id: Joi.string(),
  name: Joi.string().required(),
  position: Joi.string().required(),
  date: Joi.string().allow(''),
  url: Joi.string().pattern(VALID_URL_REGEX, { name: 'valid URL' }).allow(''),
  summary: Joi.string().allow(''),
  about: Joi.string().allow(''),
});

const WorkModal: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { open: isOpen, payload } = useAppSelector((state) => state.modal['builder.sections.work']);
  const path: string = get(payload, 'path', 'sections.work');
  const item: FormData = get(payload, 'item', null);

  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`));

  const isEditMode = useMemo(() => !!item, [item]);

  const addText = useMemo(
    () =>
      t<string>('builder.common.actions.add', {
        token: t<string>(`builder.leftSidebar.${path}.heading`, { defaultValue: heading }),
      }),
    [t, heading]
  );
  const editText = useMemo(
    () =>
      t<string>('builder.common.actions.edit', {
        token: t<string>(`builder.leftSidebar.${path}.heading`, { defaultValue: heading }),
      }),
    [t, heading]
  );

  const { reset, control, handleSubmit } = useForm<FormData>({
    defaultValues: defaultState,
    resolver: joiResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    if (isEditMode) {
      dispatch(editItem({ path: `${path}.items`, value: formData }));
    } else {
      dispatch(addItem({ path: `${path}.items`, value: formData }));
    }

    handleClose();
  };

  const handleClose = () => {
    dispatch(
      setModalState({
        modal: 'builder.sections.work',
        state: { open: false },
      })
    );

    reset(defaultState);
  };

  useEffect(() => {
    if (!isEmpty(item)) {
      reset(item);
    }
  }, [item, reset]);

  return (
    <BaseModal
      icon={isEditMode ? <DriveFileRenameOutline /> : <Add />}
      isOpen={isOpen}
      handleClose={handleClose}
      heading={isEditMode ? editText : addText}
      footerChildren={<Button onClick={handleSubmit(onSubmit)}>{isEditMode ? editText : addText}</Button>}
    >
      <form className="my-2 grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              required
              autoFocus
              label={t<string>('builder.common.form.name.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="position"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              required
              label={t<string>('builder.common.form.position.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('builder.common.form.date.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        
        <Controller
          name="url"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('builder.common.form.url.label')}
              placeholder="https://"
              className="col-span-2"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="summary"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              multiline
              minRows={3}
              maxRows={6}
              label={t<string>('builder.common.form.summary.label')}
              className="col-span-2"
              error={!!fieldState.error}
              helperText={fieldState.error?.message || <MarkdownSupported />}
              {...field}
            />
          )}
        />

        <Controller
          name="about"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              multiline
              minRows={3}
              maxRows={6}
              label={t<string>('builder.leftSidebar.sections.work.form.about.label')}
              className="col-span-2"
              error={!!fieldState.error}
              helperText={fieldState.error?.message || <MarkdownSupported />}
              {...field}
            />
          )}
        />  
        <input type="submit" style={{ display: 'none' }} />
      </form>
    </BaseModal>
  );
};

export default WorkModal;
