import { OrganizationFactory } from "./factory/organization";
import JSONFormatter from 'json-formatter-js'


window.addEventListener('DOMContentLoaded', main);

function main() {
    const organization = OrganizationFactory.withUsers(3).build();
    const formatter = new JSONFormatter(organization);
    document.body.appendChild(formatter.render());
}