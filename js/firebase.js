    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import {getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, where ,  query} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD_a8bg-wQedYv1rhFBcpIccOAflwknKh4",
    authDomain: "prueba-9f8e2.firebaseapp.com",
    projectId: "prueba-9f8e2",
    storageBucket: "prueba-9f8e2.appspot.com",
    messagingSenderId: "548578090716",
    appId: "1:548578090716:web:f54b4fd9ef8deb43bdde19",
    measurementId: "G-2QZFN7QNMR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // conexion a db de firestore
  const db = getFirestore()
 
  export const saveTask = (LibIdentificador, LibCategoria, LibName, LibCedula, LibVto, LibObservaciones, LibPuntos, LibStatus) => {
    console.log("desde archivo firebase: "+LibIdentificador, LibCategoria, LibName, LibCedula, LibVto, LibObservaciones, LibPuntos, LibStatus)
    // conectamos con la basede datos, en donde queremos guardad y el dato{}
    addDoc(collection(db, 'Libretas'),{LibIdentificador, LibCategoria, LibName, LibCedula, LibVto, LibObservaciones, LibPuntos, LibStatus})
  }

// traer daots de bd
export const getTasks =() =>getDocs(collection(db, "Libretas"));

// escuchar los eventos de db firebaste
export const onGetTasks = (callback) => onSnapshot(collection(db,'Libretas'), callback)
export {
  onSnapshot,
  collection, 
  db,
  where, 
  query,
  doc,
  
  
   
}

// funcion para borrar datos
export const deleteTask  =  id => deleteDoc (doc(db,'Libretas',id))

  // funcion para obtener las libreta para poder actualizarla
  export const getTask = id => getDoc(doc(db, 'Libretas',id ));

// actualizar los datos
export const updateTask =(id, newFields) => updateDoc (doc(db, 'Libretas', id), newFields );
export const updateTask2 =( newFields) => updateDoc (doc(db, 'Libretas'), newFields );



// crear funcion para modificar lo puntos

export const updateINSPTask =(newFields) => updateDoc (doc(db, 'Libretas'), newFields );

// buscar libretas
export const getUser = LibIdentificador => getDoc(doc(db, 'Libretas', LibIdentificador))
 export const libretasRef = collection(db,"Libretas");



export const getTaskInsp = LibIdentificador => getDoc(doc(db, 'Libretas',LibIdentificador ));




