/*
 * File: app/store/anonimousArrayStore.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TranSafe.store.anonimousArrayStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        data: [
            {
                Feeling: 'Sad',
                TotalValue: 30
            },
            {
                Feeling: 'Happy',
                TotalValue: 45
            },
            {
                Feeling: 'Neutral',
                TotalValue: 25
            }
        ],
        storeId: 'anonimousArrayStore',
        fields: [
            {
                name: 'Feeling'
            },
            {
                name: 'TotalValue'
            }
        ]
    }
});