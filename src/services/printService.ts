import { IPrintService, ListPrintersResponse, Print, DevicePOS } from "types/PrintTypes";
//import escpos from "escpos";
//import USB from "escpos-usb";

//escpos.USB = USB;

export class printService implements IPrintService{

    async list(): Promise<ListPrintersResponse> {
        //const device = new USB(0x0471, 0x0055);
        try {
            const device = new USB(0x0471, 0x0055);
            const dispositivos = escpos.USB.findPrinter();
            console.log(dispositivos);
            const list = dispositivos.map((device:any, index:number) => ({
                    id: index,
                    vendorId: device.deviceDescriptor.idVendor,
                    productId: device.deviceDescriptor.idProduct,
                    nombre: `Impresora POS ${index + 1}`,
                    conectada: true
            }));
            return {
                ok: true,
                data: list
            };
        }catch (error) {
            return {
                ok: false,
                data: [],
                message: '❌ Error listando dispositivos: '+error
            };
        }
    }

    async printPOS(print: Print): Promise<any> {

        const device = new escpos.USB(0x0471, 0x0055);
        const printer = new escpos.Printer(device);
        //const dispositivos = escpos.USB.findPrinter();
        
        return new Promise((resolve, reject) => {

            device.open((err: any) => {
            if (err) {
                return resolve({ ok: false, message: "Error abriendo impresora" });
            }

            printer
                .align("ct")
                .text("MI POS")
                .drawLine()
                .text("mi negocio")
                .cut()
                .close();

            resolve({ ok: true });
            });

        });
       
    }
}