/*
 * This function update record by id 
 */
(function(){

    update('sys_user', 'first_name', 'Brian', 'brian', 'user_name');

    function update(Table, Field, NewValue, RecordID, FieldID){
        try {
            var RGuser = new GlideRecord(Table);

            if (!RGuser.get(FieldID, RecordID)){
                throw 'No such record in the table ' + Table;
            }
            RGuser.setValue(Field, NewValue);
            RGuser.update('Incorrect value!');

            gs.info('The record: ' + RecordID + ' has been updated sucessfully!');
        } catch (error) {
            gs.info('Script couldn\'t update the user record!\n');
            gs.info(error.message);
        }
    }
}());

