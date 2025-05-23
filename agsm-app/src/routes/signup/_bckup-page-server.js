/** @type {import('./$types').Actions} */

import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		// Google Forms ID
		const formID = '1FAIpQLSfHtH_P0DlFpr9a3869fmx8iScYMNocbd4owO3EwJpEQMHDSA';

		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const pacient = formData.get('pacient');
		const diag = formData.get('diag');
		const message = formData.get('message');
		const signup = formData.get('signup');
		const newsletter = formData.get('newsletter');

		const contactFormSchema = object({
			name: string().min(2).max(64).required(),
			email: string().required().email(),
			phone: string().required(),
			pacient: string().required(),
			diag: string().required(),
			message: string(),
			signup: string().required(),
			newsletter: string()
		});

		try {
			const result = await contactFormSchema.validate(
				{ name, email, phone, pacient, diag, message, signup, newsletter },
				{ abortEarly: false }
			);
			console.log(result);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.152094609=${name}&entry.420958483=${email}&entry.1373482897=${phone}&entry.1337255097=${pacient}&entry.267753659=${diag}&entry.1289678725=${message}&entry.451961774=${signup}&entry.425085744=${newsletter}&submit=Submit`;

			const res = await fetch(prefilledLink);

			if (!res.ok) {
				throw new Error(res.status);
			}

			return {
				success: true,
				status: 'success'
			};
		} catch (error) {
			console.log({ error });

			const errors = error.inner.reduce((acc, err) => {
				return {
					...acc,
					[err.path]: err.message
				};
			}, {});

			return {
				errors,
				name,
				email,
				phone,
				pacient,
				diag,
				message,
				signup,
				newsletter
			};
		}
	}
};
