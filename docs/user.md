# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "verry",
  "password": "rahasia",
  "name": "verry kurniawan"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "verry",
    "name": "verry kurniawan"
  }
}
```

Response Body Error:

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "verry",
  "password": "rahasia"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error:

```json
{
  "errors": "Username or Password incorrect"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
    "name" : "Verry Kurniawan lagi" // optional
    "password" : "new password" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "verry",
    "name": "Verry Kurniawan lagi"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "verry",
    "name": "Verry Kurniawan"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unathorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/Logout

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": "ok"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
