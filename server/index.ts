import { express } from 'express';

const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`EXAMPLE app listening on port ${port}`)
});