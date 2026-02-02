import { Repository } from "./RepositoryTypes"

//interfaz para imprimir la data
interface Print {
    titulo:string,
    lineas: string[],
    qr:string,
    fecha:string,
    subtotal:string,
    total:string
}

//interfaz para obtener las impresoras "dispositivos"
interface DevicePOS {
    id: number;
    vendorId: number;
    productId: number;
    nombre: string;
    conectada: boolean;
}
interface ListPrintersResponse {
    ok: boolean;
    data: DevicePOS[];
    message?: string;
}

//------------------------------------------------------------------------------

//interfaz del repositorio
interface IPrintRepository extends Repository<Print>{
    findPending(): Promise<Print[]>;
}

//interfaz del servicio
interface IPrintService {
    list():Promise<ListPrintersResponse>
    printPOS(print: Print):Promise<any>,
}

export{
    Print,
    DevicePOS,
    ListPrintersResponse,
    IPrintService
}