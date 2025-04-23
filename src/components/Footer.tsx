import Link from "next/link";
export default function Footer(){
    return(
        <>
            <div className='flex flex-col h-56 md:flex-row md:justify-evenly justify-start items-center md:gap-x-60 pt-5 overflow-hidden bg-black'
                      style={{
                        backgroundImage: `url('images/footer.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
            >
                <Link href="/" className="hover:cursor-pointer"><img src="/images/aaryaniverse.png" className="h-44 relative bottom-10 hover:drop-shadow-[0_0_30px_rgba(103,232,249,0.9)] transition-all duration-300" alt=""/></Link>
            <p className='font-bold text-xs md:text-lg relative bottom-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-800 poppins-medium'>© Aaryaniverse - All Rights Reserved</p>
            </div>
        </>
    );
}