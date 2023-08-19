
{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
//   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-Firestore.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD9-x5zfchg52LgkZNPr7sMWp021fyixac",
    authDomain: "myproject-bc39f.firebaseapp.com",
    projectId: "myproject-bc39f",
    storageBucket: "myproject-bc39f.appspot.com",
    messagingSenderId: "646206248912",
    appId: "1:646206248912:web:7fa9f400aa0ca663cecbd5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
const submitbtn = document.getElementById("btn");
submitbtn.addEventListener("click", submit);


 async  function submit(){
    try{     
        const username = document.getElementById("user").value
        const email = document.getElementById("email").value 
        const password = document.getElementById("password").value
        
        const userobj = {
            username,
            email,
            password
        } 
        const docRef = await addDoc(collection(db,"users"), userobj);
        console.log(docRef)
       
    }

catch (error){
    console.log("error", error.message);
}
}
