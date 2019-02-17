function requestHandler(req, res){
    const url = req.url;
    const method = req.method;
    if(url === '/' && method === 'GET'){
        res.write('<html>');
        res.write('<head><title>Hello!</title></head>');
        res.write('<body><h1>Hello from Server!</h1><form action="/create-user" method="POST" style="text-align: center; margin-top: 10%;">' +
            '<label for = "username">Enter your name</label><br>' +
            '<input type="text" name="username">' +
            '<button type="submit">Send</button>' +
            '</form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users' && method === 'GET'){
        res.write('<html>');
        res.write('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const users = [];
        req.on('data', chunk => {
            users.push(chunk);
        });
        return req.on('end', () => {
            const parsedUsers = Buffer.concat(users).toString();
            const user = parsedUsers.split('=')[1];
            console.log(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
}


module.exports = requestHandler;