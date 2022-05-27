/*
 * Adds a user to sys_user.list table
 */
(function(){
    var userInf = ['scriptUser','Script User', 'Script', 'User','scriptuser@mail.com', 'Pa55w.rd'];
    var column = ['user_name', 'name', 'first_name', 'last_name', 'email', 'password'];
    
    var RGUser = new GlideRecord('sys_user');
    RGUser.initialize();
    
    try {
        for (var i = 0; i < column.length; ++i){
            RGUser.setValue(column[i], userInf[i]);
        }
        
        RGUser.insert();
        gs.info('User has been added successfully!');
    } catch (error) {
        gs.info('Script failed to user!\n\n');
        gs.info(error.message);
    }
}());

/*
 * This functions add multiple users to a sys_user.list 
 */
(function(){
    var userInf = [
                    ['stiwie','Steward', 'Setward Griffin', 'Griffin','stewie@mail.com', 'Pa55w.rd'],
                    ['peter', 'Peter Griffin', 'Peter','Giffin', 'brian@mail.com', 'Pa55w.rd']
                ];
    var column = ['user_name', 'name', 'first_name', 'last_name', 'email', 'password'];
    
    var RGUser = new GlideRecord('sys_user');
    RGUser.initialize();
    
    
    try {
        for (var i = 0; i < userInf.length; ++i){            // userInf[0].length returns the number of inner arrays
            for (var j = 0; j < userInf[i].length; ++j){     // userInf[0][i].length returns the number of elements in the first inner array
                RGUser.setValue(column[j], userInf[i][j]);
            }
            RGUser.insert();
        }
        
        gs.info('Users has been added successfully!');
    } catch (error) {
        gs.info('Script failed to users!\n\n');
        gs.info(error.message);
    }
}());