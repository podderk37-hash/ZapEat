import React from 'react'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setItemsInMyCity, setShopInMyCity, setUserData } from '../redux/userSlice'
// import { linkWithCredential } from 'firebase/auth'

const useGetItemsByCity = () => {
    const dispatch = useDispatch()
    const {currentCity} = useSelector(state=>state.user)
    useEffect(() => {
        const fetchItem = async () => {
        try {
            
            const result = await axios.get(`${serverUrl}/api/item/get-by-city/${currentCity}`,
                { withCredentials: true })
                dispatch(setItemsInMyCity(result.data))
                console.log(result.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    fetchItem()
    },[currentCity])
}

export default useGetItemsByCity
