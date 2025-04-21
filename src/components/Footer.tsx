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
                <img src="/images/aaryaniverse.png" className="h-44 relative bottom-10" alt="" />
            <p className='font-bold text-xs md:text-lg relative bottom-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-800 poppins-medium'>© Aaryaniverse - All Rights Reserved</p>
            </div>
        </>
    );
}