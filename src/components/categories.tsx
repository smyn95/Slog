type Props = {
    categories: string[];
    selected: string;
    onclick: (category: string) => void;
};

export default function Categories({ categories, selected, onclick }: Props) {
    return (
        <section className="p-4 text-center">
            <h2 className="text-lg font-bold border-b border-sky-500">카테고리</h2>
            <ul className="flex flex-col gap-3 pt-4 mb-5 text-base">
                {categories.map((category) => (
                    <li
                        className={`cursor-pointer bg-gray-100 min-w-[100px] h-8 flex justify-center items-center rounded-xl font-bold hover:text-[#12b886] ${
                            category === selected && 'text-white bg-green-500'
                        }`}
                        key={category}
                        onClick={() => onclick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
}
