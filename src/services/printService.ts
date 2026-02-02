import { IPrintService, Print } from "types/PrintTypes";
import escpos from "escpos";
import USB from "escpos-usb";

escpos.USB = USB;

export class printService implements IPrintService{
    async printPOS(print: Print): Promise<any> {

        const device = new escpos.USB();
        const printer = new escpos.Printer(device);
        const dispositivos = escpos.USB.findPrinter();
        return device;
    }
}