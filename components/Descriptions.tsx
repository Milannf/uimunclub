
type DescriptionsProps = {
  children: React.ReactNode;
};


export default function Descriptions({ children }: DescriptionsProps){
    return(
        <div className="bg-white h-[180px] sm:h-[200px] md:h-[200px] w-[90vw] sm:w-[450px] md:w-[450px] flex justify-center items-center rounded-[50px] border-5 border-black">
            <h1 className="text-black text-m">{children}</h1>
        </div>
    )

}