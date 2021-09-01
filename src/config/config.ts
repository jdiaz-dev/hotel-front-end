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
    CONDITIONS: {
        FREE: {
            ID: 1,
            NAME: 'libre'
        },
        BUSY: {
            ID: 3,
            NAME: 'ocupado'
        },

    },

}