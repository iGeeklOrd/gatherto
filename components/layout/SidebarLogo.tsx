import { useRouter } from "next/router";

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/')} className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition">
            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>.To</span>            
        </div>
    )
};

export default SidebarLogo;