interface FormData {
    name: string;
    email: string;
    cpf: string;
    number: string;
    date: string;
    login: string;
    password: string;
}


export function saveFormData(event: Event): void {
    event.preventDefault();

    const nameInput = document.querySelector('#name') as HTMLInputElement | null;
    const emailInput = document.querySelector('#email') as HTMLInputElement | null;
    const cpfInput = document.querySelector('#cpf') as HTMLInputElement | null;
    const numberInput = document.querySelector('#cellphone') as HTMLInputElement | null;
    const dateInput = document.querySelector('#date') as HTMLInputElement | null;
    const loginInput = document.querySelector('#login') as HTMLInputElement | null;
    const passwordInput = document.querySelector('#password') as HTMLInputElement | null;

    if (nameInput && emailInput && cpfInput && numberInput && dateInput && loginInput && passwordInput) {
        const formData: FormData = {
            name: nameInput.value,
            email: emailInput.value,
            cpf: cpfInput.value,
            number: numberInput.value,
            date: dateInput.value,
            login: loginInput.value,
            password: passwordInput.value,
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        console.log('Form data saved to localStorage.');
    } else {
        console.error('One or more input fields were not found.');
    }
}

export async function login(formData: { login: string | number, password: string | number }): Promise<boolean> {
    try {
        const storedData = localStorage.getItem('formData');

        if (storedData) {
            const savedFormData: FormData = JSON.parse(storedData);

            const savedLogin = savedFormData.login.trim().toLowerCase();
            const savedPassword = savedFormData.password.trim();

            console.log('Input Login:', formData.login.toString().trim().toLowerCase());
            console.log('Input Password:', formData.password.toString().trim());
            console.log('Saved Login:', savedLogin);
            console.log('Saved Password:', savedPassword);

            if (formData.login.toString().trim().toLowerCase() === savedLogin && formData.password.toString().trim() === savedPassword) {
                console.log('Login successful!');
                return true;
            } else {
                console.log('Login failed: Invalid credentials.');
                return false;
            }
        } else {
            console.error('Form data not found in localStorage.');
            return false;
        }
    } catch (error) {
        console.error('Error processing login data:', error);
        return false;
    }
}
