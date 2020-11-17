function showMenu(){
    var globalizationMenu = document.getElementById("globalizationMennu");
    globalizationMenu.style.display = "block";


    // if (globalizationMenu.style.display ==="block"){
    //     globalizationMenu.style.display = "none";
    // }
    // else{
    //     globalizationMenu.style.display = "block"
    // }
}

function hideMenu(){
    var globalizationMenu = document.getElementById("globalizationMennu");
    globalizationMenu.style.display = "none";

}


function changeTab(event, tab){
    var i, tabContent, tabButton;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    
    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++){
        //tabButton[i].className = tabButton[i].className.replace(" active","");
        this.setTabInactive(tabButton[i]);
    }

    document.getElementById(tab).style.display = "flex";
    event.currentTarget.className += " active";
 
}

function setTabInactive(tabElement){
    tabElement.className = tabElement.className.replace(" active","");
}