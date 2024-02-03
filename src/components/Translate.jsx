import { useState } from "preact/hooks";

export default function TranslateIsle() {
    const [language, setLanguage] = useState(true);
    
    return (
        <>
            <div
                id="button-language"
                onClick={() => setLanguage(!language)}
                class="absolute w-16 top-16 right-4 flex gap-2 items-center justify-between border rounded-full px-2 py-1 cursor-pointer hover:border-orange-300 hover:text-orange-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-world"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                {language && <span class="text-sm select-none">ES</span>}
                {!language && <span class="text-sm select-none">EN</span>}
            </div>
        </>
    );
}
