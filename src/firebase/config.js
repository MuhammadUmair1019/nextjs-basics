'use client'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCa1H2zHKRcoJqTJyhiJw5E3TxgKeE1eqU",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "878219118428",
  appId: "1:878219118428:web:071dd8d358a4980017e399",
  measurementId: "G-7NERMS4TDK"
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseConfigure = firebaseConfig
