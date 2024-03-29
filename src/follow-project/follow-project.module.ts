import { Module } from '@nestjs/common';
import { FollowProjectService } from './service/follow-project/follow-project.service';
import { FollowProjectController } from './controller/follow-project/follow-project.controller';
import { UserService } from 'src/user/services/user/user.service';
import { ProjectsService } from 'src/projects/services/projects/projects.service';
import { HashService } from 'src/hash/service/hash/hash.service';

@Module({
  providers: [FollowProjectService, UserService, ProjectsService, HashService],
  controllers: [FollowProjectController],
})
export class FollowProjectModule {}
