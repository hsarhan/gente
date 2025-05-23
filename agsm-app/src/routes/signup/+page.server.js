import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		// Google Forms ID
		const formID = '1FAIpQLSfDaf5wkLJUB0aZ1rx1y5Y2_Jql6McrUyiwsG0OlE2TKBl9QQ';

		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const pacient = formData.get('pacient');
		const diag = formData.get('diag');
		const message = formData.get('message');
		const signup = formData.get('signup');

		const signUpFormSchema = object({
			name: string().min(2).max(64).required('Preencha com seu nome'),
			email: string().required('Preencha com um email válido').email(),
			phone: string().required('Preencha com seu telefone'),
			pacient: string().required('Selecione o paciente'),
			diag: string().required('Escolha um diagnóstico'),
			message: string()
		});

		try {
			const result = await signUpFormSchema.validate(
				{ name, email, phone, pacient, diag, message },
				{ abortEarly: false }
			);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.1536538594=${name}&entry.997902913=${email}&entry.1893985325=${phone}&entry.1495297541=${pacient}&entry.790082354=${diag}&entry.109521389=${message}&submit=Submit`;

			const res = await fetch(prefilledLink);
			// Inputs to DataBase

			return {
				success: true,
				status:
					'<span class="text-secondary-500 dark:text-success-500 font-bold">Dados enviados com sucesso.</span><br/>Agora é só aguardar nosso contato. Até breve!'
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
				signup
			};
		}
	}
};
