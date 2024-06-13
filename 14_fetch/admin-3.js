<script>
  fetch('/console')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      window.gotYou = true; // Setting a flag to indicate successful retrieval
      // Assuming the HTML contains an input element with the CSRF token
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const csrfToken = doc.querySelector('input[name="csrfmiddlewaretoken"]').value;
