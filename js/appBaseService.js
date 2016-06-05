
$.extend({
    appBaseService: new function() {
        var self = this;
        var formsArray = null;
        var useMockData = true;

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

        self.saveMappings = function(mappingArray, callback) {
            mappingObj = {
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
                            order: -1
                        }
                    }]
                }
                /*************BEGIN FUNCTION**************/


        }

        /* Este metodo permite hacer el store del maping siguiendo el esquema de ejemplo. No esta totalmente funcional pues hay 
        * todavia un bug que no pude resolver en el store con el appBase
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
                         order: -1
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
        self.storeFormData = function(mappingObj, dataArray, callback) {

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
           
           if (useMockData) {
                //solo para desarrollo offline
                var formsMock = $.mocking.formsMock;
                formsArray = Array();
                parseFormRows(formsMock, callback);
           }else {
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
           }
        };

        var parseFormRows = function(result, callback) {
            if (result.code != 100) {
                return;
            }

            var headers = result.resultSet.headers;
            var rows = result.resultSet.rows;
            for (var form in rows) {
                var formName = rows[form][0];
                var formObj = formsArray[formName];
                if (formObj == undefined) {
                    formsArray[formName] = {
                        formName: formName,
                        properties: [{
                            name: rows[form][2],
                            type: rows[form][3],
                            order: rows[form][4]
                        }]
                    }
                } else {
                    formObj.properties.push({
                        name: rows[form][2],
                        type: rows[form][3],
                        order: rows[form][4]
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
                    return value;
                case 'BOOLEAN':
                    return value;
                case 'IMAGE':
                    return '"' + value + '"';
                default:
                    return value;
            }
        }

        var getFormCreateCommandData = function(storeDataArray) {

        }


    }
});

$(function() {
    $.appBaseService.initialize();
})