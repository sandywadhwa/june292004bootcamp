function welcome(){
    console.log("Welcome to React Bootcamp");
}

function toggleDayContent(dayNumber){
    const dayContent = document.getElementById("day-content-"+dayNumber);
    if(dayContent.style.display === "none"){
        dayContent.style.display = "block";
    }
    else{
        dayContent.style.display = "none";
    }
}