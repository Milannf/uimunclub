
import { Josefin_Sans } from 'next/font/google';

type DescriptionsProps = {
  children: React.ReactNode;
};

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
});


export default function Descriptions({ children }: DescriptionsProps){
    return(
        <div className="bg-white h-auto w-[95vw] sm:w-[500px] md:w-[500px] flex justify-center items-center rounded-[50px] border-4 border-black">
            <h1 className={`${josefinSans.className} text-black font-bold text-[14px] text-justify m-5`}>{children}</h1>
        </div>
    )

}