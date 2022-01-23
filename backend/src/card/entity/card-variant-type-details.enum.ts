export class CardVariantTypeDetails {
    public static NORMAL = new CardVariantTypeDetails(10);
    public static LIST = new CardVariantTypeDetails(20);
    public static STAMPED = new CardVariantTypeDetails(30);
    public static PRERELEASE = new CardVariantTypeDetails(40);
    public static ETCHED = new CardVariantTypeDetails(50);

    private static VALUES: CardVariantTypeDetails[] = [];

    private priority: number;

    private constructor(priority: number) {
        this.priority = priority;

        CardVariantTypeDetails.VALUES.push(this);
    }

    public getPriority(): number {
        return this.priority;
    }

    public static valueOf(name: string): CardVariantTypeDetails | null {
        const names = Object.keys(this);
        for (let i = 0; i < names.length; i++) {
            if (
                this[names[i]] instanceof CardVariantTypeDetails &&
                name.toLowerCase() === names[i].toLowerCase()
            ) {
                return this[names[i]];
            }
        }

        return null;
    }
}
