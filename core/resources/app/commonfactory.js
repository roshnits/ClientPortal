define(['moment', 'numeral', 'lodash', 'is'], function(moment, numeral, lodash, is) {
    function commonfactory() {
        var cf = {};
        cf.formatdatetime = function(unformateddate) {
            return moment.utc(unformateddate).local().format("MMM Do YYYY, hh:mm A");
        }
        cf.formatdate = function(unformateddate) {
            return moment.utc(unformateddate).local().format("MMM Do YYYY");
        }
        cf.formattime = function(unformateddate) {
            return moment.utc(unformateddate).local().format("hh:mm A");
        }
        cf.datesince = function(datedata) {
            return ((moment(datedata).isBefore()) ? moment.utc(datedata).local().fromNow(true) : moment.utc(datedata).local().toNow(true));
        }
        cf.formatcurrency = function(numberdata, currencyformat) {
            var currreturn = "";
            numberdata = cf.formatfloat(numberdata);
            currencyformat = (!currencyformat ? '' : currencyformat);
            currreturn = numeral(numberdata).format('0,0.00');
            currreturn = ((currencyformat) + numeral(numberdata).format('0,0.00'));
            return currreturn;
        }
        cf.formatfloat = function(numberdata) {
            return parseFloat(((isNaN(numberdata) || numberdata == '') ? 0 : numberdata));
        }
        cf.formatint = function(numberdata) {
            return parseInt(((isNaN(numberdata) || numberdata == '') ? 0 : numberdata));
        }
        return cf;
    }
    return commonfactory;
});
