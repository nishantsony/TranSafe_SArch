/*
 * File: app/view/SignUpPanel.js
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

Ext.define('TranSafe.view.SignUpPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.signuppanel',

    requires: [
        'TranSafe.view.TransafeMenuPanel',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Radio',
        'Ext.Panel'
    ],

    config: {
        id: 'signuppanel',
        style: 'background-color: #FFF',
        modal: false,
        scrollable: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'Please, authorise',
                items: [
                    {
                        xtype: 'textfield',
                        border: 1,
                        id: 'signInUsernameField1',
                        padding: 2,
                        style: '\'border-color: blue; border-style: solid;\',',
                        label: 'Login'
                    },
                    {
                        xtype: 'passwordfield',
                        border: 1,
                        id: 'signInPasswordField1',
                        style: '\'border-color: blue; border-style: solid;\',',
                        label: 'Password'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            var username = Ext.getCmp('signInUsernameField1').getValue();
                            var pass = Ext.getCmp('signInPasswordField1').getValue();
                            console.log('Username: ' + username );
                            console.log('Password: ' + pass );

                            Ext.data.JsonP.request({

                                url: 'http://115.146.86.216:8080/TransNet/services/SurveyBO/Login',
                                // method: 'POST',
                                // dataType: 'json',
                                params: {
                                    username: username,
                                    pass: pass,
                                    format: 'json',
                                    response: 'application/jsonp'
                                },
                                callbackKey: 'callback',
                                success: function (response) {
                                    alert('Working!');
                                    console.log(response);
                                    if(response['return'] === undefined || response['return'] == 'Invalid User')
                                    return;
                                    if(response['return'] != 'Invalid User' || response['return'] !== undefined || response.responseBytes !== null){
                                        console.log(response['return']);
                                        localStorage.setItem('ifLogged', response['return']);
                                        localStorage.setItem('username', username);
                                        console.log(localStorage.getItem('ifLogged'));
                                    }
                                    console.log('prevView is:' + localStorage.getItem('prevView'));
                                    Ext.Viewport.setActiveItem(localStorage.getItem('prevView'),{
                                        type: "slide",
                                        direction: "left"
                                    });
                                },
                                failure: function (response) {
                                    alert('Not working!');
                                    console.log(response);
                                },
                                callback: function(successful, data){
                                    alert(data);
                                }
                            });

                        },
                        docked: 'bottom',
                        ui: 'action-round',
                        text: 'Submit'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Or sign up'
            },
            {
                xtype: 'fieldset',
                title: 'Choose login and password',
                items: [
                    {
                        xtype: 'textfield',
                        border: 1,
                        id: 'signUpUsernameField',
                        style: '\'border-color: blue; border-style: solid;\',',
                        label: 'Login',
                        labelWidth: '35%'
                    },
                    {
                        xtype: 'passwordfield',
                        border: 1,
                        id: 'signUpPasswordField',
                        style: '\'border-color: blue; border-style: solid;\',',
                        label: 'Password',
                        labelWidth: '35%'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Tell us about yourself',
                items: [
                    {
                        xtype: 'textfield',
                        border: 1,
                        id: 'emailField',
                        padding: '',
                        style: '\'border-color: blue; border-style: solid;\'',
                        label: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        id: 'ageField',
                        padding: '',
                        style: '\'border-color: blue; border-style: solid;\',',
                        label: 'Age',
                        ui: 'number'
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        id: 'occupationField',
                        style: '\'border-color: blue; border-style: solid;\',',
                        label: 'Role'
                    },
                    {
                        xtype: 'container',
                        border: 1,
                        items: [
                            {
                                xtype: 'radiofield',
                                border: 1,
                                docked: 'left',
                                minWidth: '50%',
                                style: '\'border-color: blue; border-style: solid;\',',
                                label: 'Male',
                                labelWidth: '60%',
                                name: 'gender',
                                value: 'male'
                            },
                            {
                                xtype: 'radiofield',
                                border: 1,
                                centered: false,
                                docked: 'right',
                                minWidth: '50%',
                                style: '\'border-color: blue; border-style: solid;\',',
                                label: 'Female',
                                labelAlign: 'right',
                                labelWidth: '50%',
                                labelWrap: true,
                                name: 'gender',
                                value: 'female'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            var login = Ext.getCmp('signUpUsernameField').getValue();
                            var pass = Ext.getCmp('signUpPasswordField').getValue();
                            var email = Ext.getCmp('emailField').getValue();
                            var gender = Ext.ComponentQuery.query('radiofield[name=gender]')[0].getGroupValue();
                            var age = Ext.getCmp('ageField').getValue();
                            var occupation = Ext.getCmp('occupationField').getValue();
                            console.log('Username: ' + login);
                            console.log('Password: ' + pass);
                            console.log('email: ' + email);
                            console.log('age: ' + age);
                            console.log('occupation: ' + occupation);
                            console.log('gender: ' + gender);

                            Ext.data.JsonP.request({

                                url: 'http://115.146.86.216:8080/TransNet/services/SurveyBO/CreateUser',
                                params: {
                                    username: login,
                                    password: pass,
                                    email: email,
                                    gender: gender,
                                    age: age,
                                    occupation: occupation,
                                    format: 'json',
                                    response: 'application/jsonp'
                                },
                                callbackKey: 'callback',
                                success: function (response) {
                                    alert('Working!');
                                    console.log(response);
                                    if(response['return'] != 'Invalid User'){
                                        localStorage.setItem('ifLogged', response['return']);
                                        localStorage.setItem('username', login);
                                        Ext.Viewport.setActiveItem(localStorage.getItem('prevView'),{
                                            type: "slide",
                                            direction: "left"
                                        });
                                    }
                                    else{
                                        console.log('the user is invalid');
                                        alert('Sorry, these user details cannot be used, try again with another details');
                                    }
                                },
                                failure: function (response) {
                                    alert('Not working!');
                                    console.log(response);
                                },
                                callback: function(successful, data){
                                    alert(data);
                                }
                            });
                        },
                        docked: 'bottom',
                        ui: 'action-round',
                        text: 'Submit'
                    }
                ]
            },
            {
                xtype: 'TransafeMenuPanel'
            }
        ]
    }

});