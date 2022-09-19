 "use strict"
  let button= document.querySelector("#boton").addEventListener("click",ValidarCaptcha);
  let captchaIngresado= document.querySelector("#ingresarCaptcha");
  let captchaOrigen= document.querySelector("#captcha");
  generar();
  function generar(){ 
   let letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z','a','b','c','d','1','2','3','4','5','6','7','8','9','0'];
      let texto='';

      for(let i=1;i<=6;i++){
        let index=[Math.floor(Math.random()*(letras.length-0))+0];
        let letra=letras[index];
          texto=texto+letra;
      }
        
        captchaOrigen.value=texto;
       
      }
     
      function ValidarCaptcha(){
         if(captchaOrigen.value== captchaIngresado.value){
          
         document.write("captcha correcto");

       }else{
        document.write("captcha incorrecto");
         }
      }

//  captcha con numeros
  //  let letra1=[Math.floor(Math.random()*(letras.length-0))+0];
  //  let letra2= [Math.floor(Math.random()*(letras.length-0))+0];
  //   let letra3=[Math.floor(Math.random()*(letras.length-0))+0];
  //   let letra4= [Math.floor(Math.random()*(letras.length-0))+0];
  //   let letra5= [Math.floor(Math.random()*(letras.length-0))+0];
  //   let letra6=[Math.floor(Math.random()*(letras.length-0))+0];
  //  let texto='';
   
  //  let captcha= texto+ letra1+letra2+letra3+letra4+letra5+letra6;
  // alert(captcha)
   
    



 
 