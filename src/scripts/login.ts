interface FormData {
    name: string;
    email: string;
    cpf: string;
    number: string;
    date: string;
    login: string;
    password: string;
}

export function saveFormData(formData: FormData): void {
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form data saved to localStorage.');
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
