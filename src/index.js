import http from 'http';
import Person from 'yala';

http.createServer((req, res) => {
  const person = new Person();
  res.end('Let say ' + person.say('yolo'));
}).listen(9999);
