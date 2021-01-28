

//login form tab swaping

$('.LgIn').find('input, textarea').on('keyup blur focus', function (b) {
  
  var $txt1 = $(this),
      lbl = $txt1.prev('label');

    if (b.type === 'keyup') {
      if ($txt1.val() === '') {
          lbl.removeClass('active highlight');
        } else {
          lbl.addClass('active highlight');
        }
    } else if (b.type === 'blur') {
      if( $txt1.val() === '' ) {
        lbl.removeClass('active highlight'); 
      } else {
        lbl.removeClass('highlight');   
      }   
    } else if (b.type === 'focus') {
      
      if( $txt1.val() === '' ) {
        lbl.removeClass('highlight'); 
      } 
      else if( $txt1.val() !== '' ) {
        lbl.addClass('highlight');
      }
    }

});

$('.section a').on('click', function (b) {
  
  b.preventDefault();
    var $txt2 = $(this);

  $txt2.parent().addClass('active');
  $txt2.parent().siblings().removeClass('active');
  
  goal = $txt2.attr('href');

  $('.tb-area > div').not(goal).hide();
  
  $(goal).fadeIn(600);
  
});

//save signup form data in local storage

var arr = new Array();

function passdata(){
    
    taskInput1 =document.getElementById("email1").value;
    taskInput2 =document.getElementById("pwd").value;
    var data1 = localStorage.getItem("register");
    var data2 = localStorage.getItem("register");
    var x1 = JSON.parse(data1);
    var x2 = JSON.parse(data2);

    if(x1 != null && x2 != null ) {
        x1.push(taskInput1);
        x2.push(taskInput2);
        localStorage.setItem("register", JSON.stringify(x1));
        localStorage.setItem("register", JSON.stringify(x2));
        alert("Data Saved");
    }else {
        arr.push(taskInput1);
        arr.push(taskInput2);
        localStorage.setItem("register", JSON.stringify(arr));
        alert("Data Saved...");
    }
    return false;
    
    
}

//to validate angularnode js form data

var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
   

});



