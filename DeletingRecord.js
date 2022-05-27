/*
 * This functions delete records by mentioned field and record
 */
(function(){
    try {
        DeleteRecord('sys_user', 'user_name', 'scriptUser');
    } catch (error) {
        gs.info(error.message);
    }

    function DeleteRecord(Table, Field, RecordID){
        try {
            var GR =  new GlideRecord(Table);
        
            if (GR.get(Field, RecordID)){
                if (GR.canDelete()){
                    GR.deleteRecord();
                    gs.info('The record: ' + RecordID + ' has been deleted sucessfully!');
                }else{
                    gs.info('No permissions to delete record: ' + RecordID);
                }
            }else{
            gs.info('No record matched: ' + RecordID); 
            }
        } catch (error) {
            gs.info(error.message);
        }
    }
}());