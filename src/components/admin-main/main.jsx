
import React from 'react';
import Line from '../../components/charts/linechart/line';
import Cards from '../../components/admin-sale-cards/cards';
import Options from '../../components/options/options';


// Emoji component
const Emoji = ({ symbol, label }) => (
  <span role="img" aria-label={label} className="text-3xl">
    {symbol}
  </span>
);

// Rectangles component (assuming it's in Rectangles.js)
const Rectangles = ({ rectangles }) => (
    <div>
    {rectangles && rectangles.map((rect, index) => (
      <div key={index} className={`bg-${rect.color} h-16 w-${rect.width} m-2`} />
    ))}
  </div>
);

const Main = () => {
  // Assuming you have a function to fetch rectangles data
  const fetchRectangles = () => {
  
  
    const rectanglesData = [
      { color: 'blue', percent: '50' },
      { color: 'green', percent: '45' },
      { color: 'red', percent: '67'},
    ];
  
    return rectanglesData;
  };
  

  const emojis = [
    { symbol: '😊', label: 'Happy' },
    { symbol: '😢', label: 'Sad' },
    { symbol: '🤪', label: 'Crazy' },
  ];

  const rectanglesData = fetchRectangles(); // Fetch rectangles data

  return (
    <div className="p-6 mb-6  bg-slate-200 min-h-screen">
      <div className="">
        <Options />
      </div>

      <div className=""><Cards /></div>
      <div className="flex gap-4 flex-wrap">
        <div className="p-6 w-full my-4 lg:w-[164%] bg-white rounded-xl">
          <div className="ext-zinc-900 text-base font-medium leading-normal mb-8">
            ANALYSIS
            <div>
              <div className="relative inline-block ">
                <select className="block ml-96  appearance-none  bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-xl leading-tight focus:outline-none focus:border-blue-500">
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12.449l-6.823-6.823a1 1 0 011.414-1.414L10 9.622l5.409-5.41a1 1 0 111.414 1.414L11.414 12.45a1 1 0 01-1.414 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        
       
     
<div className="flex items-center gap-1">
  <div className="flex items-center gap-20 ">
    {emojis.map((emoji, index) => (
      <Emoji key={index} symbol={emoji.symbol} label={emoji.label}  />
    ))}
  </div>
  <Rectangles rectangles={rectanglesData} />
  <Line  />

  <div className='flex flex-col space-y-4  '>
  <div className="flex-col">
    <button className="bg-blue-500 text-white hover:bg-fuchsia-500 rounded-full px-4 py-2">Amount of Visitors</button>
  </div>
  <div className="flex-col">
    <button className="bg-green-500 rounded-full px-7 py-2 hover:bg-pink-600 text-white">Male VS Female</button>
  </div>
  <div className="flex-col">
    <button className="bg-pink-500 text-white  hover:bg-orange-400 rounded-full px-12 py-2">Avg Age</button>
  </div>
</div>

  
</div>

        </div>
      
      </div>
    </div>
  );
};

export default Main;
