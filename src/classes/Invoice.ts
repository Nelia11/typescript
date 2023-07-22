export class Invoice {
    constructor (
            public client: string,
            public details: string,
            readonly amount: number,
        ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
