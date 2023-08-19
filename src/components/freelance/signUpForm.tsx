import { useState } from "react"
interface FormState {
	name: string
	email: string;
	phone: string;
	type: "blog" | "ecom" | "app" | "portfolio" | "m/i" | "other"
	comments: string
}

export default () => {
	const [formState, setFormState] = useState<FormState>({
		name: "",
		email: "",
		phone: "",
		type: "other",
		comments: ""
	})
	const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormState({
			...formState,
			[name]: value
		})
	}
	return (
		<form className="p-10" name="inquire">
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" className="form-control mb-4" onChange={onFormChange}  />
			<label htmlFor="email">Email</label>
			<input type="email" name="email" id="email" className="form-control mb-4" onChange={onFormChange} />
			<label htmlFor="phone">Phone</label>
			<input type="tel" name="phone" id="phone" className="form-control mb-4" onChange={onFormChange} />
			<label htmlFor="type">Type of Website</label>
			<select name="type" id="type" className="form-select mb-4" onChange={onFormChange}>
				<option value="blog">Blog</option>
				<option value="ecom">E-Commerce</option>
				<option value="app">App</option>
				<option value="portfolio">Portfolio</option>
				<option value="m/i">Marketing/Information</option>
				<option value="other">Other/Not Listed</option>
			</select>
			<label htmlFor="comments" >Comments</label>
			<textarea name="comments" id="comments" onChange={onFormChange}  className="form-control mb-4">
				
			</textarea>
			<a className="btn btn-primary" href={`mailto:rpmullin17@gmail.com?subject=Freelance Inquiry!&body=You may add comments above the line, but do not touch below the line! --- name: ${formState.name} email: ${formState.email} phone: ${formState.phone} type: ${formState.type} comments: ${formState.comments} ---`}>
				Send Request!
			</a>
		</form>
	)
}