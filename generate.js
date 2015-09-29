module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");

    return {
        users: _.times(100, function (n) {
            return {
                id: n,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                userGroupId: Math.floor(Math.random() * 9) + 0,
                expiration: faker.date.future(),
                type: faker.random.boolean() ? 'Paid' : 'Trial',
                status: faker.random.boolean() ? 'Active' : 'Inactive',
                userEnabled: false,
                portfolioEnabled: false,
                is_deleted: false,
                portfolioNameType: faker.random.boolean() ? 'Formulary' : 'Portfolio',
                password: faker.internet.password()
            }
        }),
        userGroups: _.times(10, function (n) {
            return {
                id: n,
                name: faker.company.companyName(),
                salesforceUrl: 'http://salesforce.com/' + faker.random.number(),
                groupEnabled: faker.random.boolean()
            }
        })
    }
}
