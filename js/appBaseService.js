$.extend({
    appBaseService: new function() {
        var self = this;
        var formsArray = null;

        self.initialize = function(options) {
            attachBehavior();
            if (options != undefined) {
                if (options.requestForm) {
                    requestForms(options.requestFormCallback);
                }
            }

        };

        var attachBehavior = function() {

        };

        self.saveMapping = function(mappingObj, callback) {
            /* mappingObj = {
                 sourceName: '',
                 fileType: '',
                 formName: '',
                 isFirstColumnHeading: false,
                 mappingProperties: [{
                     fileColumn: {
                         colStart: -1,
                         colEnd: -1,
                         colIndex: -1,
                         isIgnored: false
                     },
                     formColumn: {
                         name: '',
                         type: '',
                         order: -1,
                         isReference: false,
                         reference:{
                             formName:'',
                             colums: []
                             }
                     }
                 }]
             }*/
            /*************BEGIN FUNCTION**************/
            self.getFormData('MAPPING', function(resultSet) {

                if (!self.existDataInForm('SOURCE_NAME', mappingObj.sourceName, resultSet)) {
                    var mappingFormMap = getMappingFormMap();
                    var mappingFormRow = getMappingFormRow(mappingObj);
                    self.storeFormData(mappingFormMap, mappingFormRow, null, function() {

                        var mappingPropertiesMap = getMappingPropertiesFormMap();
                        var mappingPropertiesArray = Array();
                        for (var index in mappingObj.mappingProperties) {
                            var mappingPropertiesRow = getMappingPropertiesRow(mappingObj.mappingProperties[index])
                            mappingPropertiesArray.push(mappingPropertiesRow);
                        }

                        self.storeFormData(mappingPropertiesMap, mappingPropertiesArray, function(data) {

                        })

                    });
                }
            });


        }

        /* Este metodo permite hacer el store del maping siguiendo el esquema de ejemplo. No esta totalmente funcional pues hay 
        * 
        *ejemplo de objeto de maping
        maping = {
                 sourceName: '',
                 fileType: '',
                 formName: '',
                 isFirstColumnHeading: false,
                 dataMapping: [{
                     fileColumn: {
                         number: -1,
                         isIgnored: false
                     },
                     formColumn: {
                         name: '',
                         type: '',
                         order: -1,
                         isReference: false,
                         reference:{
                             formName:'',
                              colums:[]
                            }
                     }
                 }]
             }
        *--Ejemplo del dataArray 
        *data = [
                 ["M"],
                 ["F"],
                 ["F"],
                 ["F"]
             ]
        * ejemplo del callback
        object = {
                  current: item actual que se inserto, esto pensando en poder poner una barra de progreso,
                  total: total de elementos a almacenar
                    }
        */

        self.storeFormData = function(mappingObj, dataArray, callback, endCallback) {

            var isFirstColumnHeading = mappingObj.isFirstColumnHeading;
            var dataMapping = mappingObj.dataMapping;
            var dataLength = dataArray.length;

            for (var i = isFirstColumnHeading == true ? 1 : 0; i < dataArray.length; i++) {
                var storeDataArray = Array();
                var dataRow = dataArray[i];

                for (var item in dataMapping) {
                    var mappingItem = dataMapping[item];
                    if (!mappingItem.fileColumn.isIgnored) {

                        var dataColumn = dataRow[mappingItem.fileColumn.number];

                        if (mappingItem.formColumn.isReference) {
                            var value = '(';
                            if (Array.isArray(dataColumn)) {
                                for (var indexRef = 0; indexRef < dataColumn.length; indexRef++) {
                                    value += indexRef > 0 ? ',' : '';
                                    value += '"' + dataColumn[indexRef] + '"';
                                }
                            }
                            value += dataColumn + ')';
                            storeDataArray.splice(mappingItem.formColumn.order, 0, value);
                        }

                        storeDataArray.splice(mappingItem.formColumn.order, 0, getStoreDataFormat(mappingItem.formColumn.type, dataColumn));
                    } else {
                        storeDataArray.splice(mappingItem.formColumn.order, 0, getStoreDataFormat(mappingItem.formColumn.type, ''));
                    }
                }

                var formQuery = storeDataArray.join(',');

                $.ajax({
                    type: 'GET',
                    url: 'http://dev.synchronit.com/appbase-webconsole/json',
                    cache: false,
                    dataType: 'json',
                    //async: false,
                    data: {
                        command: 'Create New ' + mappingObj.formName + '(' + formQuery + ')'
                    },
                    success: function(result) {

                        if (callback != undefined && callback != null) {
                            callback({
                                current: i,
                                total: dataLength
                            });
                        }
                        if (i == dataArray.length && (endCallback != undefined && endCallback != null)) {
                            endCallback();
                        }
                    },
                    error: function() {

                    }
                });

            }
        };

        self.getFormObj = function(formName, getFormCallback) {
            if (formsArray == null) {
                requestForms(function(formsArray) {
                    getFormCallback(formsArray[formName]);
                });
            } else {
                getFormCallback(formsArray[formName]);
            }
        };

        self.getForms = function(getFormsCallback) {

            if (formsArray == null) {
                requestForms(getFormsCallback);
            } else {
                getFormsCallback(formsArray);
            }
        }

        var requestForms = function(callback) {
            formsArray = Array();
            $.ajax({
                type: 'GET',
                url: 'http://dev.synchronit.com/appbase-webconsole/json',
                cache: false,
                dataType: 'json',
                data: {
                    command: 'SHOW FORMS'
                },
                success: function(result) {
                    parseFormRows(result, callback)
                },
                error: function() {

                }
            });
        };

        var parseFormRows = function(result, callback) {
            if (result.code != 100) {
                return;
            }

            var headers = result.resultSet.headers;
            var rows = result.resultSet.rows;
            for (var index in rows) {
                var formName = rows[index][0];
                var formObj = formsArray[formName];
                if (formObj == undefined) {
                    formsArray[formName] = {
                        formName: formName,
                        properties: [{
                            name: rows[index][2],
                            type: rows[index][3],
                            order: rows[index][4],
                            isReference: rows[index][5],
                            formReferenced: rows[index][6],
                            dataReferenced: rows[index][7]
                        }]
                    }
                } else {
                    formObj.properties.push({
                        name: rows[index][2],
                        type: rows[index][3],
                        order: rows[index][4],
                        isReference: rows[index][5],
                        formReferenced: rows[index][6],
                        dataReferenced: rows[index][7]
                    });
                }

            }

            if (callback != undefined) {
                callback(formsArray);
            }
        };

        var getStoreDataFormat = function(dataType, value) {

            switch (dataType) {
                case 'TEXT':
                    return '"' + value + '"';
                case 'NUMBER':
                    return value == null ? 10000 : value;
                case 'BOOLEAN':
                    return value;
                case 'IMAGE':
                    return '"' + value + '"';
                default:
                    return value;
            }
        }

        self.getFormData = function(formName, callback) {

            $.ajax({
                type: 'GET',
                url: 'http://dev.synchronit.com/appbase-webconsole/json',
                cache: false,
                dataType: 'json',
                async: false,
                data: {
                    command: 'Get ' + formName
                },
                success: function(result) {
                    if (result.code == 100) {
                        var headers = result.resultSet.headers;
                        var rows = result.resultSet.rows;
                        if (callback != undefined && callback != null) {
                            callback(result.resultSet)
                        }
                    }
                },
                error: function() {

                }
            });


        }

        self.existDataInForm = function(columnName, columnData, formResult) {
            var formHeaders = formResult.headers;
            var formRows = formResult.rows;
            var columnIndex = findColumnIndexInHeaders(formHeaders, columnName);

            if (columnIndex >= 0) {
                var index = 0;
                var found = false;
                while (index < formRows.length && !found) {
                    if (formRows[index][columnIndex] == columnData) {
                        found = true;
                        break;
                    }
                    index++;
                }

                return found;
            }
            return false;
        };

        var findColumnIndexInHeaders = function(formHeaders, columnName) {
            var index = 0;
            var found = false;
            while (index < formHeaders.length && !found) {
                if (formHeaders[index].label == columnName) {
                    found = true;
                    break;
                }
                index++;
            }

            return found == true ? index : -1;
        }


        /**** Util for Mapping ****/
        var getMappingFormRow = function(mappingObj) {
            return [
                [mappingObj.sourceName, mappingObj.fileType, mappingObj.formName, mappingObj.isFirstColumnHeading]
            ];
        }

        var getMappingFormMap = function() {
            return {
                formName: 'MAPPING',
                isFirstColumnHeading: false,
                dataMapping: [{
                    fileColumn: {
                        number: 0,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'SOURCE_NAME',
                        type: 'TEXT',
                        order: 0
                    }
                }, {
                    fileColumn: {
                        number: 1,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FILE_TYPE',
                        type: 'TEXT',
                        order: 1
                    }
                }, {
                    fileColumn: {
                        number: 2,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FORM_NAME',
                        type: 'TEXT',
                        order: 2
                    }
                }, {
                    fileColumn: {
                        number: 3,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'IS_FIRST_COL_HEAD',
                        type: 'BOOLEAN',
                        order: 3
                    }
                }]
            }
        }

        var getMappingPropertiesFormMap = function() {
            return {
                formName: 'MAPPING_PROPERTIES',
                isFirstColumnHeading: false,
                dataMapping: [{
                    fileColumn: {
                        number: 0,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FILE_COL_START',
                        type: 'NUMBER',
                        order: 0,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 1,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FILE_COL_END',
                        type: 'NUMBER',
                        order: 1,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 2,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FILE_COL_INDEX',
                        type: 'NUMBER',
                        order: 2,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 3,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FILE_COL_IGNORED',
                        type: 'BOOLEAN',
                        order: 3,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 4,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FORM_COL_NAME',
                        type: 'TEXT',
                        order: 4,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 5,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FORM_COL_TYPE',
                        type: 'TEXT',
                        order: 5,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 6,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FORM_COL_ORDER',
                        type: 'NUMBER',
                        order: 6,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 7,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'SOURCE_NAME',
                        type: 'NUMBER',
                        order: 7,
                        isReference: true,
                        dataReference: {
                            formName: 'MAPPING',
                            colName: 'SOURCE_NAME'
                        }
                    }
                }]
            }
        }

        var getMappingPropertiesRow = function(propertyObj) {

            return [
                propertyObj.fileColumn.colStart,
                propertyObj.fileColumn.colEnd,
                propertyObj.fileColumn.colIndex,
                propertyObj.fileColumn.isIgnored,
                propertyObj.formColumn.name,
                propertyObj.formColumn.type,
                propertyObj.formColumn.order,
                propertyObj.formColumn.isReference,
                propertyObj.formColumn.reference
            ];
        }
    }
});

$(function() {
    $.appBaseService.initialize();
})