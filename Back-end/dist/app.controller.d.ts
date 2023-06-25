import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTest(): string;
    getTest2(): string;
    getUsers(): any[];
    addUser(create: CreateDto): string;
}
