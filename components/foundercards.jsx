// import React from 'react';
// import Link from 'next/link'
// import Image from 'next/image'
// import "../public/pp.png"

// const FounderCards = ({image,title,description,links}) => {
//   return (
//     <div>
//         <div className='flex flex-row justify-between gap-4'>
//             <Image src="/pp.png" width={25} height={10}></Image>
//         </div>
//     </div>
//   );
// };

// export default FounderCards;
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const FounderCards = ({image, title, description, name}) => {
  return (
    <div className="flex flex-col bg-light-green border-[1px] border-darkish-green p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image src={image} width={60} height={50} className="rounded-full ml-2" />
        <div className='flex-grow'>
        <h2 className="text-lg font-bold flex-grow text-center text-navy-blue">{name}</h2>
        <h3 className="text-md font text-center text-navy-blue">{title}</h3>
        </div>
      </div>
      <div className="text-center mb-2">
        {/* <h3 className="text-lg font-semibold">{title}</h3> */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FounderCards;
