import { onGetTasks } from './firebase.js'


// capturar el div del index

const taskContainerInstUp = document.getElementById('task-container-upIstr');



// para saber si esta editando
let editStatus = false;
// guardamos el id para poder editar
let id ='';

// fin de agragad datos al index
window.addEventListener('DOMContentLoaded',  async() => {
    // const datafomDB = await getTask();
    onGetTasks( (datafomDB) => {
        let html ='';
    // para ver todos los doc por consola
    datafomDB.forEach(doc => {
    var datosLibreta =doc.data();
        html +=`
      <div >
      
      </br>
      <h3 class="h5">N° de libreta : ${datosLibreta.LibIdentificador}</h3>
      <p> Categoria de libreta : ${datosLibreta.LibCategoria}</p>
      <p>Nombre del conductor : ${datosLibreta.LibName}</p>
      <p>Cedula del conductor : ${datosLibreta.LibCedula}</p>
      <p>Vencimiento de la libreta : ${datosLibreta.LibVto}</p>
      <p>Observaciones de la libreta : ${datosLibreta.LibObservaciones}</p>
      <p>Puntos de la libreta : ${datosLibreta.LibPuntos}</p>
      <p>Libreta habilitada : ${datosLibreta.LibStatus}</p>
      <br/>
      <button class='btn-delete' data-id="${doc.id}">Borrar</button>
      <button class='btn-Edit' data-id="${doc.id}">Actualizar</button>
      <div>
      </div>
    </div>`;
        
        console.log(doc.data());
        
    });
   
 
});
})


 

        // instructor
        const taskInstrucorForm = document.getElementById("task-inst-form");
        taskInstrucorForm.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const IdBusInstr = document.getElementById('IdBUsInst').value;
            const IdBusInstrUpp = IdBusInstr.toUpperCase();
            
            if (IdBusInstrUpp != ''){
                console.log("buscando desde inpector "+ IdBusInstrUpp);
                clearInst();
                onGetTasks((datafomDB) =>{
                    let html6 ='';
                    datafomDB.forEach(doc =>{
                        const taskWithCap = doc.data();
                        const PtosdeLibretaCap = taskWithCap.LibPuntos;
                        console.log('desde data '+taskWithCap.LibIdentificador);
                        if(taskWithCap.LibIdentificador == IdBusInstrUpp){
                            html6 +=`
                            <div></br>
                            <h3> N° de libreta : ${taskWithCap.LibIdentificador}</h3>
                            <p> Categoria de libreta : ${taskWithCap.LibCategoria}</p>
                            <p>Nombre del conductor : ${taskWithCap.LibName}</p>
                            <p>Cedula del conductor : ${taskWithCap.LibCedula}</p>
                            <p>Vencimiento de la libreta : ${taskWithCap.LibVto}</p>
                            <p>Observaciones de la libreta : ${taskWithCap.LibObservaciones}</p>
                            <p>Puntos de la libreta : ${taskWithCap.LibPuntos}</p>
                            <p>Libreta habilitada : ${taskWithCap.LibStatus}</p>
                            <br/>
                            <button class='btn-inst-delete BtnBuscar'>Libreta equivocada</button>
                            
                            </div>
                            `;
                            taskContainerInstUp.innerHTML += html6;
                            moverbuscData()
                            

                            // seleccionar los botones para borrar
                            const btnDeleteInst =taskContainerInstUp.querySelectorAll('.btn-inst-delete')
                            btnDeleteInst.forEach(btn =>{
                                btn.addEventListener('click', ({target:{dataset}}) =>{
                                    taskContainerInstUp.innerHTML= "";
                                })
                            })
                            
                           

                        }else{
                            console.log("Libreta no encontrada");
                        }
                    })
                })
            }else{
                console.log('error');
            }

        })
  

    // funciones de mover web
    
    function clearInst(){
        document.getElementById('IdBUsInst').value ='';
    }
    
    function moverbuscData(){
        window.scrollTo(0, 1250)
    }
    function moverbuscMasInfo(){
        window.scrollTo(0, 860)
    }

    
    const taskchange = document.getElementById("info");
    taskchange.addEventListener('click',  (e) =>{
        e.preventDefault()
        console.log("hsad")
        document.getElementById("info2").style.display = "block";
        document.getElementById("info").style.display = "none";
        moverbuscMasInfo();
        
    })

    const boton = document.querySelector("#Ing");
// Agregar listener
boton.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    
	window.location.href = "./indexAdmin.html";
});

   

    

   