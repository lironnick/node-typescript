import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'tiago henrique', email: 'lironnick@gmail.com' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'tiago henrique', 
                email: 'lironnick@gmail.com' 
            },
            message: { 
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem-vindo'
            }
        });

        return res.send();
    }
}