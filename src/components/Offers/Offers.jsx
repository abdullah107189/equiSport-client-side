
const offers = [
    {
        title: "Sports Season Sale",
        discount: "20% - 50% Off",
        description: "Enjoy huge discounts on your favorite sports gear this season!",
    },
    {
        title: "Friends & Family Day",
        discount: "30% Off",
        description: "Bring your loved ones and enjoy special discounts together!",
    },
    {
        title: "Buy 1, Get 1 Free",
        discount: "BOGO Offer",
        description: "Buy one product and get another one for free!",
    },
    {
        title: "Loyalty Program",
        discount: "Earn Points",
        description: "Collect points on every purchase and redeem them for discounts!",
    },
    {
        title: "New Product Launch Offer",
        discount: "15% Off",
        description: "Celebrate our new arrivals with a special discount!",
    },
];

const Offers = () => {
    return (

        <div className="md:pt-20 py-5 bg-cover bg-center " id="offers">
            <h1 className="md:text-5xl text-2xl text-center md:pb-10 pb-5 font-bold">Offers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offers.map((offer, index) => (
                    <div key={index} className="bg-white dark:bg-gray-200/10 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transform duration-300">
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-semibold dark:text-white text-gray-800">{offer.title}</h3>
                            <p className="text-lg text-green-600 font-bold mt-2">{offer.discount}</p>
                            <p className="text-gray-600 mt-4 dark:text-white">{offer.description}</p>
                        </div>
                        <div className="actionBtn text-center w-1/2 mx-auto mb-3">
                            <button className="font-semibold ">Grab Now!</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offers;