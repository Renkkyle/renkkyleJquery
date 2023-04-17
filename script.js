
// Before all page is seen a loading animation should happen (use SCSS)
// loader
setTimeout(function() {
  document.body.classList.add('loaded');
}, 2000);

$(document).ready(function() {
  var imgState = 1;
  var birthdate = $('#birthdate');
  var age = $('#age');
  var talents = [ ];
  var hobbies = [ ];

  // Profile Picture (changes every time when clicked at least 3-5 pictures) should be rounded apply box-shadow

  $('#profile-picture img:first-child').click(function() {
    console.log('image clicked');
    if (imgState == 1) {
      $(this).attr('src', 'prof2.jpg');
      imgState = 2;
    } else if (imgState == 2) {
      $(this).attr('src', 'prof3.jpg');
      imgState = 3;
    }
    else if (imgState == 3) {
      $(this).attr('src', 'prof4.jpg');
      imgState = 4;
    }
  });

  //Full Name (Use jquery to change font-size to larger when hovered)

  $('#my-name ').hover(
    function() {
      $(this).css('font-size', '50px');
    },
    function() {
      $(this).css('font-size', '36px');
    }
  );

  //Birthdate (Use jquery to change opacity when clicked)

  birthdate.click(function() {
    if (birthdate.css('opacity') == 1) {
      birthdate.css('opacity', 0.5);
    } else {
      birthdate.css('opacity', 1);
    }
  });

  // Calculate age and update the age element
  var birthdateString = 'December 21 1999';
  var ageInMilliseconds = Date.now() - new Date(birthdateString);
  var ageInYears = new Date(ageInMilliseconds).getFullYear() - 1970;
  age.text( ageInYears);
  
  // Add talent using push
  $("#add-talent").click(function() {
    var talent = prompt("Enter a talent:"); 
    if (talent !== null && talent !== "") {
      talents.push(talent); 
      updateTalents(); 
    }
  });

  // Remove talent using pop
  $("#remove-talent").click(function() {
    if (talents.length > o) {
      talents.pop(); 
      updateTalents(); 
    }
  });

  // Add hobbies using push
  $("#add-hobby").click(function() {
    var hobby = prompt("Enter a hobby:"); 
    if (hobby !== null && hobby !== "") {
      hobbies.push(hobby); 
      updateHobbies(); 
    }
  });

  // Remove hobby using pop
  $("#remove-hobby").click(function() {
    if (hobbies.length > 0) {
      hobbies.pop(); 
      updateHobbies(); 
    }
  });

  // Update list of hobbies
  function updateHobbies() {
    var hobbiesList = $("#hobbies ul");
    hobbiesList.empty(); 
    hobbies.forEach(function(hobby) {
      hobbiesList.append("<li>" + hobby + "</li>"); 
    });
  }

  //Update hobbies
  updateHobbies();
});

