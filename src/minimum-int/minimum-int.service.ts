import { Injectable } from '@nestjs/common';

@Injectable()
export class MinimumIntService {
  getMinimumInt(body: number[]) {
    let response: number;
    const arr: number[] = body
      .filter((value) => value > 0)
      .sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
      if (arr[0] !== 1) {
        console.log("mind")
        response = 1
        break
      }
      if (arr[i] + 1 !== arr[i + 1]) {
        response = arr[i] + 1
        console.log(arr[i])
        break
      }
    }

    return response;
  }
}
