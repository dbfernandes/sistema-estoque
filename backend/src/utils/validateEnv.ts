import { cleanEnv, str, port, num } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    SALT_ROUNDS: num(),
  });
}

export default validateEnv;
