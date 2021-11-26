import { Factory } from "fishery";
import { createMock } from "ts-auto-mock";
import { User } from "../types";

class UserTraits extends Factory<User>{
    admin() {
        return this.params({
            isAdmin: true,
        });
    }
    withPhoneNumber() {
        return this.params({
            phoneNumber: '123000',
        });
    }
    withFacebook() {
        return this.params({
            sns: [
                {
                    name: 'facebook',
                    url: 'https://facebook.com/user',
                }
            ]
        })
    }
}

export const UserFactory = UserTraits.define(() => (createMock<User>()));