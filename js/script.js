var pokemones = []; //ARRAY

function agregarPkm(){
    pokemon = []; //VARIABLE IGUAL A LA ARRAY
    
    pokemon.push(document.getElementById('txtNombre').value);//AGREGAR ELEMENTO AL ARRAY
    pokemon.push(document.getElementById('txtColor').value); 
    pokemon.push(document.getElementById('txtTamano').value); 
    pokemon.push(document.getElementById('txtHabilidad').value); 
    pokemon.push(document.getElementById('txtTipo').value);
    pokemon.push(document.getElementById('txtExp').value);
    
    
    //CONTROL SI ESTAN VACIOS O NO!
    todoBien = true;
    for(x=0; x<pokemon.length;x++){
        if(pokemon[x] == ""){
            todoBien = false;
        }
    }
    if(todoBien){
        pokemones.push(pokemon); //INSTERAMOS DATOS.
    
    
        datos = JSON.stringify(pokemones); //CONVERITE ARRAY A STRING
        localStorage.setItem('pokedex', datos);

        limpiarFormulario();
        mostrarDatos();
    }else{
        alert("Debes de llenar todos los campos");
    }
    
    
}

function mostrarDatos(){
    
    destino = document.getElementById('tbDatos');//AQUÍ PONDREMOS LOS POKEMONS.
    destino.innerHTML = ''; //EVITA LA DUPLICACIÓN.
    
    for(x=0; x < pokemones.length; x++){
        
        tr = document.createElement('tr');
        pokemon = pokemones[x];  //Datos de un pokemon en la array
        for(y=0; y < pokemon.length; y++){
            dato = pokemon[y];
            td = document.createElement('td');
            td.innerHTML = dato;
            tr.appendChild(td);
            
        }
        destino.appendChild(tr); 
    }
    
}

function limpiarFormulario(){ //FUNCION PARA LIMPIAR LOS IMPUTS.
    campos = document.getElementsByTagName("input");
    for(x=0;x<campos.length;x++){
        campos[x].value='';
    }
}

datos = localStorage.getItem('pokedex'); 
if(datos != null){
    pokemones = JSON.parse(datos); //CONVIERTE STRING A ARREGLO
    mostrarDatos(pokemones);
}
