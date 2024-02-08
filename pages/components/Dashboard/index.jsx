const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col flex-start p-20 w-screen h-screen gap-10 bg-gray-50">
                <div className="flex flex-col flex-start w-full gap-10">
                    <div className="font-bold text-xl text-gray-800">Orders</div>
                    <div className="flex justify-around items-center w-full gap-10">
                        <div className="w-full bg-white p-5 drop-shadow-md text-center">
                            <p className="font-semibold text-sm">TODAY</p>
                            <h2 className="font-bold text-3xl text-blue-900">2</h2>
                            <p className="text-sm font-thin">2 orders today</p>
                        </div>
                        <div className="w-full bg-white p-5 drop-shadow-md text-center">
                            <p className="font-semibold text-sm">THIS WEEK</p>
                            <h2 className="font-bold text-3xl text-blue-900">25</h2>
                            <p className="text-sm font-thin">25 orders this week</p>
                        </div>
                        <div className="w-full bg-white p-5 drop-shadow-md text-center">
                            <p className="font-semibold text-sm">THIS MONTH</p>
                            <h2 className="font-bold text-3xl text-blue-900">32</h2>
                            <p className="text-sm font-thin">32 orders this month</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-start w-full gap-10">
                    <div className="font-bold text-xl text-gray-800">Revenue</div>
                    <div className="flex justify-around items-center w-full gap-10">
                        <div className="w-full bg-white p-5 drop-shadow-md text-center">
                            <p className="font-semibold text-sm">TODAY</p>
                            <h2 className="font-bold text-3xl text-blue-900">$ 85 765</h2>
                            <p className="text-sm font-thin">2 orders today</p>
                        </div>
                        <div className="w-full bg-white p-5 drop-shadow-md text-center">
                            <p className="font-semibold text-sm">THIS WEEK</p>
                            <h2 className="font-bold text-3xl text-blue-900">$ 226 600</h2>
                            <p className="text-sm font-thin">25 orders this week</p>
                        </div>
                        <div className="w-full bg-white p-5 drop-shadow-md text-center">
                            <p className="font-semibold text-sm">THIS MONTH</p>
                            <h2 className="font-bold text-3xl text-blue-900">$ 230 093</h2>
                            <p className="text-sm font-thin">32 orders this month</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard