import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        JwtModule.register({
            secret: `pX4R+-F8Xi4+/5;w1m|$D]?%/£qj[@2;`
        }),
        forwardRef(() => UserModule),
        PrismaModule
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }