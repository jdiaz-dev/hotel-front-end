interface ICondition {
    ID: number;
    NAME: string;
}

export interface Iconfig {
    LOCAL_STORAGE: {
        DATA_USER: string;
        DATA_CASH: string;
    };
    MESSAGES: {
        IMPOSSIBLE_OPEN_CASH: string;
    };
    RECEPTION_MODE: {
        INPUT_HOUSTING: string;
        OUTPUT_HOUSTING: string;
        PRODUCT_SALES: string;
    };
    CASH_MODE: {
        OPEN_CASH: string;
        CLOSE_CASH: string;
    };
    CONDITIONS: {
        FREE: ICondition;
        BUSY: ICondition;
    };
}
