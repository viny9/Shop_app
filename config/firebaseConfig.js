import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCC9igVTxrb0G8nYEPfCcHv1MKDv2t7nBA",
    authDomain: "shopapp-e9e51.firebaseapp.com",
    projectId: "shopapp-e9e51",
    storageBucket: "shopapp-e9e51.appspot.com",
    messagingSenderId: "316412119990",
    appId: "1:316412119990:web:9e9d363302091add7f8f17"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db