export default async function getJSON(params) {
  const url = './images/data.json';
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    console.log('Ошибка HTTP: ' + response.status);
  }
}
