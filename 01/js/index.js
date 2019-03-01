(function () {

    $(function () {

        var FORMAT_YYYYMMDD = 'YYYY/MM/DD';
        var FORMAT_YYYYMMDDhhmm = 'YYYY/MM/DD HH:mm';

        $('#inputText1').daterangepicker({
            singleDatePicker: true,
            showDropdowns: false,
            locale: {
                format: FORMAT_YYYYMMDD
            }
        }, function (start, end, label) {
            log(moment(start).format(FORMAT_YYYYMMDD));
        });

        $('#inputText2').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            timePicker: true,
            timePicker24Hour: true,
            startDate: moment().endOf('day'),
            locale: {
                format: FORMAT_YYYYMMDDhhmm
            }
        }, function (start, end, label) {
            log(moment(start).format(FORMAT_YYYYMMDDhhmm));
        });

        $('#inputText3').daterangepicker({
            singleDatePicker: false,
            showDropdowns: false,
            locale: {
                format: FORMAT_YYYYMMDD
            }
        }, function (start, end, label) {
            log('start=' + moment(start).format(FORMAT_YYYYMMDD));
            log('end=' + moment(end).format(FORMAT_YYYYMMDD));
        });

        $('#inputText4').daterangepicker({
            singleDatePicker: false,
            showDropdowns: true,
            timePicker: true,
            timePicker24Hour: true,
            startDate: moment().startOf('day'),
            endDate: moment().endOf('day'),
            locale: {
                format: FORMAT_YYYYMMDDhhmm
            }
        }, function (start, end, label) {
            log('start=' + moment(start).format(FORMAT_YYYYMMDDhhmm));
            log('end=' + moment(end).format(FORMAT_YYYYMMDDhhmm));
        });
    });

})();