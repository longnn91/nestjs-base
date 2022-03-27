import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'adminadmin',
    database: 'test',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}

export default config;