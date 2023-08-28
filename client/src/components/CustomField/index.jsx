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
              return (
                  <div class="w-full mb-6 px-4">
                      <div class="h-12 relative">
                          <input type={props.type} class={props.class ? props.class : null} placeholder={props.placeholder} {...field} />
                          {props.children}
                      </div>
                      {meta.touched && meta.error && (
                          <div class="text-red-500 mt-2 ml-4">{meta.error}</div>
                      )}
                  </div>
            )
        }}
    </Field>
  )
}

export default CustomField