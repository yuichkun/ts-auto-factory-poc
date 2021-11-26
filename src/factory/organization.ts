import { Factory } from "fishery";
import { createMock } from "ts-auto-mock";
import { Organization } from "../types";
import { UserFactory } from "./user";

class OrganizationTraits extends Factory<Organization> {
    withUsers(n: number) {
        return this.params({
            users: UserFactory.withFacebook().buildList(n),
        })
    }
}

export const OrganizationFactory = OrganizationTraits.define(() => createMock<Organization>());