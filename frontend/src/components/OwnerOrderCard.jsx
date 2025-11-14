import axios from 'axios';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { serverUrl } from '../App';
import { useDispatch } from 'react-redux';
import { updateOrderStatus } from '../redux/userSlice';
import { useState } from 'react';

function OwnerOrderCard({ data }) {

  const dispatch = useDispatch()
  const [availableBoys, setAvailableBoys] = useState([])

  const handleUpdateStatus = async (orderId, shopId, status) => {
    try {
      // console.log("status",status)
      const result = await axios.post(`${serverUrl}/api/order/update-status/${orderId}/${shopId}`, { status }, { withCredentials: true })
      // console.log(result.data)
      dispatch(updateOrderStatus({ orderId, shopId, status }))
      setAvailableBoys(result?.data?.availableBoys)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-lg shadow p-4 space-y-4'>
      <div>
        <h2 className='text-lg font-semibold text-gray-800'>{data.user.fullName}</h2>
        <p className='text-sm text-gray-500'>{data.user.email}</p>
        <p className='flex items-center gap-2 text-sm text-gray-600 mt-1'><FaPhoneAlt /><span>{data.user.mobile}</span></p>
        {data.paymentMethod=="online" ? <p className='gap-2 text-sm text-gray-600'>payment: {data.payment?"true":"false"}</p>:
        <p className='gap-2 text-sm text-gray-600'>Payment Method: {data.paymentMethod}</p>}
      </div>


      <div className='flex items-start flex-col gap-2 text-gray-600 text-sm'>
        <p className=''>{data?.deliveryAddress?.text}</p>
        <p className='text-xs text-gray-500'>Lat: {data?.deliveryAddress.latitude},  Lon: {data?.deliveryAddress.longitude}</p>
      </div>

      <div className='flex space-x-4 overflow-x-auto pb-2'>
        {data?.shopOrders?.shopOrderItems.map((item, index) => (
          <div key={index} className='flex-shrink-0 w-40 border rounded-lg p-2 bg-white'>
            <img src={item.item.image} alt="" className='w-full h-24 object-cover rounded' />
            <p className='text-sm font-semibold mt-1'>{item.name}</p>
            <p className='text-xs text-gray-500'>Qty :{item.quantity} x ₹{item.price}</p>
          </div>
        ))}
      </div>

      <div className='flex justify-between items-center mt-auto pt-3 border-t border-gray-100'>
        <span className='text-sm'>
          status: <span className='font-semibold capitalize text-[#ff4d2d]'>{data?.shopOrders?.status}</span>
        </span>

        <select className='rounded-md border px-3 py-1 text-sm focus:outline-none
 focus:ring-2 border-[#ff4d2d] text-[#ff4d2d]' onChange={(e) => handleUpdateStatus
            (data._id, data.shopOrders.shop._id, e.target.value)}>
          <option value="">Change</option>
          <option value="pending">Pending</option>
          <option value="preparing">Preparing</option>
          <option value="out of delivery">Out of delivery</option>

        </select>
      </div>

      {data?.shopOrders?.status == "out of delivery" &&
        <div className='mt-3 p-2 border rounded-lg text-sm bg-orange-50'>
          {data.shopOrders.assignedDeliveryBoy ? <p>Assigned Delivery Boys: </p>
            :
            <p>Available Delivery Boys: </p>}
          {availableBoys?.length > 0 ? (
            availableBoys.map((b, index) => (
              <div className='text-gray-300'>{b.fullName}-{b.mobile}</div>
            ))
          ) : data.shopOrders.assignedDeliveryBoy ? <div>{data.shopOrders.assignedDeliveryBoy.fullName}
          -{data.shopOrders.assignedDeliveryBoy.mobile}</div> : <div>
            waiting for Delivery boys to accept
          </div>}
        </div>}

      <div className='text-right font-bold text-gray-800 text-sm'>
        Total: ₹{data?.shopOrders?.subtotal}
      </div>

    </div>
  )
}

export default OwnerOrderCard




// import React from 'react'
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdLocationPin } from "react-icons/md";
// import { motion } from "framer-motion";

// function OwnerOrderCard({ data }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255,77,45,0.25)" }}
//       transition={{ duration: 0.4 }}
//       className="relative backdrop-blur-xl bg-white/80 dark:bg-gray-900/70
//       rounded-3xl shadow-xl border border-orange-100/60 dark:border-gray-700
//       overflow-hidden p-6 sm:p-8 w-full max-w-3xl mx-auto"
//     >
//       {/* Accent gradient bar */}
//       <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff4d2d] via-orange-400 to-yellow-300"></div>

//       {/* Header - Customer Info */}
//       <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-5 border-b border-gray-200 dark:border-gray-700">
//         <div>
//           <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-white tracking-tight">
//             {data.user.fullName}
//           </h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{data.user.email}</p>
//           <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mt-2">
//             <FaPhoneAlt className="text-[#ff4d2d]" />
//             {data.user.mobile}
//           </p>
//         </div>

//         <div className="text-right">
//           <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Order ID</span>
//           <p className="mt-1 inline-block bg-[#ff4d2d] text-white font-semibold px-4 py-1.5 rounded-full text-sm shadow-md">
//             #{data?._id?.slice(-6)?.toUpperCase() || "N/A"}
//           </p>
//         </div>
//       </div>

//       {/* Address */}
//       <div className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-orange-50/40 dark:from-gray-800 dark:to-gray-700 p-4 rounded-2xl mt-5">
//         <MdLocationPin className="text-[#ff4d2d] text-2xl" />
//         <div className="text-sm">
//           <p className="text-gray-800 dark:text-gray-100 font-medium">{data?.deliveryAddress?.text}</p>
//           <p className="text-xs text-gray-500 mt-1">
//             Lat: {data?.deliveryAddress.latitude}, Lon: {data?.deliveryAddress.longitude}
//           </p>
//         </div>
//       </div>

//       {/* Items */}
//       <div className="mt-6 flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-orange-300 dark:scrollbar-thumb-gray-700 pb-3">
//         {data?.shopOrders.shopOrderItems.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="flex-shrink-0 w-48 bg-white dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700
//             rounded-2xl shadow hover:shadow-lg transition duration-300 p-3"
//           >
//             <img
//               src={item.item.image}
//               alt={item.name}
//               className="w-full h-32 object-cover rounded-xl"
//             />
//             <p className="text-sm font-semibold mt-2 text-gray-800 dark:text-gray-100 truncate">
//               {item.name}
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               Qty: {item.quantity} × ₹{item.price}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Status */}
//       <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
//         <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
//           <span>Status:</span>
//           <span className="font-bold capitalize text-[#ff4d2d]">{data.shopOrders.status}</span>
//         </div>

//         <select
//           value={data.shopOrders.status}
//           className="rounded-xl border px-4 py-2 text-sm cursor-pointer border-[#ff4d2d]
//           text-[#ff4d2d] bg-white/80 dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700
//           focus:ring-2 focus:ring-[#ff4d2d] outline-none transition duration-200 shadow-sm"
//         >
//           <option value="Pending">Pending</option>
//           <option value="Preparing">Preparing</option>
//           <option value="out of delivery">Out of delivery</option>
//         </select>
//       </div>

//       {/* Footer */}
//       <div className="mt-4 text-right">
//         <p className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
//           Total: ₹{data.shopOrders.subtotal}
//         </p>
//       </div>
//     </motion.div>
//   )
// }

// export default OwnerOrderCard


