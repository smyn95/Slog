'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './banner';

type Form = {
    from: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<Form>({
        from: '',
        subject: '',
        message: ''
    });
    const [banner, setBanner] = useState<BannerData | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        setBanner({ message: '성공했어!!', state: 'success' });
        setTimeout(() => {
            setBanner(null);
        }, 3000);
    };

    return (
        <section className="w-full max-w-md">
            {banner && <Banner banner={banner} />}
            <form onSubmit={onSubmit} className="flex flex-col w-full gap-2 p-4 my-4 bg-slate-700 rounded-xl">
                <label htmlFor="from" className="font-semibold text-white">
                    Your Email
                </label>
                <input type="email" id="from" name="from" required autoFocus value={form.from} onChange={onChange} />
                <label htmlFor="subject" className="font-semibold text-white">
                    Subject
                </label>
                <input type="text" id="subject" name="subject" required value={form.subject} onChange={onChange} />
                <label htmlFor="message" className="font-semibold text-white">
                    Message
                </label>
                <textarea
                    rows={10}
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={onChange}
                    className="text-black"
                />
                <button className="font-bold text-black bg-yellow-300 hover:bg-yellow-400">Submit</button>
            </form>
        </section>
    );
}
