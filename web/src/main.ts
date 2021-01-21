import { GreetRequest } from './greeting/v1/greeting_pb';
import { GreetingServiceClient } from './greeting/v1/GreetingServiceClientPb';

const greetingClient = new GreetingServiceClient('http://localhost:8080/');

document.querySelector('#greet').addEventListener('click', async () => {
  console.log('greet');
  const res = await greetingClient.greet(new GreetRequest(), null);
  const tr = `<tr><td>${new Date().toString()}</td><td>${res.getMessage()}</td></tr>`;
  document.querySelector('#log').insertAdjacentHTML('afterbegin', tr);
});
