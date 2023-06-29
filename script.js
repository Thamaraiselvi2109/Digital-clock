
let datetime=new Date();
function display(){
    var datetime=new Date();
    var hr=zero(datetime.getHours());
    var min=zero(datetime.getMinutes());
    var sec=zero(datetime.getSeconds());
    var hours=document.getElementById("hour");
    hours.innerHTML=hr;
    if(hr>=12){
    document.getElementById("am").innerHTML="PM";
    }
    var minutes=document.getElementById("mins");
    minutes.innerHTML=min;
    var seconds=document.getElementById("seco");
    seconds.innerHTML=sec;

function zero(num){
    return num<10? "0"+num:num
}
}
setInterval(display,500)