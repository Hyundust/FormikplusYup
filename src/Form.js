import { Formik,Form,Field,ErrorMessage,useField } from "formik";
import React from "react";
import * as Yup from 'yup';



const MyTextInput=({label,...props})=>{

    const [field,meta] = useField(props);
    return(
        <>
            <label htmlFor={props.name}>{label}</label>
            <input  {...props}{...field}/>
            {meta.touched && meta.error ? 
            (<div className="errorDiv">{meta.error}</div>):null}
        </>

    )
    
}
const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <>
        <label className="checkbox">
            <input type="checkbox" {...field} {...props} />
            {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="errorDiv">{meta.error}</div>
        ) : null}
      </>
    );
  };









const Table =()=>{

    return (
        <Formik
           initialValues = {{ 
            name:"" ,
            email:"",
            amount:0,
            currency:"",
            text:"",
            terms: false
            }}
            validationSchema = { Yup.object({
                name:Yup.string()
                    .min(3,"Atleast 3 characters!")
                    .required("Required field!"),
                email:Yup.string()
                    .email("Must be a valid email address!")
                    .required("Required field!"),
                amount:Yup.number()
                    .min(5,"Minimum 5")
                    .required("Required field!"),
                currency: Yup.string()
                    .required("You must select a currency"),
                terms: Yup.boolean()
                    .oneOf([true],"You need to agree "),
                text: Yup.string()
                    .max(200,"Max 200 characters.")
    
    
            })}
            onSubmit = {values => console.log(JSON.stringify(values,null,2))}

>







             <Form className="form" >
                <h2>Donation form</h2>
                <MyTextInput 
                label="Your Name"
                id="name" 
                name="name" 
                type="text" 
               
                />

                
                <MyTextInput  label="Your email"
                    id="email"
                    name="email"
                    type="email"
                    />

            
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Choose your currency</option>
                        <option value="USD">USD</option>
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                        <option value="CAD">CAD</option>
                </Field>
                <ErrorMessage className="errorDiv" name ="currency" component="div"/>
                <label htmlFor="text">Notes</label>
                <textarea 
                    id="text"
                    name="text"
                    as="textarea"/>

                <ErrorMessage className="errorDiv" name ="text" component="div"/>            
                <label htmlFor="amount">Amount</label>
                <Field id="amount" name="amount"
                    type="number"
                    
                />
                <ErrorMessage className="errorDiv" name ="amount" component="div"/>
                <MyCheckbox 
                        name ="terms">
                            Are you agreed with our rules?
                        </MyCheckbox>
                <button type="submit">Send</button>
        </Form>


        </Formik>
    )

}
export default Table;