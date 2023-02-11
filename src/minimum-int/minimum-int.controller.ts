import { Controller, Get, Body } from '@nestjs/common';
import { MinimumIntService } from './minimum-int.service';

@Controller('minimum-int')
export class MinimumIntController {

    constructor(private readonly minimumIntService: MinimumIntService) { }

    @Get('')
    getMinimumInt(
        @Body() body: number[]
    ) {
        return this.minimumIntService.getMinimumInt(body)
    }
}
