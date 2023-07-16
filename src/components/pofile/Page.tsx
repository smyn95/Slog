import Image from 'next/image';

export default function Profile() {
    return (
        <article className="flex flex-col items-center py-5">
            <Image
                className="object-cover h-48 rounded-full"
                src={'/image/img_smy.png'}
                alt="나의 이미지"
                priority
                width={200}
                height={200}
            />
            <p className="text-lg font-bold">Shin mi yeon</p>
            <p className="text-xs">FE Developer</p>
            <p className="text-xs text-orange-600">개쩌는 개발자 !</p>
        </article>
    );
}
