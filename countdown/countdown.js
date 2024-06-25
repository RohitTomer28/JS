const endDate="12 October 2024 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate);
    const now= new Date();
    var diff=end-now;
    diff/=1000;
    if (diff<0)
        return;
    inputs[3].value=Math.floor(diff%60);
    inputs[2].value=Math.floor((diff%3600)/60);
    inputs[1].value=Math.floor(diff%(60*60*24)/3600);
    inputs[0].value=Math.floor(diff/(60*60*24));

}

clock();
setInterval(
    ()=>{
        clock();
    },
    1000
);