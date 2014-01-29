/*
 * File: app/store/FS.js
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

Ext.define('TranSafe.store.FS', {
    extend: 'Ext.data.Store',

    requires: [
        'TranSafe.model.FSData',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        model: 'TranSafe.model.FSData',
        storeId: 'FS',
        proxy: {
            type: 'jsonp',
            url: 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=FHGRALBMIKR04JREC02GPFOJFXNEDXVFJ0LCUM5J025YRFHY&client_secret=2BTYTCA4NIKM0EXVVKQ2NFQRXYPJ252RO4EDB0GVLTLMOLBI',
            reader: {
                type: 'json',
                rootProperty: 'response.groups[0].items'
            }
        },
        grouper: {
            groupFn: function(item) {
                return item.get("name")[0];
            }
        }
    }
});