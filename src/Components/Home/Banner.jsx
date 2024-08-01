import bag from '../../../public/bag.png'
import search from '../../../public/search.png'
import Pc from '../../../public/Pc.png'
import Text from '../../../public/Text.png'
import exam from '../../../public/exam.png'

const Banner = () => {
    return (
        <>
            <div className='flex mt-20 w-full  bg-orange-100'>
                <div>
                    <div className='py-4'>
                        <h1 className='text-4xl font-bold'>The <span className='text-orange-500'>Smart</span> <br />
                            Choice For <span className='text-orange-500'>Future</span>
                        </h1>
                    </div>
                    <div >
                        <p >Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
                    </div>
                    <div className='my-6 gap-2 flex justify-center items-center'>
                        <div>
                            <input className='bg-slate-200 px-3 rounded-lg py-2' type="text" placeholder='Search for a location...' />
                        </div>
                        <div> <img src={search} alt="" /></div>
                    </div>

                </div>
                <div className='h-[600px] '>
                    <img className=' w-[1800px] object-cover' src={bag} alt="" />
                </div>


            </div>
            <div className='h-[20vh] justify-around rounded gap-2 w-2/3 mx-auto bg-indigo-900 flex my-20'>
                <div className=' flex items-center py-14 gap-2'>
                    <div className='bg-'>
                        <img src={Pc} alt="" />
                    </div>
                    <div className='text-white '>
                        <h5 className='text-xl font-bold'>Learn The Latest Skills</h5>
                        <p className='text-[0.6rem]'>Contrary to popular belief, Lorem Ipsum is <br /> not simply random text
                            BC, making it over 2000 years old.</p>
                    </div>
                    
                </div>
                <div className='flex items-center py-14 gap-2'>
                    <div>
                        <img src={Text} alt="" />
                    </div>
                    <div className='text-white '>
                        <h5 className='text-xl font-bold'>Get Ready For a Career</h5>
                        <p className='text-[0.6rem]'>Contrary to popular belief, Lorem Ipsum is <br /> not simply random text
                            BC, making it over 2000 years old.</p>
                    </div>
                    
                </div>
                <div className='flex items-center py-14 gap-2'>
                    <div>
                        <img src={exam} alt="" />
                    </div>
                    <div className='text-white '>
                        <h5 className='text-xl font-bold'>Earn a Certificate</h5>
                        <p className='text-[0.6rem]'>Contrary to popular belief, Lorem Ipsum is <br /> not simply random text
                            BC, making it over 2000 years old.</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Banner;