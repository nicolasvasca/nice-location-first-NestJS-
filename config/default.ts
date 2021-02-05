import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname,'..','src');

export default {
    database: {
        url: 'postgres://app:app@localhost:5433/test',
    },
    orm: {
        entities: [`${SOURCE_PATH}/**/*.entity.ts`],
        synchornize: false,
    },
    public:{
        path: resolve(__dirname,'..','public')
    },
    templates:{
        path: resolve(__dirname,'..','views'),
    },
}