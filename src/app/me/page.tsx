import Profile from '@/components/pofile/Page';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function Me() {
    return (
        <>
            <Profile />
            <section className="p-8 m-8 text-center bg-gray-100 shadow-lg">
                <h2 className={TITLE_CLASS}>Who Am I?</h2>
                <p>FE</p>
                <h2 className={TITLE_CLASS}>Career</h2>
                <p>Liche</p>
                <h2 className={TITLE_CLASS}>Skills</h2>
                <p>React</p>
            </section>
        </>
    );
}
