import { DynamicModule, Module } from '@nestjs/common';
import Neis from '@my-school.info/neis-api';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [ConfigModule],
})
export class NeisModule {
  public static NeisInjectToken = 'NeisInjectToken';

  public static register(): DynamicModule {
    return {
      module: NeisModule,
      providers: [
        {
          inject: [ConfigService],
          provide: NeisModule.NeisInjectToken,
          useFactory: (configService: ConfigService) => {
            return new Neis({
              KEY: configService.get('NEIS_API_KEY'),
              Type: 'json',
            });
          },
        },
      ],
      exports: [NeisModule.NeisInjectToken],
    };
  }
}
