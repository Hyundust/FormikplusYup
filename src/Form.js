import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';





const Form = () => {

    const formik = useFormik({
        initialValues:{ 
            name:"" ,
            email:"",
            amount:0,
            currency:"",
            text:"",
            terms: false
        },
        validationSchema:Yup.object({
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


        }),
        onSubmit: values => console.log(JSON.stringify(values,null,2))
    })
    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Donation form</h2>
            <label htmlFor="name">Your name</label>
            <input 
                id="name" 
                name="name" 
                type="text" 
                value={formik.values.name} 
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}/>

            {formik.errors.name&&formik.touched.name ?<div class="errorDiv">{formik.errors.name}</div>:null}

            <label htmlFor="email">Your email</label>
            <input 
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}/>

            {formik.errors.email&&formik.touched.email?<div class="errorDiv" >{formik.errors.email}</div>:null}
            
            
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}>
                    <option value="">Choose your currency</option>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                    <option value="CAD">CAD</option>
            </select>
            {formik.errors.currency&&formik.touched.currency ?<div class="errorDiv">{formik.errors.currency}</div>:null}
            <label htmlFor="text">Notes</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}/>

            {formik.errors.text&&formik.touched.text?<div class="errorDiv">{formik.errors.text}</div>:null}
            
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount"
                type="number"
                value={formik.values.amount}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
            />
            {formik.errors.amount&&formik.touched.amount?<div class="errorDiv">{formik.errors.amount}</div>:null}
            <label className="checkbox">
                <input 
                name="terms"
                type="checkbox"
                value={formik.values.terms}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                />
                Are you agreed with our rules?
            </label>
            {formik.errors.terms&&formik.touched.terms?<div class="errorDiv">{formik.errors.terms}</div>:null}
            <button type="submit">Send</button>
        </form>
    )
}

export default Form;