// document.querySelector('')
// document.getElementById("div1").classList.add("classToBeAdded");
//document.getElementById("div1").classList.remove("classToBeRemoved");
setInterval(function(){data();},1000);
setInterval(function(){mac_address();},1000);
let ul = document.querySelector('.old-values ul');
let button = document.querySelector('#button');
let value = document.querySelector('#value');
let mac = document.querySelector('#mac_address');
let state = document.querySelector('#color-state');
// let disactive = false; 
// ul.classList.add(".disactive");


function dddd () 
{
    if (ul.className.length > 0){
        ul.classList.remove('disactive');
        button.textContent = "Show values"
    }else { 
        ul.classList.add('disactive');
        button.textContent = "hide values"
    }
    
}

function data()
{
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {

        if(this.readyState==4 && this.status==200)
        {
            value.textContent=this.responseText;
            console.log(this.responseText);
        }
    };
    xhttp.open("GET","/get-Data",true);
    xhttp.send();

}

function mac_address()
{
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {

        if(this.readyState==4 && this.status==200)
        {
            let time  = this.responseText.split(',')[1];
            console.log(time)
            if( time  < 10 ) 
            {
                mac.textContent=this.responseText.split(',')[0];
                state.textContent = "Connected";
                state.style.color = "green";
            } else 
             { 
                mac.textContent="00:00:00:00:00:00";
                state.textContent = "disConnected";
                state.style.color = "red";
             }
            
            console.log(this.responseText);
            startTime = new Date();
        }
    };
    xhttp.open("GET","/get-State",true);
    xhttp.send();

}



