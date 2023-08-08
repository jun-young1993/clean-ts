import { getEnv } from '@app/util/configValue';
import { config } from 'dotenv';

export const DEVELOPMENT = 'development';

config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const PORT = Number(getEnv('PORT',"2000"));