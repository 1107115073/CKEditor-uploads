/**
 * Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * The abbr plugin dialog window definition.
 *
 * Created out of the CKEditor Plugin SDK:
 * https://ckeditor.com/docs/ckeditor4/latest/guide/plugin_sdk_sample_1.html
 */

// Our dialog definition.
CKEDITOR.dialog.add('abbrDialog', function (editor) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Abbreviation Properties',
		minWidth: 400,
		minHeight: 200,

		// Dialog window content definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab content.
				elements: [
					{
						type: 'text',
						id: 'abbr',
						label: 'Abbreviation',
						validate: CKEDITOR.dialog.validate.notEmpty("Abbreviation cannot be empty."),
						setup: function (element) {
							this.setValue(element.getText());
						},
						commit: function (element) {
							element.setText(this.getValue());
						}
					},
					{
						type: 'text',
						id: 'title',
						label: 'Explanation',
						validate: CKEDITOR.dialog.validate.notEmpty("Title cannot be empty."),
						setup: function (element) {
							this.setValue(element.getAttribute("title"));
						},
						commit: function (element) {
							element.setAttribute("title", this.getValue());
						}
					}
				]
			},

			// Definition of the Advanced Settings dialog tab (page).
			{
				id: 'tab-adv',
				label: 'Advanced Settings',
				elements: [
					{
						// Another text field for the abbr element id.
						type: 'text',
						id: 'id',
						label: 'Id',
						setup: function (element) {
							this.setValue(element.getAttribute("id"));
						},
						commit: function (element) {
							var id = this.getValue();
							if (id)
								element.setAttribute('id', id);
							else if (!this.insertMode)
								element.removeAttribute('id');
						}
					}
				]
			}
		],

		// Invoked when the dialog is loaded.
		onShow: function () {

			// Get the selection from the editor.
			var selection = editor.getSelection();

			// Get the element at the start of the selection.
			var element = selection.getStartElement();

			// Get the <abbr> element closest to the selection, if it exists.
			if (element)
				element = element.getAscendant('abbr', true);

			// Create a new <abbr> element if it does not exist.
			if (!element || element.getName() != 'abbr') {
				element = editor.document.createElement('abbr');

				// Flag the insertion mode for later use.
				this.insertMode = true;
			}
			else
				this.insertMode = false;

			// Store the reference to the <abbr> element in an internal property, for later use.
			this.element = element;

			// Invoke the setup methods of all dialog window elements, so they can load the element attributes.
			if (!this.insertMode)
				this.setupContent(this.element);
		},

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function () {

			// Create a new <abbr> element.
			var abbr = this.element;

			// Invoke the commit methods of all dialog window elements, so the <abbr> element gets modified.
			this.commitContent(abbr);

			// Finally, if in insert mode, insert the element into the editor at the caret position.
			if (this.insertMode)
				editor.insertElement(abbr);
		}
		// This method is invoked once a user clicks the OK button, confirming the dialog.
		/* onOk: function() {

			// The context of this function is the dialog object itself.
			// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dialog.html
			var dialog = this;

			// Create a new <abbr> element.
			var abbr = editor.document.createElement( 'abbr' );

			// Set element attribute and text by getting the defined field values.
			abbr.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
			abbr.setText( dialog.getValueOf( 'tab-basic', 'abbr' ) );

			// Now get yet another field value from the Advanced Settings tab.
			var id = dialog.getValueOf( 'tab-adv', 'id' );
			if ( id )
				abbr.setAttribute( 'id', id );

			// Finally, insert the element into the editor at the caret position.
			editor.insertElement( abbr );
		} */
	};
});
