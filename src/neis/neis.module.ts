import { DynamicModule, Module } from '@nestjs/common';
import { EasyconfigModule, EasyconfigService } from 'nestjs-easyconfig';
import Neis from '@my-school.info/neis-api';

@Module({
  imports: [EasyconfigModule],
})
export class NeisModule {
  public static NeisInjectToken = 'NeisInjectToken';

  public static register(): DynamicModule {
    return {
      module: NeisModule,
      providers: [
        {
          inject: [EasyconfigService],
          provide: NeisModule.NeisInjectToken,
          useFactory: (configService: EasyconfigService) => {
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
