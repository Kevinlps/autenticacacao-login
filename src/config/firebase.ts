import { initializeApp } from 'firebase/app'

/*const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMINIO',
  projectId: 'SEU_ID',
  storageBucket: 'SEU_ENDERECO_DE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SUA_API_KEY',
}*/

const firebaseConfig = {
  apiKey: "AIzaSyBmR8vJaMgl5ML9iZ0LDyJ4sc8WMjbmGA4",
  authDomain: "exemplo-autenticacao-b6841.firebaseapp.com",
  projectId: "exemplo-autenticacao-b6841",
  storageBucket: "exemplo-autenticacao-b6841.appspot.com",
  messagingSenderId: "16008219633",
  appId: "1:16008219633:web:a7961706fae4f0c078d250"
};

export const firebaseApp = initializeApp(firebaseConfig)
