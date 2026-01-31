
interface Print {
    titulo:string,
    qr:string,
    fecha:string,
    subtotal:string,
    total:string
}

interface IPrintService {
    printPOS(print: Print):Promise<Print>,
}

export{
    Print,
    IPrintService
}