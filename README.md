# BlueStoneExam
for job interviews 


 ### backend 
- cd Backend
- npm install 
- npm start
  
### frontend
- cd Frontend
- cd BlueStoneExam
- npm install
- npm run dev

### Note Backend
Backend use node.js express.js  mongoose dotenv and nodemailer.

- env file not include in project and come with email
- env should locate in Backend folder

In case PORT 9121 in use, Please closed it and npm start again or setting new PORT for backend and fix PORT every fetch `http://localhost:9121` in frontend with the PORT you set.

### Database
connect with MongoDB Compass
        
        mongodb+srv://go2pete:<password>@cluster0.nyyxcno.mongodb.net/

replace `<password>` with password in env file send with email