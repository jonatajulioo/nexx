let textNameIp = "nexxmc.fun"

setInterval(function(){
    const nameIp = document.querySelectorAll('h1.nameIp');
    nameIp.forEach(element =>{
        element.textContent = textNameIp;
    });
;}, 1000);
