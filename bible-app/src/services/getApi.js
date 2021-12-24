
function getToken() {
  const { token } = JSON.parse(localStorage.getItem('oldUserData'));
  return token;
}

const errorLog = (error) => {
  console.log(`Algo deu errado :( \n${error}`);
  alert('Tente novamente');
}

export async function getBooks() {
  const header = { 
    Authorization: `Bearer ${getToken()}` 
  }
 
  return await fetch('https://www.abibliadigital.com.br/api/books', {
    method: "GET",
    headers: header,
  })
    .then((response) => response.json())
    .catch((error) => errorLog(error));
}

// data to be sent to the POST request CreateUser
export async function createUser(name, email, password) {
  let body = {
    "name": name,
    "email": email,
    "password": password, // minimum size 6 digits
    "notifications": true // receive update emails from www.abibliadigital.com.br
  }

  let header = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return await fetch('https://www.abibliadigital.com.br/api/users', {
    method: "POST",
    body: JSON.stringify(body),
    headers: header,
  })
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function searchByWord(word) {
  let body = {
    "version": "acf",
    "search": word,
  }

  let header = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  }

  return await fetch('https://www.abibliadigital.com.br/api/verses/search', {
    method: "POST",
    body: JSON.stringify(body),
    headers: header,
  })
  .then(response => response.json()) 
  .catch(err => console.log(err));
}

export async function getChapterVerses(end_URL) {
  return await fetch(`https://www.abibliadigital.com.br/api/verses${end_URL}`, {
    method: "GET",
    Authorization: `Bearer ${getToken()}`,
  })
    .then((response) => response.json())
    .catch((error) => errorLog(error));
}

export async function returnsToken(email, password) {
  let body = {
    "email": email,
    "password": password,
  }

  let header = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return await fetch('https://www.abibliadigital.com.br/api/users/token', {
    method: "PUT",
    body: JSON.stringify(body),
    headers: header,
  })
  .then(response => response.json()) 
  .catch(err => console.log(err));
}
