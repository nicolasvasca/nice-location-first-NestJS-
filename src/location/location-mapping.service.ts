import { MappingService } from "src/common/mapping.service";
import { LocationDto } from "./location.dto";
import { Location } from "./location.entity";

export class LocationMappingService extends MappingService{
    public addMapping(): void {
        automapper.createMap(Location.name,LocationDto.name)
    }

}