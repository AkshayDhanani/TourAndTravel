//booking form calender code

const pick_date_elmnt = document.querySelector('.date-picker');
const date_selected_elmnt = document.querySelector('.date-picker .selected-date');
const dates_elmnt = document.querySelector('.date-picker .dates');
const mnth_elmnt = document.querySelector('.date-picker .dates .month .mth');
const next_mnth_elmnt = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mnth_elmnt = document.querySelector('.date-picker .dates .month .prev-mth');
const days_elmnt = document.querySelector('.date-picker .dates .days');

const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

let date = new Date();
let day= date.getDate();
let month= date.getMonth();
let year= date.getFullYear();

let dateSelected = date;
let daySelected = day;
let monthSelected = month;
let yearSelected = year;

mnth_elmnt.textContent =months[month]+ ' ' + year;

date_selected_elmnt.textContent = DateFormate(date);
date_selected_elmnt.dataset.value = dateSelected;

DatesPopulate();

pick_date_elmnt.addEventListener('click', DateToggle);
next_mnth_elmnt.addEventListener('click',NextMonth);
prev_mnth_elmnt.addEventListener('click',PrevMonth);

closeFn();

function DateToggle(e){
	if(!checkEventPathForClass(e.path,'dates')){
		dates_elmnt.classList.toggle('active');
	}
}
function NextMonth(e){
	month++;
	if(month > 11){
		month =0;
		year++;
	}
	mnth_elmnt.textContent = months[month] + ' ' + year;
	DatesPopulate();
}
function PrevMonth(e){
	month--;
	if(month < 0){
		month =11;
		year--;
	}
	mnth_elmnt.textContent = months[month] + ' ' + year;
	DatesPopulate();
}
 function DatesPopulate (e){
 	days_elmnt.innerHTML = '';
 	let amt_days = 31;
 	if(month == 1){
 		amt_days = 28;
 	}

 	for (let i = 0; i < amt_days; i++){
 		const day_element = document.createElement('div');
 		day_element.classList.add('day');
 		day_element.textContent = i + 1;

 		if(daySelected == (i + 1) && yearSelected == year && monthSelected == month){
 			day_element.classList.add('selected');
 		}

 		day_element.addEventListener('click', function(){
 				dateSelected = new Date(year + '-' + (month + 1) + '-' + (i + 1));
 				daySelected = (i + 1);
 				monthSelected = month;
 				yearSelected = year;

 				date_selected_elmnt.textContent = DateFormate(dateSelected);
 				date_selected_elmnt.dataset.value = dateSelected;

 				DatesPopulate();
 		});

 		days_elmnt.appendChild(day_element); 
 	}
 }

function checkEventPathForClass (path,selector){
	for(let i=0; i<path.length; i++){
		if(path[i].classList && path[i].classList.contains(selector)){
			return true;
		}
	}
	return false;
}

function DateFormate(d){
	let day= d.getDate();
	if(day<10){
		day='0'+day;
	}

	let month = d.getMonth() +1;
	if(month<10){
		month='0'+month;
	}
	let year = d.getFullYear();

	return day + ' / '+ month +' / '+year;
}

function showData(){
	document.write("<div class='d1'>Your Registration date is: " + dateSelected + "</div><br>");	
}
function closeFn(){
	document.getElementById("date2").sendToAS("pause");
}

//to validate booking form data

function validateForm(){

	var fn= document.forms["myform"]["fname"].value;
	var ln= document.forms["myform"]["lname"].value;
	var eml= document.forms["myform"]["email"].value;
	var mbl= document.forms["myform"]["mobile"].value;
	var trip= document.forms["myform"]["trip"].value;
	var prsn= document.forms["myform"]["person"].value;
	


	if(fn == ""){
		alert("Please enter First Name");
		return false;
	}
	if(ln == ""){
		alert("Please enter last Name");
		return false;
	}
	if(eml == ""){
		alert("Please enter Email-id");
		return false;
	}
	if(mbl == ""){
		alert("Please enter Mobile Number");
		return false;
	}
	if(trip == ""){
		alert("Select Your trip");
		return false;
	}
	if(prsn == ""){
		alert("select persons for trip");
		return false;
	}
	
}

//to display form data

function displayData(){
		function getParams(){
    		var idx = document.URL.indexOf('?');
    		var params = new Array();
    		if (idx != -1) {
        		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
        		for (var i=0; i<pairs.length; i++){
            		nameVal = pairs[i].split('=');
            		params[nameVal[0]] = nameVal[1];
    		    }
		    }
		    return params;
		}

		params = getParams();
		fstn = unescape(params["fname"]);
		lstn = unescape(params["lname"]);
		eml = unescape(params["email"]);
		trip=unescape(params["trip"]);
		person = unescape(params["person"]);

					

    document.write("<center><div class='d1'>Hello  " + fstn + " " + lstn + "</div><center><br>");
    document.write("<div class='d1'>Your Selected Trip: " + trip + "</div><br>");
    document.write("<div class='d1'>Booked for: "+ person +" Person</div><br> ");

    switch(new Date().getDay()){

        case 0:
                document.write("<div class='d1'>Registration day is: Sunday</div><br>");
                break;
        case 1:
                document.write("<div class='d1'>Registration day is: Monday</div><br>");
                break;
         case 2:
                document.write("<div class='d1'>Registration day is: Tuesday</div><br>");
                break;
         case 3:
                document.write("<div class='d1'>Registration day is: Wednesday</div><br>");
                break;
         case 4:
                document.write("<div class='d1'>Registration day is: Thursday</div><br>");
                break;
         case 5:
                document.write("<div class='d1'>Registration day is: Friday</div><br>");
                break;
         case 6:
                document.write("<div class='d1'>Registration day is: Saturday</div><br>");
                break;
        default:
                document.write("<div class='d1'>Registration day is: Weekend</div><br>");

    }

    showData();
    document.write("<div class='d1'>We will let you know with response on:<br>Your Email id: " + eml + "</div><br>");
    document.write("<div class='d2'>About Your Trip</div><br>");


    if(trip == "Mountain_Hike")
    {
    	var price=399;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/mountain.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Mountain Hike</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>7 days tour, 4 tour guides, Sleep in private tents, Difficulty: medium</div><br>");
    }
    else if(trip == "Snow_Hiking")
    {
    	var price=499;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/snow-hiking.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Snow Hiking</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>9 days tour, 7 tour guides, Sleep in private tents, Difficulty: hard</div><br>");
    }
    else if(trip == "Island_Beach")
    {
    	var price=599;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/beach.jpeg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Islands Beach</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>5 days tour, 8 tour guides, Sleep in Hotels, Difficulty: easy</div><br>");
    }
    else if(trip == "Dubai")
    {
    	var price=699;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/dubai.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Dubai Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>6 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if (trip == "DisneyLand")
    {
    	var price=799;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/dland.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : DisneyLand Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>7 days tour, 5 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if(trip == "Maldives_Beach")
    {
    	var price=899;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/maldives.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Maldives Beach</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>7 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if(trip == "Italy")
    {
    	var price=999;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/italy1.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Italy Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>7 days tour, 3 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if(trip == "Venice")
    {
    	var price=1999;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/venice.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Venice Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>9 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if(trip == "Paris")
    {
    	var price=1299;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/paris.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Paris Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>10 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if(trip == "London")
    {
    	var price=1399;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/london.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : London Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>10 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else if(trip == "Singapore")
    {
    	var price=1499;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/singapore.jpeg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Singapore Trip </div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>9 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
    else
    {
   		 var price=1599;
    	var result= price * person;
    	document.write("<center><div class='gallery1' ><image src='images/bali.jpg'></div></center><br>");
    	document.write("<div class='d1'> Trip : Bali Trip</div><br>");
    	document.write("<div class='d1'>Price for "+ person +" person is : $" + result +"</div><br>");
    	document.write("<div class='d1'>15 days tour, 4 tour guides, Sleep in Hotels & Resorts</div><br>");
    }
}