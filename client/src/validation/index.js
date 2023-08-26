import {string, object} from 'yup'

export const registrationSchema = object({
    firstName: string().required('first name is required'),
    lastName: string().required('first name is required'),
    email: string().required('first name is required'),
    password: string().required('first name is required'),
})