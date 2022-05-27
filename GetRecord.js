/*
 * Queries user table and prints our their names and email addresses
 */

(function(){
    var RGUsers = new GlideRecord('sys_user');
    RGUsers.query();

    while (RGUsers.hasNext()){
        gs.print('Name:\t' + RGUsers.getValue('name'));
        gs.print('Email:\t' + RGUsers.getValue('email'));
        gs.print('___________________________________________________');
    }
}());

/*
 * Queries user table and filters the result by the user-id and prints our their attributes
 */

(function(){
    var RGUsers = new GlideRecord('sys_user');
    if (RGUsers.get('user_name','bob.test')){
        gs.print('Name:\t' + RGUsers.getValue('name'));
        gs.info('Email:\t' + RGUsers.getValue('email'));
    }
}());

/*
 * Queries only active users, order them by name and prints active users and their email addresses
 */

(function(){
    var RGUsers = new GlideRecord('sys_user');
    RGUsers.query();

    while (RGUsers.hasNext()){
        gs.print('Name:\t' + RGUsers.getValue('Name'));
        gs.print('Email:\t' + RGUsers.getValue('Email'));
        gs.print('___________________________________________________');
    }
}());