import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { IoClose, IoLocationSharp, IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { serverUrl } from '../App';
import { setSearchItems, setUserData } from '../redux/userSlice';
import { FaPlus } from "react-icons/fa";
import { TbReceiptRupee } from "react-icons/tb";
import { useNavigate } from 'react-router';

function Nav() {

    const { userData, currentCity, cartItems } = useSelector(state => state.user)
    const { myShopData } = useSelector(state => state.owner)
    const [showInfo, setShowInfo] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true })
            dispatch(setUserData(null))
        } catch (error) {
            console.log(error)

        }
    }

    const handleSearchItems = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`,
                { withCredentials: true })
            // console.log(result.data)
            dispatch(setSearchItems(result.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (query) {
            handleSearchItems()
        } else {
            dispatch(setSearchItems(null))

        }

    }, [query])

    return (
        <div className='w-full h-[80px] flex justify-between items-center md:justify-center gap-[30px] px-[20px]
    fixed top-0 z-[9999] bg-[#fafff6] overflow-visible'>

            {showSearch && userData.role == "user" && <div className=" md:hidden  w-[90%] h-[60px] bg-white shadow-2xl rounded-lg items-center
       gap-[20px] flex fixed top-[80px] left-[5%]">
                <div className="flex items-center w-[30%] overflow-hidden
             gap-[10px] px-[10px] border-r-[2px] border-gray-400">
                    <IoLocationSharp size={25} className=' text-[#e64c25]' />
                    <div className="w-[80%] truncate text-gray-600">{currentCity}</div>
                </div>
                <div className="w-[80%] flex gap-[10px] items-center">
                    <IoSearch size={25} className='text-[#a9a8a8]' />
                    <input type="text" placeholder='Search Your Food.. '
                        className="px-[10px] text-gray-600 outline-0 w-full"
                        onChange={(e) => setQuery(e.target.value)} value={query} />
                </div>
            </div>}


            <h1 className="text-3xl font-bold mb-2 text-[#e64c25] cursor-pointer">ZapEats</h1>
            {userData.role == "user" &&
                <div className="  md:w-[60%] lg:w-[40%] h-[60px] bg-white shadow-2xl rounded-lg items-center
                    gap-[20px] hidden md:flex">
                    <div className="flex items-center w-[30%] overflow-hidden
                    gap-[10px] px-[10px] border-r-[2px] border-gray-400">
                        <IoLocationSharp size={25} className=' text-[#db4d29]' />
                        <div className="w-[80%] truncate text-gray-600">{currentCity}</div>
                    </div>
                    <div className="w-[80%] flex gap-[10px] items-center" >
                        <IoSearch size={25} className='text-[#a9a8a8]'
                           />

                        <input type="text" placeholder='Search Your Food.. '
                            className="px-[10px] text-gray-600 outline-0 w-full" 
                             onChange={(e) => setQuery(e.target.value)} value={query} />
                    </div>
                </div>}


            <div className="flex items-center gap-4">
                {userData?.role == "user" && (showSearch ? <IoClose size={25} className='text-[#a9a8a8] md:hidden'
                    onClick={() => setShowSearch(false)} /> : <IoSearch size={25}
                        className='text-[#a9a8a8] md:hidden' onClick={() => setShowSearch(true)} />)
                }

                {userData?.role == "owner" ?
                    <>
                        {myShopData && <>
                            <button className='hidden md:flex font-medium items-center gap-1 p-2 cursor-pointer rounded-full 
                            bg-[#e64c25]/10 text-[#e62525]'
                                onClick={() => navigate('/add-item')}> <FaPlus size={20} />
                                <span>Add Food Items</span>
                            </button>

                            <button className='md:hidden flex items-center  p-2 cursor-pointer rounded-full 
                            bg-[#e64c25]/10 text-[#e62525]'
                                onClick={() => navigate('/add-item')}> <FaPlus size={20} />
                            </button>
                        </>}


                        <div className="hidden md:flex  items-center cursor-pointer relative px-3 py-2
                        rounded-full  bg-[#e64c25]/10 text-[#e64c25] font-medium" onClick={() => navigate("/my-orders")}
                        >
                            <TbReceiptRupee className='text-[#e62525] ' size={20} />
                            <span>Pending Orders</span>
                            <span className="absolute -right-2 -top-2 rounded-full 
                            text-xs font-bold bg-[#e64c25] text-white px-[6px] py-[1px] ">0</span>
                        </div>
                        <div className="md:hidden flex  items-center cursor-pointer relative px-3 py-2
                        rounded-full  bg-[#e64c25]/10 text-[#e64c25] font-medium" onClick={() => navigate("/my-orders")}
                        >
                            <TbReceiptRupee className='text-[#e62525] ' size={30} />
                            <span className="absolute pb-1 -right-2 -top-2 rounded-full 
                            text-xs font-bold bg-[#e64c25] text-white px-[6px] py-[1px] ">0</span>
                        </div>
                    </>
                    : (<>
                        {userData.role == "user" &&
                            <div className="relative cursor-pointer " onClick={() => navigate('/cart')}>
                                <BsCart3 size={25} className="text-[#e64c25] transition-all font-semibold duration-300" />
                                <span className='absolute right-[-9px] top-[-12px] text-[#e62525] transition-all font-semibold duration-300'>
                                    {cartItems.length}</span>
                            </div>
                        }

                        <button className='hidden md:block cursor-pointer px-3 py-1 rounded-lg bg-[#e64c25]/10 text-[#e64c25]
                        text-sm font-medium' onClick={() => navigate("/my-orders")}>

                            My Orders
                        </button>
                    </>)
                }






                {/* profile */}
                <div className="w-[40px] h-[40px] items-center justify-center flex rounded-full bg-[#df6d39]
                    text-white text-[18px] shadow-xl font-semibold cursor-pointer " onClick={() => setShowInfo(!showInfo)}>
                    {userData?.fullName.slice(0, 1)}
                </div>
                {showInfo && <div className={`fixed top-[80px] right-[17px] ${userData.role == "deliveryBoy" ? "md:right-[20%] lg:right-[40%]" : "md:right-[10%] lg:right-[20%]"} w-[250px] bg-white
                    shadow-2xl rounded-xl p-[20px] flex flex-col gap-[10px] z-[9999] `}>
                    <div className="text-[17px] font-semibold">
                        {userData?.fullName}
                    </div>
                    {userData?.role == "user" && <div className="md:hidden text-[#28A853] font-semibold cursor-pointer "
                        onClick={() => navigate('/my-orders')}>
                        My Orders
                    </div>}

                    <div className="text-[#28A853] font-semibold cursor-pointer" onClick={handleLogOut}>Log Out</div>
                </div>}

            </div>
        </div>
    )
}

export default Nav