/**
 * @protected
 *
 * @properties={typeid:24,uuid:"BEAC1B7D-78BB-4CA3-BA73-BD481F033FAC"}
 */
function showFormAddOrder() {
	application.showForm('addOrder');
	foundset.newRecord();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2ACE4F96-38A9-45A4-BED6-532C2C01345D"}
 */
function onDelete(event) {
 	foundset.deleteRecord();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9DADA8B2-EA30-4C75-B6F6-C6F9BDE35E9F"}
 */
function showFormEditItem(event) {
	application.showForm('editItems');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B22D1EC4-CBBD-4609-AB6F-67F746F42FCC"}
 */
function showFormOrders(event) {
	application.showForm('orderTableView');
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87697B5C-EF1D-41E8-A749-76051D2B6FEB"}
 */
function saveOff(event) {
	databaseManager.setAutoSave(false);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F9D04D72-7100-4049-9834-301F8C845A00"}
 */
function showFormItems(event) {
	application.showForm('itemTableView');
}
