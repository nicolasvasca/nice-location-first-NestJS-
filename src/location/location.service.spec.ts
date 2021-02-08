import { Test, TestingModule } from '@nestjs/testing';
import { Generated, Repository } from 'typeorm';
import { Location } from './location.entity';
import { LocationService } from './location.service';
import * as sinon from 'sinon';
import { GenericFactory } from '../common/generic.factory';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;
  let mock: sinon.SinonMock;

  beforeEach(async () => {
    mockRepository = { } as Repository<Location>;
    mockRepository = Object.assign(mockRepository, {
      find: new Function(),
    });
    mock = sinon.mock(mockRepository);
    mock.expects('find').resolves([
      GenericFactory.create<Location>(Location, {
        id: 'a2891a7f-df6f-4748-8bcc-5c669e5f9bb3',
        name: 'Location',
      }),
      GenericFactory.create<Location>(Location, {
        id: 'b313b81c-6ed0-4f91-a93b-91b9dd0655a1',
        name: 'Location 2',
      })
    ]);
    service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
        id: 'a2891a7f-df6f-4748-8bcc-5c669e5f9bb3',
        name: 'Location',
      },
      {
        id: 'b313b81c-6ed0-4f91-a93b-91b9dd0655a1',
        name: 'Location 2',
      }
    ])
  });
});
