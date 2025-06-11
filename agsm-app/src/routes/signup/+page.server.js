import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		// Google Forms ID
		const formID = '1FAIpQLSdWkLJjObtTNGetBwAuf2qYn0NN-NG2pCVkenmDr5n496zfTA';

		// Dev
		// https://docs.google.com/forms/d/e/1FAIpQLSfDaf5wkLJUB0aZ1rx1y5Y2_Jql6McrUyiwsG0OlE2TKBl9QQ/viewform?usp=pp_url&entry.1536538594=teste&entry.997902913=teste@teste.com&entry.1893985325=1199999999&entry.1495297541=teste&entry.790082354=teste&entry.2029154751=teste&entry.109521389=teste

		// Prod
		// https://docs.google.com/forms/d/e/1FAIpQLSdWkLJjObtTNGetBwAuf2qYn0NN-NG2pCVkenmDr5n496zfTA/viewform?usp=pp_url&entry.544352314=Henrique&entry.211610117=henrique@hsarhan.com&entry.1704576544=11982755125&entry.479442006=Eu&entry.342448012=Ansiedade&entry.45939889=N%C3%A3o&entry.715751894=Teste...

		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const pacient = formData.get('pacient');
		const diag = formData.get('diag');
		const other = formData.get('other');
		const message = formData.get('message');
		const signup = formData.get('signup');

		const signUpFormSchema = object({
			name: string().min(2).max(64).required('Preencha com seu nome'),
			email: string().required('Preencha com um email válido').email(),
			phone: string().required('Preencha com seu telefone'),
			pacient: string().required('Selecione o paciente'),
			diag: string().required('Escolha um diagnóstico'),
			other: string().nullable(),
			message: string()
		});

		try {
			const result = await signUpFormSchema.validate(
				{ name, email, phone, pacient, diag, other, message },
				{ abortEarly: false }
			);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.544352314=${name}&entry.211610117=${email}&entry.1704576544=${phone}&entry.479442006=${pacient}&entry.342448012=${diag}&entry.45939889=${other}&entry.715751894=${message}&submit=Submit`;

			const res = await fetch(prefilledLink);
			// Inputs to DataBase

			return {
				success: true,
				status:
					'<span class="text-secondary-500 dark:text-success-500 font-bold">Dados enviados com sucesso.</span><br/>Agora é só aguardar nosso contato. A GENTE se fala em breve!'
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
				other,
				message,
				signup
			};
		}
	}
};
