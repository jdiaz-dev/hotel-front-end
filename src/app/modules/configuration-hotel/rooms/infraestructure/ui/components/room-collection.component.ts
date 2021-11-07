import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { IRoomsDataResponse, RoomData } from '../../interfaces/room.data';
import { RoomsPersistenceService } from '../../out/rooms.service';
import { CreateUpdateRoomComponent } from '../modals/create-update-room/create-update-room.component';
import { Subscription } from 'rxjs';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { IKeywordToSearchDip } from 'src/app/shared/components/searcher/dip/keyword-to-search';
import { SearcherService } from 'src/app/shared/components/searcher/searcher.service';

@Component({
    selector: 'app-room-collection',
    templateUrl: './room-collection.component.html',
    styleUrls: ['./room-collection.component.scss'],
})
export class RoomCollectionComponent extends BasePaginator implements OnInit, OnChanges, OnDestroy {
    private keywordToSearchDip: IKeywordToSearchDip;
    private theKeyword!: string;
    @Input('reload') reloadThisComponent!: number;
    rooms!: RoomData[];
    displayedColumns: string[] = ['Name', 'Category', 'Price', 'Details', 'Nivel', 'EditButton', 'RemoveButton'];
    totalRooms!: number;

    getAllRoomsSubs!: Subscription;
    removeRoomSubs!: Subscription;
    keywordToSearchSubs!: Subscription;

    constructor(
        private dialog: MatDialog,
        private readonly roomsPersistenceService: RoomsPersistenceService,
        searcherService: SearcherService,
    ) {
        super();
        this.keywordToSearchDip = searcherService;
    }
    ngOnChanges() {
        if (this.reloadThisComponent) this.loadRooms();
    }
    ngOnInit(): void {
        this.theKeyword = '';
        this.loadRooms();
        this.obtainKeyword();
    }
    ngOnDestroy() {
        if (this.getAllRoomsSubs) this.getAllRoomsSubs.unsubscribe();
        if (this.removeRoomSubs) this.removeRoomSubs.unsubscribe();
        if (this.keywordToSearchSubs) this.keywordToSearchSubs.unsubscribe();
    }
    loadRooms(offset?: number) {
        let queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
            searchText: this.theKeyword,
        };
        this.getAllRoomsSubs = this.roomsPersistenceService
            .getAllRooms(queries)
            .subscribe((response: IRoomsDataResponse) => {
                console.log('-------------all rooms', response);
                this.totalRooms = response.count;
                this.rooms = response.rows;
            });
    }
    editRoomDialog(categorydata: RoomData) {
        let dialogRef = this.dialog.open(CreateUpdateRoomComponent, { data: categorydata, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.loadRooms();
            }
        });
    }
    removeRoomDialog(room: RoomData) {
        const toCompleteDialog: ICustomMessage = {
            title: 'Eliminar habitación',
            toCompleteDescription: 'eliminar esta habitación',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.removeRoomSubs = this.roomsPersistenceService
                    .removeRoom(room.level.id, room.id)
                    .subscribe((response) => {
                        if (response) this.loadRooms();
                    });
            }
        });
    }
    loadNextRooms(offset: number) {
        this.loadRooms(offset);
    }
    private obtainKeyword() {
        this.keywordToSearchSubs = this.keywordToSearchDip.keywordToSearch$.subscribe((keyword: string) => {
            this.theKeyword = keyword;
            this.loadRooms();
        });
    }
}
