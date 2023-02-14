import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzBuzzService {

    getFizzBuzz(num: number) {
        let response: string[] = []
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                response.push('FizzBuzz')
            } else {
                if (i % 3 === 0) {
                    response.push('Fizz')
                }
                if (i % 5 === 0) {
                    response.push('Buzz')
                }
                if (i % 3 !== 0 && i % 5 !== 0) {
                    response.push(String(i))
                }
            }
        }
        return response
    }
}
