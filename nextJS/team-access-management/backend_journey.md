# Step: 01 - Overview of Backend Tech

## A. Backend Routes
- Auth - Login, Register, Logout, me
- Users - users, teams, roles
- LIB - JWT Token, Cookie, DB Connect
- Prisma

## B. Folders overview
### Auth
- api/auth/register
- api/auth/login
- api/auth/logout
- api/auth/me

### Users
- api/users
- api/users[userId]/team
- api/users[userId]/role


## C. Role
### Admin 
- USER Details
- TEAM Details
- Assign Role
- Assign Team
- Remove Team

### Manager
- Team Details
- My Team User
- Other Team User

### User
- Team Details
- My Team USER

<br><br>

# Step: 02 - Folder & Dependencing

## Making api > auth folder
## Dependencing Package
- @prisma/client
- prisma
- bcryptjs
- jsonwebtoken

## Dev Dependencing Package
- @types/bcryptjs
- @types/jsonwebtoken    

<br><br>

# Step: 03 - Connection Database
- prisma > schema.prisma
- prisma.config.ts
- lib > prisma.ts