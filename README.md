## Production Build

[example.com](https://example.com)

## PROJECT_NAME

PROJECT_DESCRIPTION

## Credentials

### Admin

Email: admin@example.com
Password: 6543210

### Normal User

Email: user@example.com
Password: 0123456

## Steps To Create Build

### Step 1 - SSH Login

#### `ssh example`

### Step 2 - Navigate into Project folder

Navigate into the git repo on server with this command

#### `cd public/`

### Step 3 - Pull

Pull the latest code

#### `git pull origin master`

Install/Update Dependencies

#### `npm install`

### Step 4 - Build

Run build command, this will automatically remove existing build and put a new one. Additionally it will copy .htaccess and db.php to the root folder

#### `npm run build`
