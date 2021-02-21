export class MagicSetYearBlock {
    magicSetArr: string[] = [];

    constructor(public year: number, magicSet: string) {
        this.magicSetArr.push(magicSet);
    }
}
