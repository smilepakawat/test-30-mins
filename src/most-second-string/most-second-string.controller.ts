import { Controller, Get, Param } from '@nestjs/common';
import { MostSecondStringService } from './most-second-string.service';

@Controller('most-second-string')
export class MostSecondStringController {

    constructor(private readonly mostSecondStringService: MostSecondStringService) { }

    @Get(':str')
    getMostSeondString(
        @Param('str') str: string
    ) {
        return this.mostSecondStringService.getMostSecondString(str)
    }
}
