import Teacher from '../../../public/Teacher.png'
import engineer from '../../../public/engineer.png'
import linkin from '../../../public/linkin.png'
import instagram from '../../../public/instagram.png'

const Teachers = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="text-center font-semibold text-6xl"> Our Teachers</h1>
                    <p className="my-4">Lorem Ipsum is simply dummy text of the printing. </p>
                </div>

            </div>
            <div className='flex gap-4 '>
                <div >
                    <div>
                        <img src={Teacher} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold my-2"> Matthew E. McNatt</h1>
                        <p className="text-gray-400">Professor @George Brown College</p>
                        <p className="text-gray-400 my-2"> Ut enim ad minim veniam, quis nost exercitation
                            ullamco laboris nisi ut allquip ex commodo.</p>
                    </div>
                    <div className="flex my-2 justify-between">
                        <div>
                            <img src={engineer} alt="" />

                        </div>
                        <div className="flex gap-4">
                            <div>
                                <img src={linkin} alt="" />
                            </div>
                            <div>
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div>
                        <img src={Teacher} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold my-2"> Matthew E. McNatt</h1>
                        <p className="text-gray-400">Professor @George Brown College</p>
                        <p className="text-gray-400 my-2"> Ut enim ad minim veniam, quis nost exercitation
                            ullamco laboris nisi ut allquip ex commodo.</p>
                    </div>
                    <div className="flex my-2 justify-between">
                        <div>
                            <img src={engineer} alt="" />

                        </div>
                        <div className="flex gap-4">
                            <div>
                                <img src={linkin} alt="" />
                            </div>
                            <div>
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div>
                        <img src={Teacher} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold my-2"> Matthew E. McNatt</h1>
                        <p className="text-gray-400">Professor @George Brown College</p>
                        <p className="text-gray-400 my-2"> Ut enim ad minim veniam, quis nost exercitation
                            ullamco laboris nisi ut allquip ex commodo.</p>
                    </div>
                    <div className="flex my-2 justify-between">
                        <div>
                            <img src={engineer} alt="" />

                        </div>
                        <div className="flex gap-4">
                            <div>
                                <img src={linkin} alt="" />
                            </div>
                            <div>
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

        </>
    );
};

export default Teachers;