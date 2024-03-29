import { useState, useEffect } from "preact/hooks";

export default function TranslateIsle() {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => setPathname(window.location.pathname);
        window.addEventListener('popstate', handleLocationChange);
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    const pathnameString = pathname.replaceAll("/", "")
    //console.log(pathnameString)

    function handlePage() {
        if (pathnameString === "en" || pathnameString === "") {
            window.location.href = "/es"
        } else {
            window.location.href = "/en"
        }
    }

    return (
        <>
            <div
                id="button-language"
                onClick={() => handlePage()}
                class="fixed w-14 top-12 bg-black bg-opacity-70 left-4 flex gap-2 items-center justify-between border rounded-full px-2 py-1 cursor-pointer hover:border-orange-300 hover:text-orange-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-world"
                    width="16"
                    height="16"
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
                {pathnameString === "en" && <span class="text-sm select-none">ES</span>}
                {pathnameString === "" && <span class="text-sm select-none">ES</span>}
                {pathnameString === "es" && <span class="text-sm select-none">EN</span>}
            </div>
        </>
    );
}
