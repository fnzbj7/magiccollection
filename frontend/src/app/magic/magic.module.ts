import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyCardComponent } from './modify-card/modify-card.component';
import { SharedModule } from '../shared/shared.module';
import { ModifyPreviewComponent } from './modify-card/modify-preview/modify-preview.component';
import { MagicSetListComponent } from './magic-set-list/magic-set-list.component';
import { MagicSetIconComponent } from './magic-set-list/magic-set-icon/magic-set-icon.component';
import { FormsModule } from '@angular/forms';
import { MagicCardComponent } from './magic-card-list/magic-card/magic-card.component';
import { MagicCardAmountDirective } from './magic-card-list/magic-card/magic-card-amount.directive';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MagicCardListComponent } from './magic-card-list/magic-card-list.component';
import { MagicCardRarityFilterComponent } from './magic-card-list/magic-card-rarity-filter/magic-card-rarity-filter.component';
import { MagicCardModalComponent } from './magic-card-list/magic-card-modal/magic-card-modal.component';
import { MagicCardAftermathComponent } from './magic-card-list/magic-card-modal/card-layouts/aftermath/magic-card-aftermath.component';
import { MagicCardMeldComponent } from './magic-card-list/magic-card-modal/card-layouts/meld/magic-card-meld.component';
import { MagicCardNormalComponent } from './magic-card-list/magic-card-modal/card-layouts/normal/magic-card-normal.component';
import { MagicCardSplitComponent } from './magic-card-list/magic-card-modal/card-layouts/split/magic-card-split.component';
import { MagicCardTransformComponent } from './magic-card-list/magic-card-modal/card-layouts/transform/magic-card-transform.component';
import { MagicRoutingModule } from './magic-routing.module';
import { PaginationModule } from '../shared/pagination/pagination.module';
import { ModifyFormComponent } from './modify-card/modify-form/modify-form.component';

@NgModule({
    declarations: [
        ModifyCardComponent,
        ModifyPreviewComponent,
        ModifyFormComponent,
        MagicSetListComponent,
        MagicSetIconComponent,
        MagicCardComponent,
        MagicCardAmountDirective,
        MagicCardListComponent,
        MagicCardRarityFilterComponent,
        MagicCardModalComponent,
        MagicCardMeldComponent,
        MagicCardTransformComponent,
        MagicCardSplitComponent,
        MagicCardAftermathComponent,
        MagicCardNormalComponent,
    ],
    entryComponents: [MagicCardModalComponent],
    imports: [
        CommonModule,
        MagicRoutingModule,
        SharedModule,
        FormsModule,
        LazyLoadImageModule,
        PaginationModule,
    ],
})
export class MagicModule {}
