import { Formik } from 'formik'
import Head from 'next/head'
import { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm(){

	/** @type React.RefObject<ReCAPTCHA> */
	const reRef = useRef()
	async function sendMail(formData){
		const response = await fetch("/api/sendmail/",{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(formData)
		})
		return response.json()
	}

	return (
		<div className="flex max-w-2xl flex-col mx-auto space-y-5 hyphens-auto mt-6"> 
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<Formik
				initialValues={{ name: '', email: '', message: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Pflichtfeld';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Ungültige E-Mail-Adresse';
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
					// setTimeout(() => {
					// 	alert(JSON.stringify(values, null, 2));
					// }, 400);
					const token = await reRef.current?.executeAsync()
					setSubmitting(true)
					const submission = await sendMail({...values, token})
					if (submission.success) {
						resetForm()
						setStatus("sent")
						window.scrollTo({top: 0})
					}
					reRef.current?.reset()
					setSubmitting(false)
				}}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
				 status
       }) => (
         <form onSubmit={handleSubmit}>
					 {status === 'sent' && <p className="bg-green-500 bg-opacity-20 p-2 font-medium text-center mb-6 rounded text-green-900">Deine Nachricht wurde versendet. Wir melden uns baldmöglichst bei dir.</p>}
					 <div className="space-y-6 text-gray-700 uppercase tracking-wide font-bold"> 
						<div> 
							<label className="text-xs" htmlFor="name">Name</label> 
							<input required onChange={handleChange} onBlur={handleBlur} placeholder="Dein Name" className="block mt-1 mb-2 w-full input-field" name="name" type="text" value={values.name} /> 
						</div>
						<div> 
							<label className="text-xs" htmlFor="email">E-Mail</label> 
							<input required placeholder="example@gmail.com" onChange={handleChange} onBlur={handleBlur}
								className="block mt-1 mb-2 box-border w-full input-field" name="email" type="email" value={values.email} /> 
							<div className="normal-case text-sm ml-1 -mt-1 text-red-600 font-normal">{errors.email && touched.email && errors.email }</div>
						</div> 
           	
					 	<div> 
							<label className="text-xs" htmlFor="message">Nachricht</label> 
							<textarea required onChange={handleChange} onBlur={handleBlur} placeholder="Deine Nachricht an uns" rows="8" className="block my-1 w-full input-field" name="message" value={values.message}></textarea> 
						</div>
						<div className="flex items-center">
							<button type="submit" disabled={isSubmitting} className="py-2 px-5 font-semibold text-gray-100 bg-gray-800 rounded-full shadow-sm hover:cursor-pointer hover:shadow hover:bg-gray-700 focus:outline-none focus:bg-gray-700 active:bg-gray-600">
								Senden
							</button>
							{ isSubmitting && <LoadingSpinner /> }
						</div>
						<ReCAPTCHA ref={reRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" />
					</div>
         </form>
       )}
     </Formik>
		</div>
	)
}

function LoadingSpinner(){
	return (
		<svg className="animate-spin ml-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	)
}