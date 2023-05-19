import './Body.css'
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
        </div>
    );
};

export default Body;