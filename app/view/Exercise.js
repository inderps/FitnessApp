Ext.define('FitnessApp.view.ExerciseInstructions', {
    extend: 'Ext.Panel',
    xtype: 'exerciseInstructionsPanel',

    config: {
        styleHtmlContent: true,
        scrollable: true,
        html: "<div id='exercise'><div> <img src='resources/images/1.gif' width='100%' /> </div>"
             + "<br/><h3>Instructions</h3> <ul>"
             + "<li>Lie supine on bench. Dismount barbell from rack over upper chest using wide oblique overhand grip.</li>"
             + "<li>Lower weight to mid-chest. Press bar upward until arms are extended. Repeat.</li>"
             + "</ul>"
            + "<br/><h3>Exercise Data</h3> <ul>"
            + "<li><span class='label'>Type: </span><span class='text'>Strength</span> </li>"
            + "<li><span class='label'>Main Muscle Worked: </span><span class='text'>Chest</span> </li>"
            + "<li><span class='label'>Equipment: </span><span class='text'>Barbell</span> </li>"
            + "<li><span class='label'>Level: </span><span class='text'>Beginner</span> </li>"
            + "</ul>"
             + "</div>"
    }
});

Ext.define('FitnessApp.view.ExerciseSets', {
    extend: 'Ext.Panel',
    xtype: 'exerciseSetsPanel',

    config: {
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'Monday',
                defaults: {
                  labelWidth: '45%'
                },
                items: [
//                    {
//                        xtype: 'label',
//                        html: "<div id='exercise' class='exercise-set'><ul>"
//                            + "<li><span class='label'>SETS: </span><span class='text'>10, 12, 8</span> </li>"
//                            + "<li><span class='label'>WEIGHT (Kgs): </span><span class='text'>20, 30 15</span> </li>"
//                            + "</ul>"
//                            + "</div>"
//                    }
                    {
                        xtype: 'textfield',
                        label: 'SETS',
                        value: '10, 12, 8',
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'WEIGHTS (Kgs)',
                        value: '20, 30, 15',
                        disabled: true
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Saturday',
                defaults: {
                    labelWidth: '45%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        label: 'SETS',
                        value: '20, 15',
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'WEIGHTS (Kgs)',
                        value: '20, 30',
                        disabled: true
                    }
                ]
            }
        ]
    }
});

Ext.define('FitnessApp.view.Exercise', {
    extend: 'Ext.tab.Panel',
    xtype: 'exercisePanel',
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Jose Albert',
                items: [
                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'home',
                        align: 'right',
                        id: 'homeButton'
                    },
                    {
                        xtype: 'button',
                        iconMask: true,
                        ui: 'back',
                        text: 'back',
                        align: 'left',
                        id: 'backButton'
                    }
                ]

            },
            {
                xtype : 'toolbar',
                docked: 'top',
                ui: 'neutral',
                title: 'Bench Press'
            },
            {
                title: 'Instructions',
                iconCls: 'bookmarks',
                xtype: 'exerciseInstructionsPanel',
                id: 'exerciseInstructionsPanelId'
            },
            {
                title: 'Plan',
                iconCls: 'action',
                xtype: 'exerciseSetsPanel',
                id: 'exerciseSetsPanelId'
            }
        ]
    }
});
