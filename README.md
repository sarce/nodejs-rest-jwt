# Nodejs Express + REST services + MongoDB + JWT

Install dependencies:
```
npm install
npm install mongodb --save
```

Install Mongodb service. In OSX:
```
brew install mongodb
```

Run mongodb service:
```
mongod
```

Start server:
```
node app.js
```

Open Postman to try a couple of requests:

1. Get a new JWT token:
```
Method: POST
URL: http://localhost:8000/authenticate
Body params (x-www-form-urlencoded)
  name: demo
  password: demo
```

Example response:
```
{
    "success": true,
    "message": "Enjoy your token!",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsiaWQiOiI1YjU3YTNlZjc0MzEwMDNlNGEzNTA5MmUiLCJuYW1lIjoiZGVtbyJ9LCJpYXQiOjE1MzI2NDEzMDIsImV4cCI6MTUzMzg1MDkwMn0.dMHsZXZVgypTZuC5OLE3hYOP1cWHDBM7PAr_xDoZcyI"
}
```

2. Access a private endpoint:
```
Method: GET
URL: http://localhost:8000/private
```
Configure your token in header:
```
Header: AuthorizationBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsiaWQiOiI1YjU3YTNlZjc0MzEwMDNlNGEzNTA5MmUiLCJuYW1lIjoiZGVtbyJ9LCJpYXQiOjE1MzI2NDEzMDIsImV4cCI6MTUzMzg1MDkwMn0.dMHsZXZVgypTZuC5OLE3hYOP1cWHDBM7PAr_xDoZcyI
```

Example response:
```
{
    "message": "You are authenticated. Your _id is: 5b57a3ef7431003e4a35092e and your name is: demo"
}
```

3. Get all results (private endpoint as well).
```
Method: GET
URL: http://localhost:8000/
Header: AuthorizationBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsiaWQiOiI1YjU3YTNlZjc0MzEwMDNlNGEzNTA5MmUiLCJuYW1lIjoiZGVtbyJ9LCJpYXQiOjE1MzI2NDEzMDIsImV4cCI6MTUzMzg1MDkwMn0.dMHsZXZVgypTZuC5OLE3hYOP1cWHDBM7PAr_xDoZcyI
```

Example response:
```
{
    "_id": "5b57a3ef7431003e4a35092e",
    "name": "demo",
    "password": "demo",
    "__v": 0
}
```
