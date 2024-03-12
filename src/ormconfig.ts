import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '34mlgsnil',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts, .js}'],
  synchronize: true,
};

export default config;
