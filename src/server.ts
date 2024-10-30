import App from './app.js';
import { Database } from './database.js';

const PORT = 3333;

await Database.loadUsers(10);

App.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
