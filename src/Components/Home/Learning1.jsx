import Study from '../../../public/Study.png'
import Love from '../../../public/Love.png'
import Fun from '../../../public/Fun.png'

const Learning = () => {
    return (
        <div className='bg-orange-100 flex'>
            <div>
                <img src={Study} alt="" />
            </div>
            <div className='my-36'> 
                <div>
                    <h1 className='text-6xl'>
                        Premium <span className='text-orange-500'>Learning</span>
                        Experience
                    </h1>
                </div>
                <div className='flex my-6'>
                    <div>
                        <img src={Love} alt="" />
                   </div>
                    <div>
                        <h6 className='text-xl font-semibold'>Easily Accessible</h6>
                        <p>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>
                <div className='flex my-6'>
                    <div>
                        <img src={Fun} alt="" />
                   </div>
                    <div>
                        <h6 className='text-xl font-semibold'>Fun learning expe</h6>
                        <p>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;