import { Injectable } from '@nestjs/common';

@Injectable()
export class MostSecondStringService {

    getMostSecondString(str: string) {
        const arr: string[] = str.split('')
        let data: {
            key: string;
            value: number;
        }[] = []
        let response: string = ""
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                data.push({ key: arr[0], value: 1 })
            }
            let objIndex = data.findIndex((obj => obj.key === arr[i]))
            if (objIndex === -1) {
                data.push({ key: arr[i], value: 1 })
            }
            else {
                if (i !== 0 && arr[i] === data[objIndex].key) {
                    data[objIndex].value += 1
                }
            }
        }
        const max = Math.max(...data.map((value) => value.value))
        const mostString = data
            .sort((a, b) => (a.value > b.value ? -1 : 0))
            .filter((value) => value.value < max)
            .forEach((value, index, array) => {
                if (value.value === array[0].value) {
                    response = response + value.key
                } else {
                    arr.length = index + 1; // break loop
                }
            })
        return response
    }
}
