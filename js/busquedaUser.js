import { onGetTasks } from './firebase.js'


// capturar el div del index

const taskContainerInstUp = document.getElementById('task-container-upIstr');
const taskInstrucorForm = document.getElementById("task-inst-form");

// para saber si esta editando
let editStatus = false;
// guardamos el id para poder editar
let id ='';

// fin de agragad datos al index
        // instructor
        
        taskInstrucorForm.addEventListener('submit', (e) => {
            e.preventDefault()
             const IdBusInstr = document.getElementById('IdBUsInst').value;
            const IdBusInstrUpp = IdBusInstr.toUpperCase();
            
            if (IdBusInstrUpp != ''){
                clearInst();
                onGetTasks((datafomDB) =>{
                    let searcUser ='';
                    datafomDB.forEach(doc =>{
                        const taskWithCap = doc.data();
                        const PtosdeLibretaCap = taskWithCap.LibPuntos;
                        if(taskWithCap.LibIdentificador == IdBusInstrUpp){
                            searcUser +=`
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
                            taskContainerInstUp.innerHTML += searcUser;
                            moverbuscData()
                            

                            // seleccionar los botones para borrar
                            const btnDeleteInst =taskContainerInstUp.querySelectorAll('.btn-inst-delete')
                            btnDeleteInst.forEach(btn =>{
                                btn.addEventListener('click', ({target:{dataset}}) =>{
                                    taskContainerInstUp.innerHTML= "";
                                })
                            })

                        }else{
                           // alert("Libreta no encontrada");
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

   

    

   