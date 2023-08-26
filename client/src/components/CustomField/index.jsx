import React from 'react'
import { Field } from 'formik'

function CustomField(props) {
  return (
    <Field 
        name={props.name}
        >
        {({
            field,
            form: {touched, errors},
            meta
        })=>{
            return(
                <div>
                    <input type={props.type} placeholder={props.placeholder ? props.placeholder : ''} class={props.class ? props.class : null} {...field}/>
                    {meta.touched && meta.error && (
                        <div class="text-red-500">{meta.error}</div>
                    )}
                </div>
            )
        }}
    </Field>
  )
}

export default CustomField