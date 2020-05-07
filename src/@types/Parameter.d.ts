import { Request, Response, NextFunction } from "express";

type parameter = {
    name: string,
    type: string,
    ruleExplained: string,
    ruleFor: (req: Request, res: Response, next: NextFunction) => void,
}

export { parameter }