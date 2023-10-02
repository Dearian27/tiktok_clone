import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchName = (event: {target: {value: string}}) => {

  }

  return (
    <>
      <header id="TopNav" className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]">
        <div className={`flex items-center justify-between mx-auto gap-6 w-full px-4 ${pathname == '/' ? 'max-w-[1150px]' : ''}`}>
          <Link href={'/'}>
            <img className="min-w[115px] w-[115px]" src="/images/tiktok-logo.png" alt="tiktok logo" />
          </Link>
        
          <div className="relative hidden md:flex items-center justify-end bg-[#F1F1F2] p-1 rounded-full max-w-[430px] w-full">
            <input type="text" onChange={handleSearchName} 
              className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
              placeholder="Search accounts"
            />

            <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
              <div className="p-1">
                <Link href={`profile/1`}
                  className="flex items-center justify-between w-full cursor-pointer hover:bd-[#F12B56] p-1 px-2 hover: text-white"
                >
                  <div className="flex items-center">
                    <img className="rounded-md" width={'40'} src="https://placehold.co/600x400" alt="tiktok" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}