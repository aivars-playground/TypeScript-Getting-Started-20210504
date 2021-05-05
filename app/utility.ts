function getInputValue(elementID: string): string {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)
    return inputElement.value
}

function logger(msg: string): void {
    console.log(msg)
}

export {getInputValue as getValue, logger}