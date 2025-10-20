// function myFunction() {
//     const copytext=document.getElementsByClassName("link")[0].href;
//     navigator.clipboard.writeText(copytext);

// }
// function Frontend() {
//     const copytext=document.getElementsByClassName("link")[1].href;
//     navigator.clipboard.writeText(copytext);

// }
// function Linkedin() {
//     const copytext=document.getElementsByClassName("link")[2].href;
//     navigator.clipboard.writeText(copytext);

// }
// function Twitter() {
//     const copytext=document.getElementsByClassName("link")[3].href;
//     navigator.clipboard.writeText(copytext);

// }
// function instagram() {
//     const copytext=document.getElementsByClassName("link")[4].href;
//     navigator.clipboard.writeText(copytext);

// }
function myFunction(value) {
     const copytext=document.getElementsByClassName("link");
    const content=copytext[value];
 if(value=0){
    navigator.clipboard.writeText(content.href)}
     if(value=1){
        navigator.clipboard.writeText(content.href)

    }
else{
    console.log("error");

}}
