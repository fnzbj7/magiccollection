import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.css'],
})
export class AnimationComponent implements OnInit, AfterViewInit {
    canvas: HTMLCanvasElement;
    renderer: PIXI.Renderer;
    stage: PIXI.Container;
    loader: PIXI.Loader;
    ticker: PIXI.Ticker;

    stone: PIXI.Sprite;

    dragging = false;

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');

        let _w = window.innerWidth;
        let _h = window.innerHeight;

        this.renderer = new PIXI.Renderer({
            view: this.canvas,
            width: _w,
            height: _h,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });

        this.stage = new PIXI.Container();
        this.ticker = new PIXI.Ticker();
        this.loader = PIXI.Loader.shared;

        window.addEventListener('resize', () => {
            _w = window.innerWidth;
            _h = window.innerHeight;

            this.renderer.resize(_w, _h);
        });

        this.loader = this.loader.add('stone', 'assets/stone_throw.png');
        this.loader.load(this.startGame.bind(this));
    }

    startGame() {
        console.log('Hello World');
        const stoneTexture = this.loader.resources.stone.texture;
        this.stone = new PIXI.Sprite(stoneTexture);
        this.stone.position.set(200, 200);
        this.stone.anchor.set(0.5);
        // stone.scale.set(10,10);
        this.stone.height = 60;
        this.stone.width = 60;
        this.stone.interactive = true;
        this.stone.buttonMode = true;
        this.stone.on('pointerdown', this.pointerDown.bind(this));
        this.stone.on('pointerup', this.pointerUp.bind(this));
        this.stone.on('pointermove', this.pointerMove.bind(this));
        this.stage.addChild(this.stone);
        this.renderer.render(this.stage);
    }

    pointerDown(event: PIXI.InteractionEvent) {
        this.dragging = true;
        this.pointerMove(event);
    }

    pointerMove(event: PIXI.InteractionEvent) {
        if (this.dragging) {
            this.stone.x = event.data.global.x;
            this.stone.y = event.data.global.y;
            this.renderer.render(this.stone);
        }
    }

    pointerUp(event: PIXI.InteractionEvent) {
        this.dragging = false;
    }
}
