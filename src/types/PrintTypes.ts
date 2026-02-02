import { Repository } from "./RepositoryTypes"

interface Print {
    titulo:string,
    lineas: string[],
    qr:string,
    fecha:string,
    subtotal:string,
    total:string
}

interface IPrintRepository extends Repository<Print>{
    findPending(): Promise<Print[]>;
}

interface IPrintService {
    printPOS(print: Print):Promise<any>,
}

export{
    Print,
    IPrintService
}