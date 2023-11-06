import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  status: yup.boolean().required(),
  name: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
