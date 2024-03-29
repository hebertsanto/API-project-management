import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import { CreateProfileDTO } from 'src/profile/dto/create-profile.dto';
import { ProfileService } from 'src/profile/services/profile/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @ApiResponse({ status: 200, description: 'Profile found successfully' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request : profile does not exist',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @Get('/:id')
  async getProfile(@Param('id') profile_id: string, @Res() res: Response) {
    const profile = await this.profileService.findProfileById(profile_id);

    return res.status(200).json({
      message: 'profile found',
      profile,
    });
  }

  @ApiResponse({ status: 201, description: 'Profile created successfully' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request : user does not exist',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @Post()
  async createProfle(
    @Body() createProfileDTO: CreateProfileDTO,
    @Res() res: Response,
  ) {
    const createProfile =
      await this.profileService.createProfile(createProfileDTO);

    return res.status(201).json({
      message: 'profile created successfully',
      profile: createProfile,
    });
  }

  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request : user does not exist',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @Put('/:id')
  async upateProfile(
    @Param('id') profile_id: string,
    @Body() updateProfile: CreateProfileDTO,
    @Res() res: Response,
  ) {
    const update = await this.profileService.findProfileByIdAndUpdate(
      profile_id,
      updateProfile,
    );
    return res.status(200).json({
      message: 'profile updated',
      update,
    });
  }
}
