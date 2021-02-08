import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { LocationMappingService } from './location-mapping.service';
import {LocationController} from './location.controller'
import { Location } from './location.entity';
import { LocationService } from './location.service';

@Module({
    controllers: [
        LocationController,
    ],
    imports: [TypeOrmModule.forFeature([Location]), CommonModule],
    providers: [LocationService,LocationMappingService],
})
export class LocationModule {}
