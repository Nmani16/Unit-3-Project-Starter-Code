/* Declare variables below to save the different sections (divs) of your story*/



let houseButton= document.querySelector(".option-one");
let fieldButton = document.querySelector(".option-two");
let houseDiv = document.querySelector(".option-one-screen");
let fieldDiv = document.querySelector(".option-two-screen");
let photo1= document.querySelector(".photo1"); 
let photo2 = document.querySelector(".photo2");
let ending1 = document.querySelector(".option-one-end"); 
let ending2 = document.querySelector(".option-two-end");
let body = document.querySelector("body");

houseButton.onclick=function(){
    houseDiv.style.display="block";
    body.style="background-color:  brown";
};
fieldButton.onclick=function(){
    fieldDiv.style.display="block";
        body.style="background-color: lightblue";
}; 
/*photo1.onclick=function()
 fieldDiv.style.display="block";
bodystyle="https://media.tenor.com/yJ83Gpx0pYEAAAAM/stay-home-pull.gif"; 
};
*/
  photo2.onclick=function(){
    fieldDiv.style.display="block";
    body.style="https://i.makeagif.com/media/10-16-2021/5ggpCL.gif";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};``


INSERT_VARIABLE.onclick=function(){

};

*/


