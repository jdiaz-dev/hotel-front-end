import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { CategoryData } from '../../interfaces/category-data.interface';
import { RoomCategoriesPersitenceService } from '../../out/room-categories-persitence.service';
import { CreateUpdateCategoryComponent } from '../modals/create-update-category.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-category-collection',
    templateUrl: './category-collection.component.html',
    styleUrls: ['./category-collection.component.scss'],
})
export class CategoryCollectionComponent implements OnInit, OnChanges, OnDestroy {
    @Input('reload') reloadThisComponent!: number;
    roomCategories: CategoryData[] = [];
    displayedColumns: string[] = ['Category', 'Price', 'EditButton', 'RemoveButton'];
    getRoomCategoriesSubs!: Subscription;

    constructor(private dialog: MatDialog, private roomCategoriesPersitenceService: RoomCategoriesPersitenceService) {}
    ngOnInit(): void {
        this.loadRoomCategories();
    }
    ngOnChanges() {
        if (this.reloadThisComponent) this.loadRoomCategories();
    }
    ngOnDestroy() {
        this.getRoomCategoriesSubs.unsubscribe();
    }
    loadRoomCategories() {
        this.getRoomCategoriesSubs = this.roomCategoriesPersitenceService
            .getRoomCategories()
            .subscribe((response: CategoryData[]) => {
                this.roomCategories = response;
            });
    }
    editCategoryDiaglog(categorydata: CategoryData) {
        let dialogRef = this.dialog.open(CreateUpdateCategoryComponent, { data: categorydata, width: '40%' });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) this.loadRoomCategories();
        });
    }
    removeCategoryDialog(categoryId: number) {
        const toCompleteDialog: ICustomMessage = {
            title: 'Eliminar categoría',
            toCompleteDescription: 'eliminar esta categoría',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.roomCategoriesPersitenceService.removeRoomCategory(categoryId).subscribe((response) => {
                    if (response) this.loadRoomCategories();
                });
            }
        });
    }
}
