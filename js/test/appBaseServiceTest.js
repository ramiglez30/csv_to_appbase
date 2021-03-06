function initServiceTest() {
    $.appBaseService.initialize({
        requestForm: true,
        useMock: false,
        requestFormCallback: function(array) {
            if (array != null) {
                console.log('success initialize');
            }
        }
    })
};

function saveDataTest() {
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
                order: 0,
                isReference: false,
                formReferenced: null,
                dataReferenced: null
            }
        }, {
            fileColumn: {
                number: 1,
                isIgnored: false
            },
            formColumn: {
                name: 'field2',
                type: 'NUMBER',
                order: 1,
                isReference: false,
                formReferenced: null,
                dataReferenced: null
            }
        }, {
            fileColumn: {
                number: 2,
                isIgnored: false
            },
            formColumn: {
                name: 'field3',
                type: 'BOOLEAN',
                order: 2,
                isReference: false,
                formReferenced: null,
                dataReferenced: null
            }
        }]
    }
    var data = [
        ["test5", 5, true],
        ["test6", 6, false],
        ["test7", 7, true],
        ["test8", 8, false],
    ]
    $.appBaseService.saveFormData(maping, data, function(data) {
        console.log(data.current);
    });
};

function saveMappingTest() {
    var mappingObj = {
        sourceName: 'credit-suize9',
        fileType: 'csv',
        formName: 'T_TEST',
        isFirstColumnHeading: false,
        mappingProperties: [{
            fileColumn: {
                colStart: null,
                colEnd: null,
                index: 0,
                isIgnored: false
            },
            formColumn: {
                name: 'field1',
                type: 'TEXT',
                order: 0,
                isReference: false,
                reference: null
            }
        }, {
            fileColumn: {
                colStart: null,
                colEnd: null,
                index: 1,
                isIgnored: false
            },
            formColumn: {
                name: 'field2',
                type: 'NUMBER',
                order: 1,
                isReference: false,
                reference: null
            }
        }, {
            fileColumn: {
                colStart: null,
                colEnd: null,
                index: 2,
                isIgnored: false
            },
            formColumn: {
                name: 'field3',
                type: 'BOOLEAN',
                order: 2,
                isReference: false,
                reference: null
            }
        }]
    }

    $.appBaseService.saveMapping(mappingObj);
}

function getFormDataTest() {
    $.appBaseService.getFormData('MAPPING', function(resultSet) {

        console.log(resultSet);
    })
}

function existDataInFormTest() {
    $.appBaseService.getFormData('MAPPING', function(resultSet) {
        console.log($.appBaseService.existDataInForm('SOURCE_NAME', 'credit-suize', resultSet));

    })
}

function getMappingsTest() {
    $.appBaseService.getMappings(function(mappingArray) {
        console.log(mappingArray);

    })
}

$(document).ready(function() {
    //initServiceTest();
    //saveDataTest();
    saveMappingTest();
    //getFormDataTest();
    //existDataInFormTest();
    //getMappingsTest();
});