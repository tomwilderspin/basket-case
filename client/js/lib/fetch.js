import fetch from 'isomorphic-fetch';

// async fetch util for gabbing 3rd party HTTP API
export default function asyncFetch(url, headers, body, method = 'GET') {
  let options = {
    headers:  headers,
    body: JSON.stringify(body),
    method: method
  };

  return fetch(url, options)
        .then(checkResponseStatus)
        .then(response => response.json());
}

//checks status and throw an error if not ok
function checkResponseStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const error = new Error('request error' + response.statusText);
    error.response = response;
    throw error;
  }
}
