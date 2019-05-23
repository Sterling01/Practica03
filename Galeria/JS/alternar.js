var cambia_imagen = new Array();
cambia_imagen[0] = "Imagenes/1.jpg";
cambia_imagen[1] = "Imagenes/2.jpg";
cambia_imagen[2] = "Imagenes/3.jpg";
cambia_imagen[3] = "Imagenes/4.jpg";
cambia_imagen[4] = "Imagenes/5.jpg";
cambia_imagen[5] = "Imagenes/6.jpg";
cambia_imagen[6] = "Imagenes/7.jpg";
cambia_imagen[7] = "Imagenes/8.jpg";
cambia_imagen[8] = "Imagenes/9.jpg";
cambia_imagen[9] = "Imagenes/10.jpg";

function rand(n){
// creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
 return(Math.floor(Math.random() * n + 1 ));
}

function cambiar(){
     document.getElementById("ia").src = cambia_imagen[rand(10)-1];
}

contmax=0;
contmin=0;
function siguiente () 
    { 
        if(contmax<10)
        {
            document.getElementById('ia').src =cambia_imagen[contmax] ;
            contmax=contmax+1;   
        }
        else{
            contmax=9
            alert("Ultima imagen")
        }
            
        
    }

function anterior () 
    {
        if(contmax >=0)
        {
            document.getElementById('ia').src = cambia_imagen[contmax];
            contmax=contmax-1;
            
        }
        else{
            alert("Primera imagen")    
            contmax=0
        }
        
 

    }

