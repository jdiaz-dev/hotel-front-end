import { Constructor } from 'src/app/shared/types/constructor';
import { CONFIG } from 'src/config/config';

export function ListRoomMyxin<T extends Constructor<{}>>(Base: T = class {} as any) {
  return class extends Base {
    conditionRooms(receptionMode: string): number {
      let roomCondtion: number;
      if (receptionMode == CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
        roomCondtion = CONFIG.CONDITIONS.FREE.ID;
      } else {
        roomCondtion = CONFIG.CONDITIONS.BUSY.ID;
      }
      return roomCondtion;
    }
  };
}
