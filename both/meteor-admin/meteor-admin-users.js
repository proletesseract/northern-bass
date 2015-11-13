/**
 * Created by craigmacgregor on 26/10/15.
 */

if (Meteor.isServer) {

    if (!Accounts.findUserByEmail("craig.b.macgregor@gmail.com")) {

        var id = Accounts.createUser({
            email: "craig.b.macgregor@gmail.com",
            password: "pakage29",
            profile: {name: "craig.b.macgregor"}
        });

        Roles.addUsersToRoles(id, ['admin'], Roles.GLOBAL_GROUP);

    }

    if (!Accounts.findUserByEmail("work@paulgrey.co.nz")) {

        var id2 = Accounts.createUser({
            email: "work@paulgrey.co.nz",
            password: "paulg99",
            profile: {name: "paul.grey"}
        });

        Roles.addUsersToRoles(id2, ['admin'], Roles.GLOBAL_GROUP);

    }

}