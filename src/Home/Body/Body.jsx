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
                    <img src="https://hips.hearstapps.com/hmg-prod/images/index-mcu-2-1668177134.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*" alt="" />
                </div>
            </div>
            {/* gallery section */}
            <h3 className='text-center font-bold text-[35px] mt-[30px] mb-2'>Gallery of Toys</h3>
            <div className='gallery-section'>
                <div className='g-one bg-base-100 shadow-xl'>
                    <img src="https://i.ytimg.com/vi/DpQdJl6c0UU/maxresdefault.jpg" alt="" />
                </div>
                <div className='g-one bg-base-100 shadow-xl'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-mrlMN9r5aiXMX5tFIQ8tYePRm9pME_9ag&usqp=CAU" alt="" />
                </div>
                <div className='g-one bg-base-100 shadow-xl'>
                    <img src="https://i.pinimg.com/originals/7e/0e/4e/7e0e4e60f79264bb16c335082f76dc76.jpg" alt="" />
                </div>
                <div className='g-one bg-base-100 shadow-xl'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-mrlMN9r5aiXMX5tFIQ8tYePRm9pME_9ag&usqp=CAU" alt="" />
                </div>
                <div className='g-one bg-base-100 shadow-xl'>
                    <img src="https://www.laughingplace.com/w/wp-content/uploads/2022/06/hasbro-marvel-legends-thor-love-and-thunder-shopdisney.jpeg" alt="" />
                </div>
                <div className='g-one bg-base-100 shadow-xl'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtP_GNAL57oti-rEoAa-bbuw5UhRDHMXc1w&usqp=CAU" alt="" />
                </div>
            </div>
           
            {/* shop by category */}
            <h3 className='text-center font-bold text-[35px] mt-[32px] mb-2'>Shop by Category</h3>
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

            {/* extra section */}
            <h3 className='text-center font-bold text-[35px] mt-[32px] mb-2'>Ordinary Toys</h3>
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

            {/* extra part */}
            <h2 className='text-center font-bold text-[35px] mt-[32px] mb-2'>AI Based Toy</h2>
            <div className='extra-part-two'>
                <div>
                    <img className='rounded-md' src="https://techcrunch.com/wp-content/uploads/2023/01/Little-Robots-collage-1-e1673991425721.jpeg?w=1024" alt="" />
                </div>
                <div className='my-auto'>
                   <h2 className='font-bold text-[23px] text-center'>AI Toys</h2>
                   <h4 className='ps-4'>AI toys are interactive toys that incorporate artificial intelligence technology to provide engaging and educational experiences for children. These toys often use machine learning algorithms and voice recognition to respond to commands or questions from children. They can engage in conversations, play games, teach various subjects, and even adapt their responses based on the child interactions. AI toys help promote cognitive development, problem-solving skills, and creativity in children while offering a fun and interactive playtime experience.</h4>
                   <button className='btn btn-primary ms-4 mt-4'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Body;