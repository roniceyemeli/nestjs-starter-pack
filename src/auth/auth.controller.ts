import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto:AuthDto) {
        console.log(dto)

        //stopped at 1:02:00
        return this.authService.signup()
    }
    

    @Post('signin')
    login() {
        return this.authService.signin()
    }

}