import { Component, Input, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import {
    faAngleRight,
    faAngleDown,
    faAngleLeft,
    faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
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
    faAngleUp = faAngleUp;

    isScrollRightHide = false;
    isScrollLeftHide = true;

    isScrollDownHide = false;
    isScrollUpHide = true;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.yearBlocks = this.magicCardsListService.yearBlocks;
    }

    onScroll(event: Event) {
        if (event === null) {
            return;
        }

        const target = event.target;
        if (target === null) {
            return;
        }
        const el: HTMLElement = target as HTMLElement;
        const heightLimit = el.scrollHeight - el.clientHeight - 70;
        const widthLimit = el.scrollWidth - el.clientWidth - 10;

        if (widthLimit > 0 && el.scrollLeft >= widthLimit) {
            this.isScrollRightHide = true;
        } else if (this.isScrollRightHide && el.scrollLeft < widthLimit) {
            this.isScrollRightHide = false;
        }

        if (el.scrollLeft > 10) {
            this.isScrollLeftHide = false;
        } else {
            this.isScrollLeftHide = true;
        }

        if (heightLimit === 0 || el.scrollTop >= heightLimit) {
            this.isScrollDownHide = true;
        } else if (this.isScrollDownHide && el.scrollTop < heightLimit) {
            this.isScrollDownHide = false;
        }

        if (el.scrollTop > 50) {
            this.isScrollUpHide = false;
        } else {
            this.isScrollUpHide = true;
        }
    }

    onScrollUp(setListRef: HTMLElement) {
        setListRef.scrollBy({
            top: -setListRef.offsetHeight * 0.65,
            behavior: 'smooth',
        });
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
