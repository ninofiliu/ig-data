export enum IgDataErrorCode {
    INVALID_URL = 'INVALID_URL',
    PRIVATE_USER = 'PRIVATE_USER',
    NONEXISTANT_USER = 'NONEXISTANT_USER',
    NONEXISTANT_PUBLICATION = 'NONEXISTANT_PUBLICATION',
}

export default class IgDataError extends Error {
    code: IgDataErrorCode;
    data: any;
    constructor(code: IgDataErrorCode, data?: any) {
        super('IgDataError');
        this.code = code;
        this.data = data || {};
        this.message = `${this.code} ${JSON.stringify(this.data)}`;
    }
}