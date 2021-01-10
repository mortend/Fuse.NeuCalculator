export class ButtonOptions {
    title?: string
    color?: string
    size?: string
}

export default class Button {
    title: string
    color: string
    size: string

    constructor(opts: ButtonOptions) {
        this.title = opts.title || '';
        this.color = opts.color || '#666';
        this.size = opts.size || "70";
    }
}