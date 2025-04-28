const apiUrl = "https://f5qzurvewg.execute-api.us-east-1.amazonaws.com/update/v1/lambda";
const count = document.getElementById("count");
let c = 0
const requestOptions = {
  method: 'POST'
};

function generateVisitorId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Store cookie of the user (cookie syntax)
//document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let id = cname + "="; // ip = ip=
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(id) == 0) {
      return c.substring(id.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("VID"); // getCookie(ip)
  if (user != "") {
    return; // do do anything
  } else {
     //ip = ip of visitor
     vid = generateVisitorId()
     setCookie("VID",vid , 30)
     fetch(apiUrl, requestOptions)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network Response was not ok')
    }
    return response.json();
  })
  .then(data =>{
    // console.log('Request succeeded with JSON response:', data);
    c = data.visitor_count;
    count.textContent = c;
  })
  .catch(error => {
    console.error('Error;', error)
  })
  }
}


