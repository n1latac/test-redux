import {string, object} from 'yup'

export const registrationSchema = object({
    firstName: string().required('first name is required'),
    lastName: string().required('last name is required'),
    email: string().required('email is required'),
    password: string().required('password is required'),
})