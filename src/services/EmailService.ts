interface ImailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

// DTO = Data Transfer Object (DDD)
interface IMessageDTO {
    to: ImailTo,
    message: ImailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

// class EmailService {
//     sendMail({ to,message } : IMessageDTO) {
//         console.log(`email enviado para ${to.name}: ${message.subject}`);
//     }
// }


class EmailService implements IEmailService {
    sendMail({ to,message } : IMessageDTO) {
        console.log(`email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;