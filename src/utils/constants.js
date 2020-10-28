import Api from './Api';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: 'e006125d-46b3-4ae0-a3f9-77cc8ac310a7',
    'Content-Type': 'application/json'
  }
});

export { api };
