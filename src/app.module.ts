import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerBehindProxyGuard } from './common/guards/throttler-behind-proxy.guard';
import { AppController } from './app.controller';
import { RecipesModule } from './recipe/recipes.module';
import { MeasurementsModule } from './measurements/measurements.module';
import { ProductUsersModule } from './product-users/product-users.module';
import { ProductsModule } from './products/products.module';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 50,
    }),
    AuthModule,
    UserModule,
    RecipesModule,
    WorkoutsModule,
    MeasurementsModule,
    ProductUsersModule,
    ProductsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
