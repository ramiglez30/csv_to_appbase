(function initServiceTest() {
    $.appBaseService.initialize({
        requestForm: true,
        requestFormCallback: function(array) {
            if (array != null) {
                console.log('success initialize');
            }
        }
    })
});

(function storeDataTest() {
    var maping = {
        formName: 'SEX',
        isFirstColumnHeading: false,
        dataMapping: [{
            fileColumn: {
                number: 1,
                isIgnored: false
            },
            formColumn: {
                name: 'SEX',
                type: 'TEXT',
                order: 1
            }
        }, {
            fileColumn: {
                number: 0,
                isIgnored: false
            },
            formColumn: {
                name: 'NUMBER',
                type: 'NUMBER',
                order: 0
            }
        }]
    }
    var data = [
        [4, "F"],
        [1, "M"],
        [3, "F"],
        [2, "M"]
    ]
    $.appBaseService.storeFormData(maping, data, function(data) {

    });
});