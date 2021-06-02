# Arithmentic Operations

Arithmetic operations API for Addition, Substraction, Division, Multiplication, Square Root, Free Form and Random String operations.

## Installation

Execute this scripts on a PostgreSQL server with an Admin user

```bash
CREATE ROLE hromero WITH LOGIN PASSWORD 'hor@cio1';

ALTER ROLE loanpro CREATEDB;

CREATE DATABASE operations;

GRANT ALL PRIVILEGES ON DATABASE operations TO hromero; 
```

Then execute the following to install all dependencies

```bash
npm install
```
Go to src\ directory and execute the following commands

```bash
npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

npm run dev

should display => Listenning on port 51044...
```

## Usage

```javascript
npm run dev

should display => Listenning on port 51044...
```
## Created Users
```
-username rzhoraciov@gmail.com -password 'admin' -role admin
-username user1@tester.com -password 'user1' -role user
-username user2@tester.com -password 'user2' -role user
-username user3@tester.com -password 'user3' -role user


```

## API documentation
```
http://localhost:51044/v1/api-docs/
```
## License
[MIT](https://choosealicense.com/licenses/mit/)