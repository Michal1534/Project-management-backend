import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/services/prisma/prisma.module';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';

@Module({
    controllers: [CommentController],
    providers: [CommentService],
    imports: [PrismaModule],
})
export class CommentModule {}
