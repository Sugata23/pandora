import app from './app.js';
import { connectToDB } from './db/connection.js';
//connection and listener
const PORT = process.env.PORT || 5000;
connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port 5000');
    });
})
    .catch((error) => {
    console.error('Error connecting to database: ', error);
});
//# sourceMappingURL=index.js.map