import {string, object, ref} from 'yup'

export const registrationSchema = object({
    firstName: string().required('first name is required'),
    lastName: string().required('last name is required'),
    email: string().required('email is required').email('must be a valid email'),
    password: string().required('password is required').matches("(?=.*?[A-Z])",'At least one upper case English letter'),
    confirmPassword: string().required('Please retype your password').oneOf([ref('password')], 'Your password dont match')
})