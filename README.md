# DevTinder

 - Created a Vite + React application
 - Remove unnecessary code and create a Hello World app
 - Install Tailwind CSS
 - Add NavBar component to App.jsx  
 - Create a separate NavBar Component file
 - Install react router dom
 - Create BrowserRouter > Routes > Route=/ element = Body > RouteChildren
 - Create an Outlet in your Body Component
 - Create a Footer
 - Create a Login Page
 - Install axios
 - CORS - install cors in backend => add middleware to with configurations: origin, credentials: true
 - Whenever you are making API call so pass axios => { withCredentials: true}
 - Install react-redux + @reduxjs/toolkit => configureStore => Provider at app.js => createSlice => add reducer to store 
 - Add redux devtools in chrome
 - Login and see if your data is coming properly in the store
 - Navbar should update as soon as user logs in 
 - Refactor our code to add constants file 
 - You should not be able to access other routes without login
 - If token is not present, redirect user to login page
 - Logout feature
 - Get the feed and add the feed in the store 
 - build the user card on feed
 - Edit profile feature
 - Show Toast Message on save of profile
 - New page - See my all connections
 - New page - See my all connection request
 - Feature - Accept/Reject connection request
 - Feature - Interested/Ignore connection request
 - SignUp New User
 - Testing


 Body 
    NavBar
    Route=/ => feed Page
    Route=/login => Login Page
    Route=/connection => Connection Page
    Route=/profile => Profile

   # Deployment
   - Signup om AWS
   - Launch instance 
   - chmod 400  <secret>.pem
   - ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-28-192.eu-north-1.compute.amazonaws.com
   - Install node version same as your system
   - Git clone
   - Frontend
      - npm install -> dependencies install
      - npm run build
      - sudo apt update
      - sudo apt install nginx
      - sudo systemctl start nginx
      - sudo systemctl enable nginx
      - copy code from dist(build files) to /var/www/html/
      - sudo scp -r dist/* /var/www/html/
      - Enable port :80 of your instance
      - allowed ec2 instance public IP on mongodb server
      - npm install pm2 -g
      - pm2 start npm -- start
      - pm2 logs
      - pm2 list , pm2 flush <name>, pm2 delete <name>
      - pm2 start npm --name "devTinder-backend" -- start (for giving custom name)
      - config nginx - /etc/nginx/sites/-available/default
      - restart nginx: sudo systemctl daemon-reload and sudo systemctl restart nginx
      - Modify the BASE_URL in frontend project to "/api




      Frontend - http://13.60.28.192/
      Backend - http://13.60.28.192:3000 

      # nginx config: 
          server_name 13.60.28.192;

        location /api/ {
            proxy_pass http://localhost:3000/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
         }

   # Adding a custom domain name
      - purchased domain name from godaddy
      - signup on cloudflare & add a new domain name
      - change the nameservers on godaddy and point it to cloudflare 
      - wait for sometime till your nameservers are updated
      - DNS record: A devtinder.in http://13.60.28.192/
      - Enable SSL for website

   # Sending Emails via SES
      - Create a IAM user  
      - Give access to AmazonSESFullAccess
      - Amazon SES: Create an Identity 
      - Verify your domain name 
      - Verify an email address identity 
      - Install AWS SDK - v3
      - Code Example : https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascript/example_code/ses/ses_sendemail.js 
      - Setup SesClient 
      - Access Credentials should be created in IAM under SecurityCredentials Tab
      - Add the credentials to the env file 
      - Write code for SESClient 
      - Write code for sending email address 
      - Make the email dynamic by  passing more params to the run function 

   # Razorpay Payment Gateway Integration
      - Sign up on Razorpay & complete KYC
      - Created a UI for premium page
      - Created an API for create order in backend
      - Added my key and secret in env file
      - Initialized razorpay in utils
      - creating order on razorpay 
      - create Schema and model
      - saved the order in payments collection
      - make the API dynamic 
      - Setup Razorpay webhook on your live API
      - Ref: https://github.com/razorpay/razorpay-node/tree/master/documents
      - Ref: https://github.com/docs/payments/server-integration/node-js/integration-steps/#integrate-with-razorpay-payment-gateway
      - Ref:  https://github.com/docs/webhooks/validate-test/
      - Ref:  https://razorpay.com/docs/webhooks/payloads/payments/

   # Real Time Chat using Websocket(Socket.io)
      - 