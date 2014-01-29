/*
 * File: app/controller/MyController.js
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

Ext.define('TranSafe.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            venueLblSurvey: 'label#venueLblSurvey',
            surveyPanel: 'panel#surveyPanel',
            greetingLabel: 'label#greetingLabel',
            signInBtn: 'button#signInBtn',
            signUpBtn: 'button#signUpBtn',
            signOutBtn: 'button#signOutBtn'
        },

        control: {
            "list": {
                itemtap: 'onListItemTap'
            },
            "panel": {
                activate: 'onPanelActivate'
            },
            "#surveyPanel": {
                activate: 'onSurveyPanelActivate'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        console.log(record.get('name'));
         Ext.Viewport.setActiveItem('surveypanel',{
                                    type: "slide",
                                    direction: "left"
                                });
        console.log(this.getVenueLblSurvey().setHtml('You are at ' + record.get('name')));
    },

    onPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        // console.log('logged status is: ' + localStorage.getItem('ifLogged'));
        // if(localStorage.getItem('ifLogged') == 1){
        //     var username = localStorage.getItem('username');
        //     console.log('name: ' + username);
        //     this.getGreetingLabel().setHtml('Hello, ' + username);
        //     this.getGreetingLabel().show();
        //     this.getSignOutBtn().show();
        //     this.getSignInBtn().hide();
        //     this.getSignUpBtn().hide();
        // }
        // else{
        //     if(localStorage.getItem('ifLogged') === 0){
        //     this.getGreetingLabel().hide();
        //     this.getSignOutBtn().hide();
        //     this.getSignInBtn().show();
        //     this.getSignUpBtn().show();
        //     }
        // }
    },

    onSurveyPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        console.log('Survey panel activated');
        console.log('logged status is: ' + localStorage.getItem('ifLogged'));
        if(localStorage.getItem('ifLogged') == 1){
            var username = localStorage.getItem('username');
            console.log('name: ' + username);
            this.getGreetingLabel().setHtml('Hello, ' + username);
            this.getGreetingLabel().show();
            this.getSignOutBtn().show();
            this.getSignInBtn().hide();
            this.getSignUpBtn().hide();
        }
        else{
            if(localStorage.getItem('ifLogged') === 0){
            this.getGreetingLabel().hide();
            this.getSignOutBtn().hide();
            this.getSignInBtn().show();
            this.getSignUpBtn().show();
            }
        }
    }

});