$.extend({
    appBaseService: new function() {
        var appBaseUrl = 'http://dev.synchronit.com/appbase-webconsole/json';
        var self = this;
        var formsArray = null;
        self.options = null;

        self.initialize = function(options) {
            if (options == null || options == undefined) {
                options = {
                    requestForm: false,
                    useMock: false
                }
            }
            self.options = options

            if (self.options.requestForm) {
                requestForms(options.requestFormCallback);
            }

            attachBehavior();
        };

        var attachBehavior = function() {

        };

        /** Metodo para guardar una definicion de maping la estructura del objeto de maping es la del ejemplo
         * Ejemplo
         * mappingObj = {
         *        sourceName: '',
         *        fileType: '',
         *        formName: '',
         *        isFirstColumnHeading: false,
         *        mappingProperties: [{
         *            fileColumn: {
         *                colStart: -1,
         *                colEnd: -1,
         *                colIndex: -1,
         *                isIgnored: false
         *            },
         *            formColumn: {
         *                name: '',
         *                type: '',
         *                order: -1,
         *                isReference: false,
         *                reference:{
         *                    formName:'',
         *                    colums: []
         *                    }
         *            }
         *        }]
         *    }
         */
        self.saveMapping = function(mappingObj, callback) {

            /*************BEGIN FUNCTION**************/
            self.getFormData('MAPPING', function(resultSet) {

                if (!self.existDataInForm('SOURCE_NAME', mappingObj.sourceName, resultSet)) {
                    var mappingFormMap = getMappingFormMap();
                    var mappingFormRow = getMappingFormRow(mappingObj);
                    self.saveFormData(mappingFormMap, mappingFormRow, null, function() {

                        var mappingPropertiesMap = getMappingPropertiesFormMap();
                        var mappingPropertiesArray = Array();
                        for (var index in mappingObj.mappingProperties) {
                            var mappingPropertiesRow = getMappingPropertiesRow(mappingObj.sourceName, mappingObj.mappingProperties[index])
                            mappingPropertiesArray.push(mappingPropertiesRow);
                        }

                        self.saveFormData(mappingPropertiesMap, mappingPropertiesArray, function(data) {

                        })

                    });
                }
            });


        }

        /** Este metodo permite hacer el store del maping siguiendo el esquema de ejemplo. No esta totalmente funcional pues hay 
         * 
         * 
         * ejemplo de objeto de maping
         *   maping = {
         *        sourceName: '',
         *        fileType: '',
         *        formName: '',
         *        isFirstColumnHeading: false,
         *        dataMapping: [{
         *            fileColumn: {
         *                number: -1,
         *                isIgnored: false
         *            },
         *            formColumn: {
         *                name: '',
         *                type: '',
         *                order: -1,
         *                isReference: false,
         *                reference:{
         *                    formName:'',
         *                     colums:[]
         *                   }
         *            }
         *        }]
         *    }
         * --Ejemplo del dataArray 
         *  data = [
                 ["M"],
                 ["F"],
                 ["F"],
                 ["F"]
             ]
         *  ejemplo del callback
         *  object = {
                  current: item actual que se inserto, esto pensando en poder poner una barra de progreso,
                  total: total de elementos a almacenar
                    }
        */
        self.saveFormData = function(mappingObj, dataArray, callback, endCallback) {

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
                            var value = getValueForReferenceColumn(mappingItem.formColumn.type, dataColumn);
                            storeDataArray.splice(mappingItem.formColumn.order, 0, value);
                        } else {
                            storeDataArray.splice(mappingItem.formColumn.order, 0, getStoreDataFormat(mappingItem.formColumn.type, dataColumn));
                        }

                    } else {
                        if (mappingItem.formColumn.isReference) {
                            var value = getValueForReferenceColumn(mappingItem.formColumn.type, '');
                            storeDataArray.splice(mappingItem.formColumn.order, 0, value);
                        } else {
                            storeDataArray.splice(mappingItem.formColumn.order, 0, getStoreDataFormat(mappingItem.formColumn.type, ''));
                        }
                    }
                }

                var formQuery = storeDataArray.join(',');
                if (self.options.useMock) {
                    if (callback != undefined && callback != null) {
                        callback({
                            current: i,
                            total: dataLength
                        });
                    }
                    if (i == dataArray.length && (endCallback != undefined && endCallback != null)) {
                        endCallback();
                    }
                } else {
                    var command = 'Create New ' + mappingObj.formName + '(' + formQuery + ')';

                    serverRequest(command, function(result) {
                        if (callback != undefined && callback != null) {
                            callback({
                                current: i,
                                total: dataLength
                            });
                        }
                        if (i == dataArray.length && (endCallback != undefined && endCallback != null)) {
                            endCallback();
                        }
                    }, function() {

                    });

                }
            }
        };

        /**Esta funcion permite construir la estructura para los campos que son referencia*/
        var getValueForReferenceColumn = function(dataType, dataColumn) {
            var value = '(';
            if (Array.isArray(dataColumn)) {
                for (var indexRef = 0; indexRef < dataColumn.length; indexRef++) {
                    value += indexRef > 0 ? ',' : '';
                    value += '"' + getStoreDataFormat(dataType, dataColumn[indexRef]) + '"';
                }
                value += ')';
            } else {
                value += getStoreDataFormat(dataType, dataColumn) + ')';
            }

            return value;
        }

        /**Esta funcion busca en el appBase si existe el formulario,
         * y pasa al callback un objeto con la definicion del formulario
         * */
        self.getFormObj = function(formName, getFormCallback) {
            if (formsArray == null) {
                requestForms(function(formsArray) {
                    getFormCallback(formsArray[formName]);
                });
            } else {
                getFormCallback(formsArray[formName]);
            }
        };

        /**Esta funcion busca en el appBase todos los formularios,
         * y pasa al callback un objeto con la definicion de los formularios
         * obj = {
         * formName: '',
         * properties: [
         *      {
         * name:'',
         * type:'',
         * order: -1,
         * isReference: false,
         * formReferenced: '',
         * dataReferenced: ''
         *      }
         * ]
         * }
         */
        self.getForms = function(getFormsCallback) {

            if (formsArray == null || formsArray.length == 0) {
                requestForms(getFormsCallback);
            } else {
                getFormsCallback(formsArray);
            }
        }

        /**Este metodo ejecuta la consulta al appBase y devuelve en el callback
         * un arreglo con las definiciones de los formularios 
         */
        var requestForms = function(callback) {
            if (self.options.useMock) {
                parseFormRows(formsMock(), callback)
            } else {
                formsArray = Array();
                var command = 'SHOW FORMS';
                serverRequest(command, function(result) {
                    parseFormRows(result, callback)
                }, function() {

                });
            }
        };

        /**Este metodo realiza el parser del arreglo de formularios, construye un objeto
         * json y lo pasa en el callback
         */
        var parseFormRows = function(result, callback) {
            if (result.code != 100) {
                return;
            }

            var headers = result.resultSet.headers;
            var rows = result.resultSet.rows;
            if (rows.length > 0 || formsArray == null) {
                formsArray = Array();
            }
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

        /**Este metodo devuelve el formato para una propiedad a partir del tipo de dato */
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
        };

        /**Este metodo consulta el appBase y devuelve los datos de un formulario 
         * filterPropertyArray = [{
         *      fieldName: 'TEXT',
         *      fieldValue: value,
         *      fieldType: 'TEXT, NUMBER, BOOLEAN'
         * }]
         */
        self.getFormData = function(formName, filterPropertyArray, callback) {
            if (formName == undefined || formName == null) {
                return;
            }

            if (self.options.useMock) {
                if (callback != undefined && callback != null) {
                    callback(formDataMock(formName))
                }
            } else {

                var command = 'GET ' + formName;

                if (filterPropertyArray != undefined && Array.isArray(filterPropertyArray)) {
                    command += ' with ';
                    for (var index in filterPropertyArray) {
                        if (index > 0) {
                            command += ' and ';
                        }
                        command += filterPropertyArray[index].fieldName + ' = ' + getStoreDataFormat(filterPropertyArray[index].fieldType, filterPropertyArray[index].fieldValue)
                    }
                }

                serverRequest(command, function(result) {
                    if (result.code == 100) {
                        var headers = result.resultSet.headers;
                        var rows = result.resultSet.rows;
                        if (callback != undefined && callback != null) {
                            callback(result.resultSet)
                        }
                    }
                }, function(error) {

                });
            }
        };

        /**Este metodo comprueba si en los datos de un formulario ya existe el dato especificado.
         * requiere para su funcionamiento que se pasen los datos del formulario
         */
        self.existDataInForm = function(columnName, columnData, formResult) {
            if (formResult == undefined || formResult == null) {
                return
            }
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

        /**Este metodo permite conocer el indice de una columna (x) de un formulario.
         * requiere para su funcionamiento la definicion del header de un formulario
         * */
        var findColumnIndexInHeaders = function(formHeaders, columnName) {
            if (formHeaders == undefined || formHeaders == null) {
                return;
            }

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
        };

        /**** Util for Mapping ****/
        /** Este metodo construye la estructura de Rows para el formulario de Mapping */
        var getMappingFormRow = function(mappingObj) {
            return [
                [mappingObj.sourceName, mappingObj.fileType, mappingObj.formName, mappingObj.isFirstColumnHeading]
            ];
        };

        /** Este metodo construye la estructura del objeto de mapping para el formulario de Mapping */
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
                        name: 'FILE_TYPE',
                        type: 'TEXT',
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
                        name: 'FORM_NAME',
                        type: 'TEXT',
                        order: 2,
                        isReference: false,
                        formReferenced: null,
                        dataReferenced: null
                    }
                }, {
                    fileColumn: {
                        number: 3,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'IS_FIRST_COL_HEAD',
                        type: 'BOOLEAN',
                        order: 3,
                        isReference: false,
                        formReferenced: null,
                        dataReferenced: null
                    }
                }]
            }
        };

        /** Este metodo construye la estructura del objeto de mapping para el formulario de MappingProperties */
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
                        name: 'IS_REFERENCE',
                        type: 'BOOLEAN',
                        order: 7,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 8,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'FORM_REFERENCED',
                        type: 'TEXT',
                        order: 8,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 9,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'DATA_REFERENCED',
                        type: 'TEXT',
                        order: 9,
                        isReference: false,
                        dataReference: null
                    }
                }, {
                    fileColumn: {
                        number: 10,
                        isIgnored: false
                    },
                    formColumn: {
                        name: 'SOURCE_NAME',
                        type: 'TEXT',
                        order: 10,
                        isReference: true,
                        dataReference: {
                            formName: 'MAPPING',
                            colName: 'SOURCE_NAME'
                        }
                    }
                }]
            }
        };

        /** Este metodo construye la estructura de Rows para el formulario de MappingProperties */
        var getMappingPropertiesRow = function(mappingName, propertyObj) {

            return [
                propertyObj.fileColumn.colStart,
                propertyObj.fileColumn.colEnd,
                propertyObj.fileColumn.colIndex,
                propertyObj.fileColumn.isIgnored,
                propertyObj.formColumn.name,
                propertyObj.formColumn.type,
                propertyObj.formColumn.order,
                propertyObj.formColumn.isReference,
                propertyObj.formColumn.formReferenced,
                propertyObj.formColumn.dataReferenced,
                mappingName
            ];
        };

        /**Este metodo consulta todas las definiciones de mapping que se han guardado en el appBase */
        self.getMappings = function(callback) {
            self.getFormData('MAPPING', null, function(resultSet) {
                /*if (result.code != 100) {
                    return;
                }*/

                var headers = resultSet.headers;
                var rows = resultSet.rows;
                var mapingArray = Array();
                for (var index in rows) {
                    //Aqui se puede consultar MAPPING_PROPERTIES para obtener las properties de cada definicion
                    var filterArray = [{
                        fieldName: 'MAPPING.SOURCE_NAME',
                        fieldValue: rows[index][0],
                        fieldType: 'TEXT'
                    }]
                    self.getFormData('MAPPING_PROPERTIES', filterArray, function(filterResult) {
                        var mappingPropertiesResult = filterResult.rows;
                        var mappingObj = getMappingObj(rows[index], filterResult.rows);

                        mapingArray.push(mappingObj);

                        if (index == rows.length) {
                            if (callback != undefined && callback != null) {
                                callback(mapingArray);
                            }
                        }
                    });
                }
            });
        };

        /** Esta funcion construye el objeto de mapping */
        var getMappingObj = function(mappingRow, mappingPropertyRows) {
            var mappingProperties = Array();
            for (var filterIndex in mappingPropertyRows) {
                var property = {
                    fileColumn: {
                        colStart: mappingPropertyRows[filterIndex][0],
                        colEnd: mappingPropertyRows[filterIndex][1],
                        colIndex: mappingPropertyRows[filterIndex][2],
                        isIgnored: mappingPropertyRows[filterIndex][3],
                    },
                    formColumn: {
                        name: mappingPropertyRows[filterIndex][4],
                        type: mappingPropertyRows[filterIndex][5],
                        order: mappingPropertyRows[filterIndex][6],
                        isReference: mappingPropertyRows[filterIndex][7],
                        reference: {
                            formName: mappingPropertyRows[filterIndex][8],
                            fieldName: mappingPropertyRows[filterIndex][9]
                        }
                    }
                }

                mappingProperties.push(property);
            }

            var mappingObj = {
                sourceName: mappingRow[0],
                fileType: mappingRow[1],
                formName: mappingRow[2],
                isFirstColumnHeading: mappingRow[3],
                mappingProperties: mappingProperties
            }
        }

        /**Este metodo dado el nombre o identificador de una definicion de maping obtiene toda la definicion*/
        self.getMapping = function(mappingName, callback) {
            var filterArray = [{
                fieldName: 'SOURCE_NAME',
                fieldValue: mappingName
            }]
            self.getFormData('MAPPING', filterArray, function(resultSet) {
                var headers = resultSet.headers;
                var rows = resultSet.rows;
                if (rows.length > 0) {
                    var filterArray = [{
                        fieldName: 'MAPPING.SOURCE_NAME',
                        fieldValue: rows[0][0],
                        fieldType: 'TEXT'
                    }];
                    self.getFormData('MAPPING_PROPERTIES', filterArray, function(filterResult) {
                        var mappingPropertiesResult = filterResult.rows;
                        var mappingObj = getMappingObj(rows[index], filterResult.rows);

                        if (callback != undefined && callback != null) {
                            callback(mappingObj);
                        }
                    });
                }
            });
        };

        /** Este metodo es generico sirve para hacer las request al application base*/
        var serverRequest = function(commandText, successCallback, errorCallback) {
            $.ajax({
                type: 'GET',
                url: appBaseUrl,
                cache: false,
                dataType: 'json',
                data: {
                    command: commandText
                },
                success: successCallback,
                error: errorCallback
            });
        };
    }
});

$(function() {
    $.appBaseService.initialize({
        requestForm: true,
        useMock: false
    });
})