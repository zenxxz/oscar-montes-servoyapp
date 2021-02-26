/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"390B80C0-FCA2-4209-92C2-9FA51E6F9878"}
 */
function addOrder(event) {
	databaseManager.saveData();
	history.back();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"86D29C82-7318-49F5-BC8F-2703138BE65E"}
 */
function cancel(event) {
	//foundset.deleteRecord()
	history.back();
}
