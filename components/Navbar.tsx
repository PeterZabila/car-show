import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface Props {
    
}

export const Navbar = (props: Props) => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo1.svg"
                        width="118" height="45" alt="CarRental"
                        className="object-contain"
                    />
                </Link>
                <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border-2 border-gray-300"
                />
            </nav>
        </header>
    )
}

export default Navbar;
