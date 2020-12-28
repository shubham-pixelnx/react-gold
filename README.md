## Production Build

[wedios.co](https://wedios.co)

## Wedios V2

All in one video editor

## Credentials

### Admin

Email: wedios.co@gmail.com
Password: SJm3rzuXmU972fwf

### Normal User

Email: team@wedios.co
Password: teamwediosrocks

## Steps To Create Build on Wedios.co

### Step 1 - SSH Login

Run this command to login **in the directory where [wedios_co.pem](https://drive.google.com/file/d/1pRTuB_5zjV-YGKcgio8nI1086fxrTYIA/view?usp=sharing) file is present**

#### `ssh -i wedios_co.pem shubham@wedios.co`

### Step 2 - Navigate into Project folder

Navigate into the git repo on server with this command

#### `cd public/`

### Step 3 - Pull

Pull the latest code

#### `git pull origin frontend`

Install/Update Dependencies

#### `npm install`

### Step 4 - Build

Run build command, this will automatically remove existing build and put a new one. Additionally it will copy .htaccess and db.php to the root folder which is /home/wedios/public_html/frontend/wedios-react-node/build

#### `npm run build`
