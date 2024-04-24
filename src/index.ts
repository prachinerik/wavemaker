import express  from 'express';
import postsUsers from "./routes/user";
import postsUsersUserPreferences from "./routes/selectedOptions";
import getUserPreferences from "./routes/options";
import getApplicablePrograms from './controllers/programs';


//import connection from "./database";
const port = 8080;
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('GET request received at /');
  res.send('Hello World!');
});

app.use('/posts', postsUsers);
app.use('/gets',getUserPreferences);
app.use('/posts',postsUsersUserPreferences);

app.use('/programs',getApplicablePrograms);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.status(404).send('404 - Not Found' + res.json + res.send);
  res.status(400).send('400 ' + res.json + res.send);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });




