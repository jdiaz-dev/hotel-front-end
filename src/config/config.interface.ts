export interface Iconfig {
    LOCAL_STORAGE: {
        DATA_USER: string,
        DATA_CASH: string
    },
    MESSAGES: {
        IMPOSSIBLE_OPEN_CASH: string
    },
    RECEPTION_MODE: {
        INPUT_HOUSTING: string
        OUTPUT_HOUSTING: string
        PRODUCT_SALES: string
    },
    CONDITION_IDS: {
        CONDITION_FREE_ID: number,
        CONDITION_BUSY_ID: number,
    }
}