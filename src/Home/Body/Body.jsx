import './Body.css'
const Body = () => {
    return (
        <div className='banner-section'>
            <div className='left-banner'>
                <h2 className='banner-title'>A New Box of <br /> Toys Every Month</h2> 
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit inventore sequi maiores ipsam, nam ratione itaque hic adipisci. Molestias?</h4>
                <button className='bg-primary text-white p-2 rounded-md mt-4'>Get Your Toys</button>
            </div>
            <div className='right-banner'>
                <img src="https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/e0ac67d423a749c48a43a178d4e0fdae_Large.jpg" alt="" />
            </div>
        </div>
    );
};

export default Body;