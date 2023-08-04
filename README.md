# BlueStoneExam
for job interviews 


 ### Start backend 
- open Terminal in Visual studio Code
- cd Backend
- npm install 
- npm start
  
### Start frontend
- open new Terminal in Visual studio Code
- cd Frontend
- cd BlueStoneExam
- npm install
- npm run dev

### Note Backend
Backend use node.js express.js  mongoose dotenv and nodemailer.

- env file not include in project github, it will come with email
- env should locate in Backend folder

In case PORT 9121 in use, Please closed it and npm start again or setting new PORT for backend and fix PORT every fetch `http://localhost:YOURPORT` in frontend with the PORT you set.

### Database
In case to connect databsae use MongoDB Compass
        
        mongodb+srv://go2pete:<password>@cluster0.nyyxcno.mongodb.net/

replace `<password>` with password in env file send with email
