export class AppUtil {
    static isNullOrEmpty(s: string) {
        return s === undefined || s === null || s === '';
    }

    static isNullEmpty(data: any) {
        return data === undefined || data === null;
    }

    static isListNullOrEmpty(list: any[]) {
        return list === undefined || list === null || list.length === 0;
    }

    static validateEmail(text: string) {
        const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        return (text && EMAIL_REGEXP.test(text));
    }

}

