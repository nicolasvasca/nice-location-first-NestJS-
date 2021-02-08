import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "../config/config.service";

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService){}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            url:  this.configService.get<string>('database.url'),
            entities: this.configService.get<string[]>('orm.entities'),
            synchronize: this.configService.get<boolean>('orm.synchornize'),
            migrationsRun: this.configService.get<boolean>('orm.migrationsRun'),
            migrations: this.configService.get<string[]>('orm.migrations'),
            //cli: this.configService.get<string>('orm.cli.migrationsDir')
        }
    }
    
}