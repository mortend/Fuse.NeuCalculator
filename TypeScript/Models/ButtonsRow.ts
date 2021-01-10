import Button from "./Button";

export class ButtonRowOptions {
    buttons?: Button[]
}

export default class ButtonsRow {
    buttons: Button[]

    constructor(opts: ButtonRowOptions) {
        this.buttons = opts.buttons || [];
    }
}