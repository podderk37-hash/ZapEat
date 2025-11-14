import React from 'react'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMyOrders, setUserData } from '../redux/userSlice'
import { setmyShopData } from '../redux/ownerSlice'
// import { linkWithCredential } from 'firebase/auth'

const useGetMyOrders = () => {
    const dispatch = useDispatch()
    const {userData} = useSelector(state=>state.user)
    useEffect(() => {
        const fetchOrders = async () => {
        try {
            
            const result = await axios.get(`${serverUrl}/api/order/my-orders`,
                { withCredentials: true })
                dispatch(setMyOrders(result.data))
                console.log(result.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    fetchOrders()
    },[userData])
}

export default useGetMyOrders
