import { CONFIG } from "src/config/config";

type Constructor<T> = new (...args: any[]) => T;

export function ListRoomMyxin<T extends Constructor<{}>>(Base: T = class { } as any) {
    return class extends Base {
        conditionRooms(receptionMode: string): number {
            let roomCondtion: number
            if (receptionMode == CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
                roomCondtion = CONFIG.CONDITION_IDS.CONDITION_FREE_ID
            } else {
                roomCondtion = CONFIG.CONDITION_IDS.CONDITION_BUSY_ID
            }
            return roomCondtion
        }
    };
}
