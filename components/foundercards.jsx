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
      <div className="flex justify-center mb-4">
        <Image src={image} width={100} height={100} className="rounded-full" />
      </div>
      <div className="text-center mb-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FounderCards;
