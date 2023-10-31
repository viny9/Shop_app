import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

const [userInfos, setUserInfos] = useState()

useEffect(() => {
    getUserInfos().then()
}, [])

const getUserInfos = async () => {
    const user = await getDocs(collection(db, 'teste'))
    user.forEach(doc => {
        setUserInfos(doc)
    })
}

export {
    userInfos,
    getUserInfos
}