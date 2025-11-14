// import React from 'react';

// function FoodCardSkeleton() {
//   return (
//     <div className="w-[250px] rounded-2xl  bg-white shadow-md overflow-hidden flex flex-col animate-pulse">
//       {/* Image placeholder */}
//       <div className="relative w-full h-[170px] bg-gray-200" />

//       {/* Text placeholder */}
//       <div className="flex flex-1 flex-col p-4 gap-2">
//         <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//         <div className="h-3 bg-gray-300 rounded w-1/2"></div>
//         <div className="flex gap-1 mt-2">
//           <div className="h-3 w-10 bg-gray-300 rounded"></div>
//           <div className="h-3 w-10 bg-gray-300 rounded"></div>
//         </div>
//       </div>

//       {/* Price & buttons placeholder */}
//       <div className="flex items-center justify-between mt-auto p-3">
//         <div className="h-5 w-12 bg-gray-300 rounded"></div>
//         <div className="flex gap-2">
//           <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
//           <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
//           <div className="h-6 w-10 bg-gray-300 rounded"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodCardSkeleton;

import React from 'react';

function FoodCardSkeleton() {
  return (
    <div className="w-[200px] sm:w-[250px] rounded-2xl bg-white shadow-md overflow-hidden flex flex-col  animate-pulse">
      {/* Image placeholder */}
      <div className="relative w-full h-[150px] sm:h-[170px] bg-gray-200" />

      {/* Text placeholder */}
      <div className="flex flex-1 flex-col p-4 gap-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="flex gap-1 mt-2">
          <div className="h-3 w-10 bg-gray-300 rounded"></div>
          <div className="h-3 w-10 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Price & buttons placeholder */}
      <div className="flex items-center justify-between mt-auto p-3">
        <div className="h-5 w-12 bg-gray-300 rounded"></div>
        <div className="flex gap-2">
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default FoodCardSkeleton;









