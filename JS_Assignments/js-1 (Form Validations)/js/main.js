window.onload = function() {
    
    function populateFields() {

      const storedEmail = localStorage['email'];
      const storedFirstName = localStorage['first_name'];
      const storedLastName = localStorage['last_name'];
      const storedPermission = localStorage['permission'];
      // const storedLocation = localStorage['loc_details'];
      // const storedDate = localStorage['date'];
  
      document.getElementById('email_input').value = storedEmail || '';
      document.getElementById('first_name_input').value = storedFirstName || '';
      document.getElementById('last_name_input').value = storedLastName || '';
      document.getElementById('permission_input').checked = (storedPermission === 'true');
      // document.getElementById('loc_details').value = storedLocation || '';
      // document.getElementById('calendar').value = storedDate || '';

    }
  
    populateFields();
};
  
function email_validation(email) {
    var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // var regex = new RegExp('^[-----]$');
    return email_pattern.test(email);
}

function first_name_validation(first_name) {
    var first_name_pattern = /^[a-zA-Z]+$/;
    return first_name_pattern.test(first_name);
}

function last_name_validation(last_name) {
    var last_name_pattern = /^[a-zA-Z]+$/;
    return last_name_pattern.test(last_name);
}


//-----------------------------------------------------------------------------

let has_error = false;
var button = document.getElementById('subscribe_btn');
// button.addEventListener('click',approval);
button.addEventListener('click',function(event){

  event.preventDefault();

  if(validation())
  {
    popup();
  }

});

//-----------------------------------------------------------------------------


function validation(event)
{
  // event.preventDefault();
  var email = document.getElementById('email_input').value.trim();
  var first_name = document.getElementById('first_name_input').value.trim();
  var last_name = document.getElementById('last_name_input').value.trim();
  var check_box = document.getElementById('permission_input').checked;
  var loc_details = document.getElementById('loc_details').value;
  var date = document.getElementById('calendar').value;

  has_error = false;

  if(email_validation(email))
  {
    document.querySelector('#email_error').style.display = 'none';
  }
  else
  {
    document.querySelector('#email_error').style.display = 'block';
    has_error = true;
  }

  if(first_name_validation(first_name))
  {
    document.querySelector('#first_name_error').style.display = 'none';
  }
  else
  {
    document.querySelector('#first_name_error').style.display = 'block';
    has_error = true;
  }

  if(last_name_validation(last_name))
  {
    document.querySelector('#last_name_error').style.display = 'none';
  }
  else
  {
    document.querySelector('#last_name_error').style.display = 'block';
    has_error = true;
  }

  if(!(check_box))
  {
    document.querySelector('#checkbox_error').style.display = 'block';
    has_error = true;
  }
  else
  {
    document.querySelector('#checkbox_error').style.display = 'none';
  }

  if(!(has_error))
  {
    console.log(has_error);
    localStorage['email'] = email;
    // console.log(localStorage['email']); 
    localStorage['first_name'] = first_name; // localStorage.setItem('firstName',firstName);
    // console.log(localStorage['first_name']); // console.log(localStorage.getItem('firstName'));
    localStorage['last_name'] = last_name;
    // console.log(localStorage['last_name']);
    localStorage['loc_details'] = loc_details;
    // console.log(localStorage['loc_details']);
    localStorage['date'] = date;
    // console.log(localStorage['date']);
    return true;
  }
  return false;
}

/*popup*/ 
function popup()
{
  var popupbox = document.getElementById('popupbox');
  var overlay = document.getElementById('overlay');

  popupbox.style.display = 'block';
  overlay.style.display = 'block';
}

function closepopup()
{
  var popupbox = document.getElementById('popupbox');
  var overlay = document.getElementById('overlay');

  popupbox.style.display = 'none';
  overlay.style.display = 'none';
}

document.getElementById('ok_box').addEventListener('click', closepopup);
document.getElementById('clear_icon').addEventListener('click', closepopup);
