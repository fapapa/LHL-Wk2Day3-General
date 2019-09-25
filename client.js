const conn = net.createConnection({
  host: '192.168.88.56', // change to IP address
  port: 3000
});

conn.setEncoding('utf8'); // interpret data as text
