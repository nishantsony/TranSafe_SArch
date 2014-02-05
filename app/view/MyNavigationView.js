/*
 * File: app/view/MyNavigationView.js
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

Ext.define('TranSafe.view.MyNavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mynavigationview',

    requires: [
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button',
        'Ext.Map',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.IndexBar',
        'Ext.navigation.Bar'
    ],

    config: {
        id: 'mynavigationview',
        style: 'background-color: #FFF',
        items: [
            {
                xtype: 'container',
                docked: 'top',
                items: [
                    {
                        xtype: 'panel',
                        centered: false,
                        docked: 'top',
                        maxHeight: 100,
                        style: 'background-color:#006db9',
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 201,
                                maxHeight: 75,
                                style: 'background-color:#FFFFFF',
                                src: 'transafe_logo.png'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    Ext.Viewport.setActiveItem('surveypanel',{
                                        type: "slide",
                                        direction: "left"
                                    });
                                },
                                flex: 1,
                                cls: '@include icon("list", "l");',
                                id: 'listViewButton',
                                minHeight: 75,
                                ui: 'action',
                                iconAlign: 'center',
                                iconCls: 'list',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {

                                },
                                flex: 1,
                                disabled: true,
                                minHeight: 75,
                                ui: 'action',
                                iconAlign: 'center',
                                iconCls: 'maps'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    console.log('prev view');
                                    console.log(Ext.Viewport.getActiveItem().getId());
                                    localStorage.setItem('prevView', Ext.Viewport.getActiveItem().getId());
                                    Ext.Viewport.setActiveItem('signuppanel',{
                                        type: "slide",
                                        direction: "left"
                                    });
                                },
                                flex: 1,
                                minHeight: 75,
                                top: '',
                                ui: 'action',
                                iconAlign: 'center',
                                iconCls: 'user'
                            }
                        ]
                    },
                    {
                        xtype: 'map',
                        height: 200,
                        mapOptions: {
                            zoom: 19
                        },
                        useCurrentLocation: true
                    }
                ]
            },
            {
                xtype: 'list',
                title: 'Choose where you are',
                itemId: 'mylist',
                hideOnMaskTap: false,
                allowDeselect: true,
                itemTpl: [
                    '<div>{name}</div>'
                ],
                store: 'FS',
                grouped: true,
                itemHeight: 5,
                variableHeights: true,
                indexBar: {
                    hidden: false
                }
            }
        ],
        navigationBar: {
            docked: 'top'
        }
    }

});