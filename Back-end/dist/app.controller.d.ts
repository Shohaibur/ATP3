import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(create: CreateDto): string;
    getUsers(): any[];
    getUser(id: number): any;
}
