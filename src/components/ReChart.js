import React from 'react'
import { PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";
import { LineChart, Line, AreaChart, Area } from 'recharts';
const ReCharts = () => {
    const data = [
        { name: "Facebook", users: 2000000000 },
        { name: "Instagram", users: 1500000000 },
        { name: "Twiter", users: 1000000000 },
        { name: "Telegram", users: 500000000 },
    ];
    const data2 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },

    ];

    // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className='w-full  flex flex-col'>
            <div className='flex w-full justify-center items-center font-display font-semibold text-5xl py-4'><h1>Data</h1></div>

            <div className='flex w-full h-full flex-col lg:flex-row justify-center items-center'>
                {/* Pie Chart */}
                <div className="flex w-full lg:w-1/2  justify-center items-center">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="users"
                            isAnimationActive={false}
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#1D7DEA"
                            label
                        />


                        <Tooltip />
                    </PieChart>

                </div>



                {/* Barchart */}
                <div className='flex w-full lg:w-1/2 justify-center items-center'>
                    <BarChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 80, bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="users" fill="#1D7DEA" background={{ fill: "#eee" }} />
                    </BarChart>
                </div>

            </div>


            <div className="flex w-full h-full flex-col lg:flex-row justify-center items-center">
                {/* <ResponsiveContainer width="100%" height="100%"> */}

                <div className='flex w-full lg:w-1/2'>
                    <LineChart width={400} height={400} data={data2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} angle={30} dx={20} />
                        <YAxis />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#1D7DEA" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className='flex w-full lg:w-1/2'>
                    <AreaChart
                        width={400}
                        height={400}
                        data={data2}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#1D7DEA" fill="#1D7DEA" />
                    </AreaChart>
                </div>
                {/* </ResponsiveContainer> */}
            </div>
        </div>
    )
}

export default ReCharts