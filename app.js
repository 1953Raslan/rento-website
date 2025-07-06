const form = document.getElementById('bookingForm');
    const msg = document.getElementById('responseMsg');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      fetch('https://script.google.com/macros/s/AKfycbw-MtUbxQ8_1BRJiN4zeCN8Th5mT44nHqUUh-JnO4IusxicByvPXqkkKwK3BitlQW72/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.text())
      .then(txt => msg.innerText = txt)
      .catch(err => msg.innerText = 'حدث خطأ، حاول لاحقاً');
    });