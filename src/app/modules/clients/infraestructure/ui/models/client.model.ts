export class ClientModel {
    constructor(
        public dni: number | null,
        public names: string,
        public surnames: string,
        public visitReason: string,

    ) { }
}