import { Request, Response, NextFunction } from 'express';
import {getIssuer} from "../config/auth";
import dataSource from "../models";
import {JwtPayload} from "jsonwebtoken";
import UserServices from "../services/user-services";
import {object} from "yup";

export async function middlewareValidarJWT(req: Request, res: Response, next: NextFunction) {
    const jwt = req.headers.authorization;
    if (!jwt) return res.status(403).end();

    try {
        const decode = getIssuer(jwt) as JwtPayload;
        const user = await new UserServices().findByEmail(decode.iss as string);

        if (!user.dataValues || !Object.keys(user.dataValues).length) return res.status(403).end();

        (req as any).user = user.dataValues;
        next();
    } catch (err) {
        res.status(403).end();
    }
}