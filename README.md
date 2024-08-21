Advanced E-Commerce Application.
Welcome to The Advanced E-Commerce Application. This App is designed as an Ecommerce website That allows users to browse products, add products to a cart, filter and categorize products. In additon to this there are account functions such as Login, Create account, 
update account, and delete account.

Pages
1. Login Page - The Login page will allow users that have created an account to log in. As well as navigate to the Create User page that will allow new users to create an account.
2. Homepage - The Homepage displays the Fake Store api product catalog. Here you can browse the catalog and add items to the cart by pressing the add to cart button at the bottom of each product card. You can use the filter section to search an item by name, set a maximum and minimum price, and filter the catalog by category. There is also multiple links to logout, Update Account, Delete Account and Cart (includes a current count of ammout of items in cart). Finally there is a language option that allows the user to switch between english and spanish.
3. Cart - The Shopping cart displays all currently stored items within the cart, a total count of the items and a total price of the items. there are also functionalities to checkout and return to home by selecting the corresponding buttons, and buttons on every current cart item that allows the user to update the quantity of the items selected. Lastly previous orders have been loaded and displayed at the bottom of the screen.
4. Update Profile - The update profile link displays a form with the current user data uploaded. form here the user can alter the current information and submit.
5. Delete Profile - This page will display a warning message as well a a Delete Account button. Clicking the button will display a promt that will make sure the user want to delete the account. after deleting the account the account information will be wiped from the local storage and return the user to the Login page.

 Additional Functionalities
  - Logout - The Logout function clears the user information from the sessionStorage and returns the user to the homepage.
  - Unit Testing - There are 2 seperate unit test for the AddProduct.jsx file. To run the unit test use the command npm test in the code terminal.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
