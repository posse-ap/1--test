// モーダル
$(function() {


    $('#openModal').click(function() {
        $('#modalArea').fadeIn();
        return false
    });


    $('#openModal2').click(function() {
        $('#modalArea').fadeIn();
        return false
    });


    $('#closeModal , #modalBg').click(function() {
        $('#modalArea').fadeOut();
        return false
    });


});

//--------------------- こっから棒グラフ---------------------------------------
function create_chart_1() {
    google.load("visualization", "1", { packages: ["corechart"] });
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        var dataArray = [
            ['day', 'time']
        ];
        var df = $.Deferred();

        $(function() {
            $.ajax({
                url: 'study_time.json',
                dataType: 'json',
            }).done(function(data) {
                console.log("success");
                // $(data.study_time).each(function () {
                // 親要素名？をいれても動く
                $(data).each(function() {
                    var data_item = [this.day, this.time];
                    dataArray.push(data_item);
                });
                df.resolve();
            }).fail(function() {
                console.log("error");
            });
        });

        df.done(function() {
            var chartdata = google.visualization.arrayToDataTable(dataArray);

            var options = {
                // title: 'Age vs. Weight comparison',
                //hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
                //vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
                legend: 'none',
                'chartArea': { top: 10, 'width': '80%', 'height': '80%' },
                //hAxis:{showTextEvery:2}
                //vAxis:{gridlined:{count:7}}
                // legend:{position:'bottom'}
                // baselineColor: 'none',
                // gridlines: 'none',

                // baselineColor: "transparent",
                // gridlines: {
                //     color: "transparent"
                // },
                // textPosition: "none",
                // vAxes: {
                //     gridLines: {
                //         color: '#fffffff'
                //     }
                // },
                vAxis: {
                    gridlines: {
                        color: "#ffffff"
                    },
                    format: "0h"
                },
                hAxis: {
                    gridlines: {
                        color: "#ffffff"
                    }
                },
                baselineColor: "transparent",

                colors: ['#1754EF', '#0F71BD', '#20BDDE']

            };
            var chart = new google.visualization.ColumnChart(document.getElementById('bargraph'));

            chart.draw(chartdata, options);
        });
    }
}






// --------------こっから円グラフ--------------------------
//コンテンつ
function create_chart_2() {
    google.load("visualization", "1", { packages: ["corechart"] });
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        var df = $.Deferred();

        var sum_1 = 0;
        var sum_2 = 0;
        var sum_3 = 0;

        $(function() {
            $.ajax({
                url: 'study_contents.json',
                dataType: 'json',
            }).done(function(data) {
                console.log("success");
                $(data).each(function() {
                    sum_1 = sum_1 + this.c_1;
                    sum_2 = sum_2 + this.c_2;
                    sum_3 = sum_3 + this.c_3;
                });

                df.resolve();
            }).fail(function() {
                console.log("error");
            });
        });

        df.done(function() {
            var chartdata_2 = google.visualization.arrayToDataTable([
                ['day', 'contents'],
                ['N予備校', sum_1],
                ['ドットインストール', sum_2],
                ['posse課題', sum_3]
            ]);
            console.log(chartdata_2);
            var options = {
                // title: 'Age vs. Weight comparison',
                //hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
                //vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
                legend: 'none',
                //legend:{position:'bottom'},

                'chartArea': { top: 0, 'width': '100%', 'height': '100%' },
                pieHole: 0.5,
                colors: ['#1754EF', '#0F71BD', '#20BDDE'],

            };
            var chart_2 = new google.visualization.PieChart(document.getElementById('pieChart_contents'));

            chart_2.draw(chartdata_2, options);
        });
    }
}



//言語
function create_chart_3() {
    google.load("visualization", "1", { packages: ["corechart"] });
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        var df = $.Deferred();

        var sum_1 = 0;
        var sum_2 = 0;
        var sum_3 = 0;
        var sum_4 = 0;
        var sum_5 = 0;
        var sum_6 = 0;
        var sum_7 = 0;
        var sum_8 = 0;

        $(function() {
            $.ajax({
                url: 'study_language.json',
                dataType: 'json',
            }).done(function(data) {
                console.log("success");
                $(data).each(function() {
                    sum_1 = sum_1 + this.l_1;
                    sum_2 = sum_2 + this.l_2;
                    sum_3 = sum_3 + this.l_3;
                    sum_4 = sum_4 + this.l_4;
                    sum_5 = sum_5 + this.l_5;
                    sum_6 = sum_6 + this.l_6;
                    sum_7 = sum_7 + this.l_7;
                    sum_8 = sum_8 + this.l_8;
                });

                df.resolve();
            }).fail(function() {
                console.log("error");
            });
        });

        df.done(function() {
            var chartdata_2 = google.visualization.arrayToDataTable([
                ['day', 'contents'],
                ['HTML', sum_1],
                ['CSS', sum_2],
                ['JavaScript', sum_3],
                ['PHP', sum_4],
                ['Laraver', sum_5],
                ['SQL', sum_6],
                ['SHELL', sum_7],
                ['情報基礎知識', sum_8]
            ]);
            var options = {
                // title: 'Age vs. Weight comparison',
                //hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
                //vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
                legend: 'none',
                'chartArea': { top: 0, 'width': '100%', 'height': '100%' },
                pieHole: 0.5,
                colors: ['#1754EF', '#0F71BD', '#20BDDE', '#3CCEFE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],

            };
            var chart_2 = new google.visualization.PieChart(document.getElementById('pieChart_language'));

            chart_2.draw(chartdata_2, options);
        });
    }
}
create_chart_1();
create_chart_2();
create_chart_3();


window.onresize = function() {
    create_chart_1();
    create_chart_2();
    create_chart_3();
}