# Mandatum

A website allowing you to add, pin and message friends. Website is fully responsive. I utilizes relational databases to save recent messages and load them when needed.

# Work in progress

Im still working on a messaging window.

## Technologies

- React
- Axios
- Cookies
- JWT

## Website setup
For starters install all modules using ```npm install```. And start hosting the website by typing ```npm run start```, after few seconds just simply click one of two links displayed in your command prompt and enjoy cruising my website. It is important to notice that for cruicial features of the site you will need a serverside backend that i developed [here](https://github.com/krzysiou/Mandatum-api) just follow the guide there to setup server for our website.

## Contents and features
The website is composed of many sub-websites which are being shown according to [router file](./src/router/index.tsx) which contains many routes and redirects.

### Home [component](./src/pages/home/Home.tsx)

![home](https://user-images.githubusercontent.com/60892747/163669920-86668bf5-42f9-41f0-a981-b9cf17a0fff3.png)

It briefly explains the main purpose of the site and lets you ```log in``` or  ```sign in```. After logging or signing in you will be provided with and ```access token``` that will be stored in cookies. it will allow you to skip logging process and be redirected automatically to your account page. The page is fully responsive. It have a dropdown menu available when the window gets small.

![home responsive](https://user-images.githubusercontent.com/60892747/163669985-ad470836-e1d9-433f-88be-0e90b4a7f435.png)

### Log in [component](./src/pages/login/Login.tsx)

![Zrzut ekranu 2022-04-16 o 11 48 30](https://user-images.githubusercontent.com/60892747/163670402-d3756974-42df-466a-91d0-595fc8d03df5.png)

Basic Log in form. Two input forms that gather data which will be sent to the server. It also contains button which allows you to redirect to ```Sign in``` if you don't have an account.

### Sign in [component](./src/pages/register/Register.tsx)

![sign in](https://user-images.githubusercontent.com/60892747/163670065-8afdd0dc-b391-4d22-a7d0-7963294f3c9f.png)

Basic Sign in form. Three input forms that gather data which will be sent to the server. It also contains button which allows you to redirect to ```Log in``` if u already have an account.

### Friends [component](./src/pages/friends/Friends.tsx)

![friends](https://user-images.githubusercontent.com/60892747/163670086-fd270063-cb4d-4e91-b556-2fa67392ddac.png)

It allows you to add new people that are registered on the website. Also you can change your username if it's not already taken. The friend window allows you to pin or remove friends from your friend list. Pinned friends will be displayed in ``` pinned ``` tab.

### Pinned [component](./src/pages/pinned/Pinned.tsx)

![pinned](https://user-images.githubusercontent.com/60892747/163670171-a648d882-25de-4798-b860-522fd8058983.png)

A tab that displays previously pinned friends. It allows users to navigate their friendlist quicker.

### Recent [component](./src/pages/recent/Recent.tsx)

![recent](https://user-images.githubusercontent.com/60892747/163670210-f5d9619b-2452-448f-bf70-f4c375362911.png)

It displays people that you have recently texted.

## Debugging

If something does not work properly start your debug process by deleting cookies provided by localhost.
