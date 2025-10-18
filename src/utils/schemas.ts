import * as yup from 'yup';
import { regExp } from './regex';

export const userDetailSchema = yup.object({
    full_name: yup.string().required('E-10001'),
    mobile_number: yup.string().required('E-10002'),
    education: yup.number().required('E-10003'),
    stream: yup.string().required('E-10004'),
    city: yup.string().required('E-10005'),
    help: yup.string().required('E-10006')
});