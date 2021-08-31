import { Iconfig } from "./config.interface";

export const CONFIG: Iconfig = {
    LOCAL_STORAGE: {
        DATA_USER: 'data_user',
        DATA_CASH: 'data_cash'
    },
    MESSAGES: {
        IMPOSSIBLE_OPEN_CASH: 'No puedes abrir una caja nueva, necesitas cerrarla'
    },
    RECEPTION_MODE: {
        INPUT_HOUSTING: 'input-housting',
        OUTPUT_HOUSTING: 'output-housting',
        PRODUCT_SALES: 'product_sales',
    },
    CONDITION_IDS: {
        CONDITION_FREE_ID: 1,
        CONDITION_BUSY_ID: 3,
    }
}