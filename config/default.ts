import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname,'..','src');

export default {
    database: {
        url: 'postgres://postgres:123456@localhost:5433/test',
    },
    orm: {
        entities: [`${SOURCE_PATH}/**/*.entity.ts`] ,
        synchornize: false,
        migrationsRun: true,
        migrations: [
            resolve(__dirname, 'migrations/*{.ts,.js}')
          ],
        cli:{
        migrationsDir: './migrations'
        }
          
    },
    public:{
        path: resolve(__dirname,'..','public')
    },
    templates:{
        path: resolve(__dirname,'..','views'),
    },
}