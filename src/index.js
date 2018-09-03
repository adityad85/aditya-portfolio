import 'babel-polyfill';
import app from './server';
import CONSTANTS from './lib/constants';

const { PORT } = CONSTANTS;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
