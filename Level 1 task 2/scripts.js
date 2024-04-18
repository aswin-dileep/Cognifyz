function changeColor(){
    var button = document.getElementById("clr");

    if(button.style.backgroundColor =="red"){
        button.style.backgroundColor ="blue";
    }else{
        button.style.backgroundColor ="red"
    }
}

function getGreeting(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var greeting;

    if (currentHour<12){
        greeting = 'Good morning'
    } else if (currentHour<18){
        greeting = "Good afternoon"
    }else{
        greeting = "Good evening.."
    }

    alert(greeting)
}

getGreeting();

function add(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2
    document.getElementById("result").textContent = "Result :"+result;
}