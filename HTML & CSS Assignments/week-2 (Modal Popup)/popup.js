var openpop = document.getElementById('openpopup');
  var cancelpop = document.getElementById('cancelbox');
  var popupbox = document.getElementById('popupbox');
  var deletepop = document.getElementById('deletebox');
  var overlay = document.getElementById('overlay');
  var clear_icon = document.getElementById('clear_icon');

  function openpopup()
  {
    popupbox.style.display = 'block';
    overlay.style.display = 'block';
  }
  function closepopup()
  {
    popupbox.style.display = 'none';
    overlay.style.display = 'none';
  }
  
  openpop.addEventListener('click',openpopup);
  cancelpop.addEventListener('click',closepopup);
  deletepop.addEventListener('click',closepopup);
  clear_icon.addEventListener('click',closepopup);