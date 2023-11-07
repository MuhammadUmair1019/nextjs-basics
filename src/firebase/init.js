'use client'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { firebaseConfigure } from './firebase'

const firebaseApp = initializeApp({ ...firebaseConfigure })
const firebaseDb = getFirestore(firebaseApp)
const firebaseAuth = getAuth(firebaseApp)
const firebaseStorage = getStorage(firebaseApp)

export { firebaseApp, firebaseAuth, firebaseDb, firebaseStorage }