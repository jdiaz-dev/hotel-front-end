import { Iconfig } from './config.interface';

export const CONFIG: Iconfig = {
    LOCAL_STORAGE: {
        DATA_USER: 'data_user',
        DATA_CASH: 'data_cash',
    },
    MESSAGES: {
        IMPOSSIBLE_OPEN_CASH: 'No puedes abrir una caja nueva, necesitas cerrarla',
    },
    RECEPTION_MODE: {
        INPUT_HOUSTING: 'input-housting',
        OUTPUT_HOUSTING: 'output-housting',
        PRODUCT_SALES: 'product_sales',
    },
    CASH_MODE: {
        OPEN_CASH: 'abrir-caja',
        CLOSE_CASH: 'cerrar-caja',
    },
    CONDITIONS: {
        FREE: {
            ID: 1,
            NAME: 'libre',
        },
        BUSY: {
            ID: 2,
            NAME: 'ocupado',
        },
        CLEANING: {
            ID: 3,
            NAME: 'limpieza',
        },
    },
};
