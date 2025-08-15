import Link from 'next/link';

export default function Dropdown2() {
  return (
    <div className="bg-white border rounded-[15px] shadow-lg p-4 w-[169px]">
      <ul className="text-black font-bold text-[20px] justify-center text-center">
        <p className="text-white">hide</p>
        <li className="py-1 hover:text-blue-500 cursor-pointer">
          <Link href="/IMUN">Indonesia Model United Nations</Link>
        </li>
        <hr className="border-t-3 border-gray-300 w-full"/>
        <li className="py-1 hover:text-blue-500 cursor-pointer">
          <Link href="/HIMUN">High School Model United Nations</Link>
        </li>
        <hr className="border-t-3 border-gray-300 w-full"/>
        <li className="py-1 hover:text-blue-500 cursor-pointer">
          <Link href="/InternationalDelegations">International Delegations</Link>
        </li>
        <hr className="border-t-3 border-gray-300 w-full"/>
        <li className="py-1 hover:text-blue-500 cursor-pointer">General Training</li>
      </ul>
    </div>
  );
}