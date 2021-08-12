import { Component, Input, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { faAngleRight, faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { MagicSetYearBlock } from '../magic-card-list/model/magic-set-year-block.model';

@Component({
    selector: 'app-magic-set-list',
    templateUrl: './magic-set-list.component.html',
    styleUrls: ['./magic-set-list.component.scss'],
})
export class MagicSetListComponent implements OnInit {
    @Input() userId: string | undefined;
    cardSetsArray!: string[];
    yearBlocks!: MagicSetYearBlock[];

    // FontAwesome
    faAngleRight = faAngleRight;
    faAngleLeft = faAngleLeft;
    faAngleDown = faAngleDown;

    isScrollRightHide = false;
    isScrollLeftHide = true;

    isScrollDownHide = false;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.yearBlocks = this.magicCardsListService.yearBlocks;
    }

    onScroll(event: Event) {
        if (event === null) {
            return;
        }
        const target = event.srcElement;
        if (target === null) {
            return;
        }
        const el: HTMLElement = target as HTMLElement;
        const heightLimit = el.scrollHeight - el.clientHeight;
        const widthLimit = el.scrollWidth - el.clientWidth - 1;

        if (widthLimit > 0 && el.scrollLeft >= widthLimit) {
            this.isScrollRightHide = true;
        } else if (this.isScrollRightHide && el.scrollLeft < widthLimit) {
            this.isScrollRightHide = false;
        }

        if (el.scrollLeft > 0) {
            this.isScrollLeftHide = false;
        } else {
            this.isScrollLeftHide = true;
        }

        if (heightLimit === 0 || el.scrollTop >= heightLimit) {
            this.isScrollDownHide = true;
        } else if (this.isScrollDownHide && el.scrollTop < heightLimit) {
            this.isScrollDownHide = false;
        }

        // console.log(event.srcElement.scrollLeft)
        // if (this.isScrollVisible) {
        //     this.isScrollVisible = false;
        // }
    }

    onScrollDown(setListRef: HTMLElement) {
        setListRef.scrollBy({
            top: setListRef.offsetHeight * 0.65,
            behavior: 'smooth',
        });
    }

    onScrollRight(setListRef: HTMLElement) {
        setListRef.scrollBy({
            left: setListRef.offsetWidth * 0.65,
            behavior: 'smooth',
        });
    }

    onScrollLeft(setListRef: HTMLElement) {
        setListRef.scrollBy({
            left: -setListRef.offsetWidth * 0.65,
            behavior: 'smooth',
        });
    }
}
