import { ClassType } from 'class-transformer/ClassTransformer';

import * as global from './global';
import {TaskCode} from './global';
import {HttpRequest} from './HttpRequest';
import {classToPlain, plainToClass} from 'class-transformer';

import {BaseResponse} from './BaseResponse';
import { Cat } from '../get';

export class ApiGenerator {
    static getTest() {
        const httpreq = new HttpRequest(global.TEST_API);
        httpreq.classTypeValue = Cat;
        httpreq.taskCode = TaskCode.TEST_API;
        return httpreq;
      }
    
}


export class JsonParser {
    static parseJson<T>(response: any, type: ClassType<T>): T {
        const parsedResponse = plainToClass(type, response as object);
        return parsedResponse;
    }

    static parseJsonString(response: any, type: ClassType<any>): any {
        const parsedResponse = plainToClass(type, response as object);
        return parsedResponse;
    }

    static parseJsonArray(response: any, type: ClassType<any>): any {
        const parsedResponse = plainToClass(type, response);
        return parsedResponse;
    }


}
