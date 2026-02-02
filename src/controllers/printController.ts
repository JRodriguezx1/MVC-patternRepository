import { printService } from "@services/printService";
import { IPrintService, Print } from "types/PrintTypes";
import { Request, Response } from "express";


const printerService:IPrintService = new printService();

export class printController {

    static printTicket  = async(req:Request, res:Response)=>{
        const lineas:Print = req.body;
        await printerService.printPOS(lineas);
        res.json(lineas);
    }
}