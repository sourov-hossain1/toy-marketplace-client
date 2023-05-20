import './Body.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Body = () => {
    return (
        <div>
            <div className='banner-section'>
                <div className='left-banner'>
                    <h2 className='banner-title'>A New Box of <br /> Toys Every Month</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit inventore sequi maiores ipsam, nam ratione itaque hic adipisci. Molestias?</h4>
                    <button className='bg-primary text-white p-2 rounded-md mt-4'>Get Your Toys</button>
                </div>
                <div className='right-banner'>
                    <img src="" alt="" />
                </div>
            </div>
            {/* gallery section */}
            <h3 className='text-center font-bold text-[40px] mt-4 mb-2'>Gallery Section</h3>
            <div className='flex gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[220px]' src="https://marveltoynews.com/wp-content/uploads/2016/05/Marvel-Legends-Civil-War-Spider-Man-Photo-Hi-Res.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[220px]' src="https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/e0ac67d423a749c48a43a178d4e0fdae_Large.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XM1DePVAtoMouvoxnFwUnLHyJuFW72ZYrg&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* shop by category */}
            <h3 className='text-center font-bold text-[40px] mt-4 mb-2'>Shop by Category</h3>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Marvel</Tab>
                        <Tab>Spider Man</Tab>
                        <Tab>Robot</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='panel-one'>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-72' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XM1DePVAtoMouvoxnFwUnLHyJuFW72ZYrg&usqp=CAU" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Marvel</h2>
                                    <p>Price: 120$ <br /> Rating: 4.5 </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-72' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XM1DePVAtoMouvoxnFwUnLHyJuFW72ZYrg&usqp=CAU" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Marvel</h2>
                                    <p>Price: 220$ <br /> Rating: 4.5 </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='panel-one'>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-[287px] h-[268px]' src="https://marveltoynews.com/wp-content/uploads/2016/05/Marvel-Legends-Civil-War-Spider-Man-Photo-Hi-Res.jpg" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Spider Man</h2>
                                    <p>Price: 220$ <br /> Rating: 4.5 </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-[287px] h-[268px]' src="https://marveltoynews.com/wp-content/uploads/2016/05/Marvel-Legends-Civil-War-Spider-Man-Photo-Hi-Res.jpg" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Spider Man</h2>
                                    <p>Price: 94$ <br /> Rating: 4.5 </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='panel-one'>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-72' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XM1DePVAtoMouvoxnFwUnLHyJuFW72ZYrg&usqp=CAU" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Robot</h2>
                                    <p>Price: 320$ <br /> Rating: 4.5 </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-[287px] h-[267px]' src="https://marveltoynews.com/wp-content/uploads/2016/05/Marvel-Legends-Civil-War-Spider-Man-Photo-Hi-Res.jpg" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Robot</h2>
                                    <p>Price: 420$ <br /> Rating: 4.5 </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Body;