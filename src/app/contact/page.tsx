import ContactForm from '@/components/contactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'Email 보내기',
};

const LINKS = [
    { icon: <AiFillGithub />, url: '' },
    { icon: <AiFillLinkedin />, url: '' },
    { icon: <AiFillYoutube />, url: '' }
];

export default function ContactPage() {
    return (
        <section className="flex flex-col items-center">
            <h2 className="my-2 text-3xl font-bold">Contact Me</h2>
            <p>info@dream-coding.com</p>
            <ul className="flex gap-4 my-2">
                {LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-5xl hover:text-yellow-400"
                    >
                        {link.icon}
                    </a>
                ))}
            </ul>
            <h2 className="my-8 text-3xl font-bold">Or Send me an email</h2>
            <ContactForm />
        </section>
    );
}
