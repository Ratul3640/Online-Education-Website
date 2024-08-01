import balp from '../../../public/balp.png'
import stand from '../../../public/stand.png'
import Student from '../../../public/Student.png'
import Student2 from '../../../public/Student2.png'
import Student3 from '../../../public/Student3.png'
import rating from '../../../public/rating.png'
import tk from '../../../public/tk.png'
import time from '../../../public/time.png'

const Tracks = () => {
    return (
        <>
            <div className="flex justify-between w-full">
                <div>
                    <img src={balp} alt="" />
                </div>
                <div>
                    <img src={stand} alt="" />
                </div>
            </div>

            <div className='-mt-36'>
                <h1 className='text-6xl font-bold my-2'>Our Tracks</h1>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

            <div className='my-16 flex gap-4'>
                <div >
                    <div>
                        <img src={Student} alt="" />
                  </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <h5>UI/UX Design</h5>
                        </div>
                        <div>
                            <img src={rating} alt="" />
                        </div>

                    </div>
                    <div className='my-2'>
                        <img src={tk} alt="" />
                    </div>
                    <hr />
                    <div>
                        <img src={time} alt="" />
                    </div>
                    <button className='btn bg-orange-500 rounded-lg'>Join Course</button>
                </div>
                <div >
                    <div>
                        <img src={Student2} alt="" />
                  </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <h5>UI/UX Design</h5>
                        </div>
                        <div>
                            <img src={rating} alt="" />
                        </div>

                    </div>
                    <div className='my-2'>
                        <img src={tk} alt="" />
                    </div>
                    <hr />
                    <div>
                        <img src={time} alt="" />
                    </div>
                    <button className='btn bg-orange-500 rounded-lg'>Join Course</button>
                </div>
                <div >
                    <div>
                        <img src={Student3} alt="" />
                  </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <h5>UI/UX Design</h5>
                        </div>
                        <div>
                            <img src={rating} alt="" />
                        </div>

                    </div>
                    <div className='my-2'>
                        <img src={tk} alt="" />
                    </div>
                    <hr />
                    <div>
                        <img src={time} alt="" />
                    </div>
                    <button className='btn bg-orange-500 rounded-lg'>Join Course</button>
                </div>
           </div>
        </>
    );
};

export default Tracks;












 