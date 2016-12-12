define(['logicsclientportal', 'moment', 'numeral', 'lodash', 'is'], function(logicsclientportal, moment, numeral, lodash, is) {
    'use strict';
    logicsclientportal.register.controller('indexcontroller', ['$scope', '$state', '$rootScope', 'commonfactory',
        function(sc, st, rs, cf) {
            sc.commonfactory = cf;
            sc.billsummary = {
                totalbilled: 1600,
                paid: 1000,
                balance: 600,
                due: 0
            };
            sc.scheduledpayments = {
                upcomingpayments: [],
                pastpayments: []
            };
            sc.schedulepayments = function() {
                for (var i = 0; i < 3; i++) {
                    sc.scheduledpayments.pastpayments.push({
                        paymentid: i + 6,
                        paymentdate: moment("2016-12-01 00:00", "YYYY-MM-DD HH:mm").subtract(i, 'months'),
                        paymentamount: 500,
                        paymentstatus: 2
                    });
                }
                for (var i = 0; i < 2; i++) {
                    sc.scheduledpayments.upcomingpayments.push({
                        paymentid: i,
                        paymentdate: moment("2016-12-01 00:00", "YYYY-MM-DD HH:mm").add((i + 1), 'months'),
                        paymentamount: 500,
                        paymentstatus: 3
                    });
                    sc.scheduledpayments.pastpayments.push({
                        paymentid: i + 6,
                        paymentdate: moment("2016-12-01 00:00", "YYYY-MM-DD HH:mm").subtract(i, 'months'),
                        paymentamount: 500,
                        paymentstatus: 2
                    });
                }
            };
            sc.schedulepayments();
            sc.documents = [{
                documentname: "Lease Aggrement",
                documentid: 1
            }, {
                documentname: "Payment Receipt",
                documentid: 2
            }, {
                documentname: "Tax Scanned Letter",
                documentid: 3
            }, {
                documentname: "2848 Spouse",
                documentid: 5
            }];
            sc.queries = [{
                queryid: 1,
                queryusername: "Peter",
                imagepath: "/bower_components/AdminLTE/dist/img/avatar.png",
                querytime: moment("2015-10-20 15:30", "YYYY-MM-DD HH:mm").toDate(),
                querymessage: "Welcome to Fast Tax, I am Peter, your representative, If you require any information, feel free to contact me here",
                isclient: false
            }, {
                queryid: 2,
                queryusername: "Sarah",
                imagepath: "/bower_components/AdminLTE/dist/img/avatar3.png",
                querytime: moment("2015-10-21 10:42", "YYYY-MM-DD HH:mm").toDate(),
                querymessage: "Is the information i am sharing kept secrate?",
                isclient: true
            }, {
                queryid: 3,
                queryusername: "Peter",
                imagepath: "/bower_components/AdminLTE/dist/img/avatar.png",
                querytime: moment("2015-10-21 11:30", "YYYY-MM-DD HH:mm").toDate(),
                querymessage: "Yes we keep all your information encrypted and safe",
                isclient: false
            }, {
                queryid: 4,
                queryusername: "Peter",
                imagepath: "/bower_components/AdminLTE/dist/img/avatar.png",
                querytime: moment("2015-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
                querymessage: "Please send me your latest contact email id please",
                isclient: false
            }];
            sc.actions = [{
                actionid: 1,
                action: "Design a nice theme",
                iscompleted: false,
                actioninitiateddate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
                completedate: ""
            }, {
                actionid: 2,
                action: "Make the theme responsive",
                iscompleted: false,
                actioninitiateddate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
                completedate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
            }, {
                actionid: 3,
                action: "Let theme shine like a star",
                iscompleted: true,
                actioninitiateddate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
                completedate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
            }, {
                actionid: 4,
                action: "Check your messages and notifications",
                iscompleted: false,
                actioninitiateddate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
                completedate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
            }, {
                actionid: 5,
                action: "Change color and give options to user",
                iscompleted: true,
                actioninitiateddate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
                completedate: moment("2016-10-21 16:22", "YYYY-MM-DD HH:mm").toDate(),
            }];
            sc.history = [{
                historyid: 1,
                historydate: moment("2016-10-21 16:27", "YYYY-MM-DD HH:mm").toDate(),
                message: "Your payment was received.",
                historytypeid: 1,
            }, {
                historyid: 2,
                historydate: moment("2016-10-21 10:05", "YYYY-MM-DD HH:mm").toDate(),
                message: "Your document correction was done.",
                historytypeid: 2,
            }, {
                historyid: 3,
                historydate: moment("2016-10-15 15:23", "YYYY-MM-DD HH:mm").toDate(),
                message: "Our team is working on your case.",
                historytypeid: 2,
            }, {
                historyid: 4,
                historydate: moment("2016-10-12 12:01", "YYYY-MM-DD HH:mm").toDate(),
                message: "Your payment was received.",
                historytypeid: 3,
            }, {
                historyid: 5,
                historydate: moment("2016-10-01 18:55", "YYYY-MM-DD HH:mm").toDate(),
                message: "Your document correction was done.",
                historytypeid: 4,
            }, {
                historyid: 6,
                historydate: moment("2016-10-01 16:22", "YYYY-MM-DD HH:mm").toDate(),
                message: "Your document correction was done.",
                historytypeid: 5,
            }];
            sc.groupedhistory = [];
            sc.contactinformation = {
                phone: "(312)555-888",
                fax: "(312)555-888",
                address: "1234 N Michigan Ave. Chicago, IL 60611"
            };
            sc.medias = [{
                mediatype: 1,
                medianame: "How to do xyz?",
                medialink: ""
            }, {
                mediatype: 2,
                medianame: "How to prepare ABC?",
                medialink: ""
            }]
            sc.mediattypeicon = function(mediatype) {
                var mediaicon = "";
                switch (mediatype) {
                    case 1:
                        mediaicon = "fa-play";
                        break;
                    case 2:
                        mediaicon = "fa-arrow-down";
                        break;
                }
                return mediaicon;
            }
            sc.mediattypestyle = function(mediatype) {
                var mediaicon = "";
                switch (mediatype) {
                    case 1:
                        mediaicon = "red";
                        break;
                    case 2:
                        mediaicon = "green";
                        break;
                }
                return mediaicon;
            }
            sc.historytype = function(history) {
                console.log(history.historytypeid);
                switch (history.historytypeid) {
                    case 1:
                        history.icon = "fa-credit-card";
                        history.iconcolor = "bg-green";
                        break;
                    case 2:
                        history.icon = "fa-comments";
                        history.iconcolor = "bg-aqua";
                        break;
                    case 3:
                        history.icon = "fa-envelope-o";
                        history.iconcolor = "bg-grey";
                        break;
                    case 4:
                        history.icon = "fa-file-code-o";
                        history.iconcolor = "bg-red";
                        break;
                    case 5:
                        history.icon = "fa-check-circle";
                        history.iconcolor = "bg-light-blue";
                        break;
                }
                return history.icon + " " + history.iconcolor;
            }
            sc.historygrouped = function() {
                var tempdata = lodash.groupBy(sc.history, function(o) {
                    return moment.utc(o.historydate).local().format("MMM Do YYYY");
                });
                sc.groupedhistory = [];
                for (var i = 0; i < Object.keys(tempdata).length; i++) {
                    sc.groupedhistory.push({
                        date: Object.keys(tempdata)[i],
                        value: tempdata[Object.keys(tempdata)[i]]
                    });
                }
            };
            sc.historygrouped();
        }
    ]);
});
