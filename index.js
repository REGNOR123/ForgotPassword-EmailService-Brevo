const Sib = require("sib-api-v3-sdk");
require("dotenv").config();

const client = Sib.ApiClient.instance; // getting api client
const apiKey = client.authentications["api-key"]; // getting api key object from the client
apiKey.apiKey = process.env.API_KEY; //Now setting the actual api-key into api object
const tranEmailApi = new Sib.TransactionalEmailsApi(); //Now we will create aur transectional email api instance

const sender = {
  email: "sender@gmail.com",
  name: "Amit Kumar",
};
const receiver = [{ email: "receiver@gmail.com" }];
tranEmailApi
  .sendTransacEmail({
    sender,
    to: receiver,
    subject: "Forgot Paswword",
    textContent: `Kindly, Reset your Password`,
    htmlContent: `

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333333;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            margin-bottom: 20px;
        }
        .email-header img {
            max-width: 150px;
        }
        .email-body {
            line-height: 1.6;
        }
        .reset-button {
            display: inline-block;
            margin: 20px 0;
            padding: 10px 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
        }
        .reset-button:hover {
            background-color: #0056b3;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #999999;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-body">
            <h1>Reset Your Password</h1>
            <p>Dear User,</p>
            <p>We received a request to reset your password for your <strong>Amit Kumar Pvt. Ltd.</strong> account. If you did not make this request, you can safely ignore this email.</p>
            <p>To reset your password, click the button below:</p>
            <p style="text-align: center;">
                <a href="[Reset Link]" class="reset-button">Reset My Password</a>
            </p>
            <p>This link will expire in <strong>05:00 Minutes</strong> for security reasons. If the link has expired or you encounter any issues, please visit our website and initiate a new password reset request.</p>
            <p>If you have any questions or need further assistance, feel free to contact our support team at <a href="example@gmail.com">example@gmail.com</a>.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Amit Kumar Pvt. Ltd. All rights reserved.</p>
        </div>
    </div>
</body>
`,
  })
  .then(console.log)
  .catch(console.log);
