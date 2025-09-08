import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		// Google Forms ID
		const formID = '1FAIpQLSdWkLJjObtTNGetBwAuf2qYn0NN-NG2pCVkenmDr5n496zfTA';

		// Dev
		// https://docs.google.com/forms/d/e/1FAIpQLSfDaf5wkLJUB0aZ1rx1y5Y2_Jql6McrUyiwsG0OlE2TKBl9QQ/viewform?usp=pp_url&entry.1536538594=teste&entry.997902913=teste@teste.com&entry.1893985325=1199999999&entry.1495297541=teste&entry.790082354=teste&entry.2029154751=teste&entry.109521389=teste

		// Prod
		// https://docs.google.com/forms/d/e/1FAIpQLSdWkLJjObtTNGetBwAuf2qYn0NN-NG2pCVkenmDr5n496zfTA/viewform?usp=pp_url&entry.544352314=teste&entry.211610117=teste&entry.1704576544=teste&entry.1916619026=teste&entry.86828158=BAIRRO&entry.1900841550=testeteste&entry.2112043709=teste&entry.467106416=teste&entry.515294261=teste&entry.867817786=teste&entry.861577843=teste&entry.1594831063=teste&entry.1881987688=teste&entry.185973537=teste&entry.297885512=teste&entry.867613094=teste&entry.479442006=teste&entry.342448012=teste&entry.45939889=teste&entry.715751894=teste

		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const address = formData.get('address');
		const neighborhood = formData.get('neighborhood');
		const city = formData.get('city');
		const state = formData.get('state');
		const zipCode = formData.get('zipCode');
		const cpf = formData.get('cpf');
		const rg = formData.get('rg');
		const rgExp = formData.get('rgExp');
		const country = formData.get('country');
		const birth = formData.get('birth');
		const birthCity = formData.get('birthCity');
		const relationship = formData.get('relationship');
		const occupation = formData.get('occupation');
		const pacient = formData.get('pacient');
		const diag = formData.get('diag');
		const other = formData.get('other');
		const message = formData.get('message');
		const signup = formData.get('signup');

		const signUpFormSchema = object({
			name: string().min(2).max(64).required('Preencha com seu nome'),
			email: string().required('Preencha com um email válido').email(),
			phone: string().required('Preencha com seu telefone'),
			address: string().required('Preencha com seu endereço'),
			city: string().required('Preencha com sua cidade'),
			neighborhood: string().required('Preencha com seu bairro'),
			state: string().required('Preencha com seu estado'),
			zipCode: string().required('Preencha com seu CEP'),
			cpf: string().required('Preencha com seu CPF'),
			rg: string().required('Preencha com seu RG'),
			rgExp: string().required('Preencha com o órgão expedidor'),
			country: string().required('Preencha com seu País'),
			birth: string().required('Preencha com sua data de nascimento'),
			birthCity: string().required('Preencha com o local de nascimento'),
			relationship: string().required('Preencha com seu estado civil'),
			occupation: string().required('Preencha com sua ocupação'),
			pacient: string().required('Selecione o paciente'),
			diag: string().required('Escolha um diagnóstico'),
			other: string().nullable(),
			message: string()
		});

		try {
			const result = await signUpFormSchema.validate(
				{
					name,
					email,
					phone,
					address,
					city,
					neighborhood,
					state,
					zipCode,
					cpf,
					rg,
					rgExp,
					country,
					birth,
					birthCity,
					relationship,
					occupation,
					pacient,
					diag,
					other,
					message
				},
				{ abortEarly: false }
			);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.544352314=${name}&entry.211610117=${email}&entry.1704576544=${phone}&entry.1916619026=${address}&entry.86828158=${neighborhood}&entry.1900841550=${city}&entry.2112043709=${state}&entry.467106416=${zipCode}&entry.515294261=${cpf}&entry.867817786=${rg}&entry.861577843=${rgExp}&entry.1594831063=${country}&entry.1881987688=${birth}&entry.185973537=${birthCity}&entry.297885512=${relationship}&entry.867613094=${occupation}&entry.479442006=${pacient}&entry.342448012=${diag}&entry.45939889=${other}&entry.715751894=${message}&submit=Submit`;

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
				address,
				city,
				neighborhood,
				state,
				zipCode,
				cpf,
				rg,
				rgExp,
				country,
				birth,
				birthCity,
				relationship,
				occupation,
				pacient,
				diag,
				other,
				message,
				signup
			};
		}
	}
};
