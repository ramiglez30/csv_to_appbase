function initServiceTest() {
    $.appBaseService.initialize({
        requestForm: true,
        requestFormCallback: function(array) {
            if (array != null) {
                console.log('success initialize');
            }
        }
    })
};

function storeDataTest() {
    var maping = {
        formName: 'T_TEST',
        isFirstColumnHeading: false,
        dataMapping: [{
            fileColumn: {
                number: 0,
                isIgnored: false
            },
            formColumn: {
                name: 'field1',
                type: 'TEXT',
                order: 0
            }
        }, {
            fileColumn: {
                number: 1,
                isIgnored: false
            },
            formColumn: {
                name: 'field2',
                type: 'NUMBER',
                order: 1
            }
        }, {
            fileColumn: {
                number: 2,
                isIgnored: false
            },
            formColumn: {
                name: 'field3',
                type: 'BOOLEAN',
                order: 2
            }
        }]
    }
    var data = [
        ["test5", 5, true],
        ["test6", 6, false],
        ["test7", 7, true],
        ["test8", 8, false],
    ]
    $.appBaseService.storeFormData(maping, data, function(data) {
        console.log(data.current);
    });
};

$(document).ready(function() {
    storeDataTest();
});