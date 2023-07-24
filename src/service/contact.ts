import { EmailData } from './email';

export default async function sendContactEmail(email: EmailData) {
    const respose = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await respose.json();
    if (!respose.ok) {
        throw new Error(data.message || 'Something went wrong;;');
    }
    return data;
}
