import image from '.././assets/logo.png'

const Team = () => {

    return (
        <div className=''>
            <h1 className='lg:text-4xl text-2xl uppercase font-bold pt-10 md:py-20 py-10 text-sky-950 text-center'>Meet Our Team</h1>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-5 mb-20 text-center'>
                <div className='mx-auto'>
                    <img src={image} alt="" className='w-32 h-32 rounded-full' />
                    <h1 className=' font-bold'>Md. AmukTomuk</h1>
                    <h2 className=''>Team Leader</h2>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" className='w-32 h-32 rounded-full' />
                    <h1 className='font-bold'>Md. AmukTomuk</h1>
                    <h2 className=''>Team Leader</h2>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" className='w-32 h-32 rounded-full' />
                    <h1 className='font-bold'>Md. AmukTomuk</h1>
                    <h2 className=''>Team Leader</h2>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" className='w-32 h-32 rounded-full' />
                    <h1 className='font-bold'>Md. AmukTomuk</h1>
                    <h2 className=''>Team Leader</h2>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" className='w-32 h-32 rounded-full' />
                    <h1 className='font-bold'>Md. AmukTomuk</h1>
                    <h2 className=''>Team Leader</h2>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" className='w-32 h-32 rounded-full' />
                    <h1 className='font-bold'>Md. AmukTomuk</h1>
                    <h2 className=''>Team Leader</h2>
                </div>
            </div>
        </div>
    );
};

export default Team;