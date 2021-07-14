setInterval(()=>{
    const reloj = new Date();
    const divHora = document.getElementById('hora');
    const mes = ['Ene','Feb','Mar','Abr','Mayo','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dia = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    console.log(reloj.getMonth())
    
    divHora.innerText = `${formatoHora(reloj.getHours())}:${formatoHora(reloj.getMinutes())}:${formatoHora(reloj.getSeconds())}
    ${dia[reloj.getDay()]}, ${reloj.getDate()} ${mes[reloj.getMonth()]}`
    
    document.getElementById('hora').classList.toggle('contornoReloj')
    
    
},1000)

const formatoHora =(reloj)=> reloj < 10 ? '0' + reloj : reloj;