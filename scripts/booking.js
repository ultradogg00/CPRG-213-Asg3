/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_per_day = 35, calculated_cost;
var num_of_days = 0 ;
var mon = document.getElementById("monday"), tue = document.getElementById("tuesday"),wed = document.getElementById("wednesday"),Thu = document.getElementById("thursday"), fir = document.getElementById("friday");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColor(id){
    let day =  document.getElementById(id);
    
    if(day.classList.contains('clicked')){
        day.classList.remove('clicked');
        num_of_days -=1 ;
        calculate();
        // console.log(num_of_days)
    }
    else{
        day.classList.add("clicked");
        num_of_days += 1;
    //    console.log(num_of_days)
        calculate();
    }   

}
mon.addEventListener('click',function(){changeColor("monday");}); 
tue.addEventListener('click',function(){changeColor("tuesday");});
wed.addEventListener('click',function(){changeColor("wednesday");});
Thu.addEventListener('click',function(){changeColor("thursday");});
fir.addEventListener('click',function(){changeColor("friday");});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear_days(){
    let days =  document.getElementsByClassName('blue-hover');
    for (let i =0; i < days.length; i++){
        days[i].classList.remove('clicked');
        
        // if (days[i].classList.length <2)
        //     days[i].classList.remove('clicked')
        // stop other elcemntes from being remved like full and half days
    }
    document.getElementById('full').classList.add('clicked');
    
    num_of_days = 0;
    // set calcuted cost to zero
    calculate();
}

document.getElementById('clear-button').addEventListener('click',clear_days);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function change_rate(id){
    if (id == 'full'){
        document.getElementById(id).classList.add("clicked");
        document.getElementById('half').classList.remove("clicked");
        cost_per_day = 35;
        calculate();
    }
    else{
        document.getElementById(id).classList.add("clicked");
        document.getElementById('full').classList.remove("clicked");
        cost_per_day = 20;
        calculate();
    }

}
document.getElementById('full').addEventListener('click',function(){change_rate("full");});
document.getElementById('half').addEventListener('click',function(){change_rate("half");});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(){
    calculated_cost = cost_per_day*num_of_days;
    document.getElementById('calculated-cost').innerHTML=calculated_cost;
    

}

