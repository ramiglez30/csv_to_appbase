
var objMapping = JSON.parse({"sourceName":"sffasfasdfasdf","fileType":"application/vnd.ms-excel","formName":"TRANSACTIONS","isFirstColumnHeading":false,"mappingProperties":[{"fileColumn":{"colStart":0,"colEnd":0,"index":0,"isIgnored":false},"formColumn":{"name":"DAY","type":"DATE","order":"0","isReference":false,"reference":{"formName":"","fieldName":""}}},{"fileColumn":{"colStart":0,"colEnd":0,"index":1,"isIgnored":false},"formColumn":{"name":"DESCRIPTION","type":"TEXT","order":"3","isReference":false,"reference":{"formName":"","fieldName":""}}},{"fileColumn":{"colStart":0,"colEnd":0,"index":2,"isIgnored":false},"formColumn":{"name":"DEBIT","type":"NUMBER","order":"4","isReference":false,"reference":{"formName":"","fieldName":""}}},{"fileColumn":{"colStart":0,"colEnd":0,"index":3,"isIgnored":false},"formColumn":{"name":"CREDIT","type":"NUMBER","order":"5","isReference":false,"reference":{"formName":"","fieldName":""}}},{"fileColumn":{"colStart":0,"colEnd":0,"index":4,"isIgnored":true},"formColumn":{"name":"","type":"","order":0,"isReference":false,"reference":{"formName":"","fieldName":""}}},{"fileColumn":{"colStart":0,"colEnd":0,"index":5,"isIgnored":true},"formColumn":{"name":"","type":"","order":0,"isReference":false,"reference":{"formName":"","fieldName":""}}}]});

var dataArray = JSON.parse('[["04.05.2016","Payment order electronic banking ,Expenses Fernando ",1500,"","04.05.2016",206.06],["04.05.2016","Payment order electronic banking ,ignovus (upgrade website) ",7500,"","04.05.2016",""],["03.05.2016","Payment order electronic banking ,Miete Munich May 2016 ",1680,"","03.05.2016",9206.06],["03.05.2016","Payment order electronic banking ,Brian Tobler SW Support Apr 2016 ",4216.13,"","03.05.2016",""],["03.05.2016","Payment order electronic banking ,Lucia Marroig SW Sup. Apr 2016 ",5277.96,"","03.05.2016",""],["03.05.2016","Payment order electronic banking ,EUR to USD ",20279.27,"","03.05.2016",""],["29.04.2016","Expenses for money transfer , ",60.09,"","29.04.2016",40659.42],["27.04.2016","Payment order electronic banking ,Host Europe Rechnr. 19220570 ",46.16,"","27.04.2016",40719.51],["27.04.2016","Payment order electronic banking ,Host Europe Rechnr. 19333860 ",46.16,"","27.04.2016",""],["26.04.2016","Payment order electronic banking ,Fernando Guigou ",2500,"","26.04.2016",40811.83],["26.04.2016","Payment order electronic banking ,ignovus SW Dev Mar 2016 ",9800,"","26.04.2016",""],["25.04.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",20419.5,"25.04.2016",53111.83],["25.04.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",32683.12,"25.04.2016",""],["12.04.2016","Payment order electronic banking ,Expenses Fernando ",1600,"","12.04.2016",9.21],["11.04.2016","SEPA-standard incoming payment ,Dr. Helmut Gruber-Ballehr ","",1600,"11.04.2016",1609.21],["06.04.2016","Payment order electronic banking ,Expenses Fernando ",1150,"","06.04.2016",9.21],["06.04.2016","Payment order electronic banking ,EX 0857-1740435-72-1 AT 1.159756862 ","",258.67,"06.04.2016",""],["04.04.2016","Payment order electronic banking ,Federico Becaria SW Sup Mar 2016 ",675,"","04.04.2016",900.54],["04.04.2016","Payment order electronic banking ,Miete Munich Apr 2016 ",1600,"","04.04.2016",""],["04.04.2016","Payment order electronic banking ,Brian Tobler SW Support Mar 2016 ",5134.59,"","04.04.2016",""],["04.04.2016","Payment order electronic banking ,Lucia Marroig SW Dev Mar 2016 ",5245.43,"","04.04.2016",""],["01.04.2016","Payment order electronic banking ,EUR to CHF ",9.34,"","01.04.2016",13555.56],["01.04.2016","Payment order electronic banking ,EUR to USD ",22327.37,"","01.04.2016",""],["31.03.2016","Balance settlement of expenses ,As shown separately ",23.83,"","31.03.2016",35892.27],["31.03.2016","Expenses for money transfer , ",62.25,"","31.03.2016",""],["31.03.2016","Payment order electronic banking ,EUR to CHF ",93.32,"","31.03.2016",""],["31.03.2016","Payment order electronic banking ,Kanton Zug Direkct Bundesteuer ",190.37,"","31.03.2016",""],["31.03.2016","Payment order electronic banking ,Direkte Bundesteuer Aargau ",521.65,"","31.03.2016",""],["31.03.2016","Payment order electronic banking ,Fernando Guigou ",2000,"","31.03.2016",""],["24.03.2016","Payment order electronic banking ,ignovus SW Dev Feb 2016 2/2 ",9700,"","24.03.2016",38783.69],["23.03.2016","Cash withdrawal ,CS Dietikon (0193) ",1100,"","23.03.2016",48483.69],["21.03.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",19191.5,"21.03.2016",49583.69],["21.03.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",30360.4,"21.03.2016",""],["04.03.2016","Payment order electronic banking ,ignovus SW Dev Feb 2016 1/2 ",3900,"","04.03.2016",31.79],["03.03.2016","Payment order electronic banking ,Lucia Marroig SW Sup Feb 2016 ",229.5,"","03.03.2016",3931.79],["03.03.2016","Payment order electronic banking ,Federico Becaria SW Sup Feb 2016 ",4549.5,"","03.03.2016",""],["03.03.2016","Payment order electronic banking ,Brian Tobler SW Support Feb 2016 ",5584.41,"","03.03.2016",""],["03.03.2016","Payment order electronic banking ,EX 0857-1740435-72-1 AT 1.1132278693 ","",359.32,"03.03.2016",""],["02.03.2016","Payment order electronic banking ,Miete Munich Mar 2016 ",1680,"","02.03.2016",13935.88],["02.03.2016","Payment order electronic banking ,Fernando Guigou ",3000,"","02.03.2016",""],["02.03.2016","Payment order electronic banking ,EUR to USD ",19654.86,"","02.03.2016",""],["01.03.2016","Payment order electronic banking ,Admin. Buchhaltung 2015 ",1825.87,"","01.03.2016",38270.74],["29.02.2016","Expenses for money transfer , ",26.69,"","29.02.2016",40096.61],["26.02.2016","Payment order electronic banking ,Expenses Fernando ",1500,"","26.02.2016",40123.3],["25.02.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",13137.5,"25.02.2016",41623.3],["25.02.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",21600,"25.02.2016",""],["22.02.2016","Payment order electronic banking ,Host Europe Rechnr, 19114066 ",46.1,"","22.02.2016",6885.8],["04.02.2016","Payment order electronic banking ,Brian Tobler SW Support Jan 2016 ",3516.75,"","04.02.2016",6931.9],["03.02.2016","Payment order electronic banking ,Federico Becaria SW Sup Jan 2016 ",3577.5,"","03.02.2016",10448.65],["02.02.2016","Payment order electronic banking ,EUR to CHF ",50,"","02.02.2016",14026.15],["02.02.2016","Payment order electronic banking ,EUR to USD ",14925.52,"","02.02.2016",""],["01.02.2016","Payment order electronic banking ,Host Europe Rechnr, 19006416 ",45.83,"","01.02.2016",29001.67],["01.02.2016","Payment order electronic banking ,Miete Munich Feb 2016 ",1680,"","01.02.2016",""],["27.01.2016","Payment order electronic banking ,Expenses Fernando ",1000,"","27.01.2016",30727.5],["26.01.2016","Payment order electronic banking ,ignovus SW Dev Jan 2016 ",9800,"","26.01.2016",31727.5],["21.01.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",15001,"21.01.2016",41527.5],["21.01.2016","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",24795,"21.01.2016",""],["06.01.2016","Payment order electronic banking ,HostEurope Inovice 18897158 ",46.81,"","06.01.2016",1731.5],["31.12.2015","Balance settlement of expenses ,As shown separately ",24.06,"","31.12.2015",1778.31],["31.12.2015","Payment order electronic banking ,Miete Januar 2016 ",1684.61,"","31.12.2015",""],["31.12.2015","Payment order electronic banking ,Federico Becaria SW Sup Dec 2015 ",3374.72,"","31.12.2015",""],["31.12.2015","Payment order electronic banking ,EUR to USD ",17678.06,"","31.12.2015",""],["24.12.2015","Payment order electronic banking ,G+H Beteiligung Domizilgebuhren ",1132.39,"","24.12.2015",24539.76],["24.12.2015","Payment order electronic banking ,Buchhaltung 2015, 2. Semester ",1783.52,"","24.12.2015",""],["24.12.2015","Payment order electronic banking ,Brian Tobler SW Dev Dec 2015 ",4752.54,"","24.12.2015",""],["22.12.2015","Payment order electronic banking ,ignovus SW Dev Dec 2015 ",9804.61,"","22.12.2015",32208.21],["22.12.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",8592.5,"22.12.2015",""],["22.12.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",33280,"22.12.2015",""],["10.12.2015","Payment order electronic banking ,Brian Tobler SW Dev Nov 2015 ",4239.95,"","10.12.2015",140.32],["09.12.2015","Payment order electronic banking ,ignovus SW Dev Nov 2015 ",6004.61,"","09.12.2015",4380.27],["07.12.2015","Payment order electronic banking ,EUR to USD ",23525.1,"","07.12.2015",10384.88],["25.11.2015","Payment order electronic banking ,Deposit + Miete December 2015 ",4877,"","25.11.2015",33909.98],["23.11.2015","Payment order electronic banking ,HostEurope Inovice 18792021 ",46.88,"","23.11.2015",38786.98],["23.11.2015","Payment order electronic banking ,ignovus SW Dev Migration OShift ",9784.59,"","23.11.2015",""],["19.11.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",9063.5,"19.11.2015",48618.45],["19.11.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",39554.55,"19.11.2015",""],["17.11.2015","Payment order electronic banking ,Fernando Expenses ",500,"","17.11.2015",0.4],["16.11.2015","Payment order electronic banking ,EX 0857-1740435-72-1 AT 1.0898978864 ","",14.68,"16.11.2015",500.4],["10.11.2015","Payment order electronic banking ,HostEurope Inovice 18680986 ",47.12,"","10.11.2015",485.72],["09.11.2015","Payment order electronic banking ,Brian Tobler SW Support Oct 2015 ",4494.29,"","09.11.2015",532.84],["09.11.2015","Payment order electronic banking ,EX 0857-1740435-72-1 AT 1.0983919301 ","",637.3,"09.11.2015",""],["02.11.2015","Payment order electronic banking ,ignovus SW Dev Oct 2015 ",3004.59,"","02.11.2015",4389.83],["02.11.2015","Payment order electronic banking ,EUR to USD ",28118.1,"","02.11.2015",""],["23.10.2015","Payment order electronic banking ,Buchhaltung 2015, 1. Semester ",1782.07,"","23.10.2015",35512.52],["21.10.2015","Payment order electronic banking ,Ignovus Website Dev. Agiles 2015 ",8204.58,"","21.10.2015",37294.59],["20.10.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",8959,"20.10.2015",45499.17],["20.10.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",36531.82,"20.10.2015",""],["13.10.2015","Payment order electronic banking ,HostEurope 79.80 ",74.34,"","13.10.2015",8.35],["13.10.2015","Payment order electronic banking ,EX 0857-1740435-72-1 AT 1.1589817219 ","",12.94,"13.10.2015",""],["12.10.2015","Payment order electronic banking ,HostEurope Inovice 18575641 ",46.47,"","12.10.2015",69.75],["12.10.2015","Payment order electronic banking ,EX 0857-1740435-71 AT 1.1144001575 ","",35.89,"12.10.2015",""],["05.10.2015","Payment order electronic banking ,Brian Tobler SW Dev Set 2015 ",3563.73,"","05.10.2015",80.33],["05.10.2015","Payment order electronic banking ,ignovus SW Dev Sep 2015 ",3704.58,"","05.10.2015",""],["05.10.2015","Payment order electronic banking ,EUR to USD ",24352.59,"","05.10.2015",""],["30.09.2015","Balance settlement of expenses ,As shown separately ",22.92,"","30.09.2015",31701.23],["30.09.2015","Balance of closing entries ,as shown separately ","",0.23,"30.09.2015",""],["25.09.2015","Payment order electronic banking ,Ignovus Website Development ",8704.61,"","25.09.2015",31723.92],["24.09.2015","Payment order electronic banking ,Fernando Expenses ",3000,"","24.09.2015",40428.53],["24.09.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",8722,"24.09.2015",""],["24.09.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",34697.62,"24.09.2015",""],["14.09.2015","Payment order electronic banking ,HostEurope Inovice 18473222 ",46.25,"","14.09.2015",8.91],["07.09.2015","Payment order electronic banking ,ignovus SW Dev Aug 2015 ",7804.61,"","07.09.2015",55.16],["04.09.2015","Payment order electronic banking ,Brian Tobler SW Support Aug 2015 ",4309.88,"","04.09.2015",7859.77],["03.09.2015","Payment order electronic banking ,EUR to USD ",23542.96,"","03.09.2015",12169.65],["25.08.2015","Payment order electronic banking ,Fernando Expenses ",1000,"","25.08.2015",35712.61],["25.08.2015","Payment order electronic banking ,ignovus SW Dev Jul 2015 ",9804.71,"","25.08.2015",""],["24.08.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",9581.5,"24.08.2015",46517.32],["24.08.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",36663.24,"24.08.2015",""],["04.08.2015","Payment order electronic banking ,HostEurope Inovice 18362575 ",47.87,"","04.08.2015",272.58],["04.08.2015","Payment order electronic banking ,Fernando Expenses ",3000,"","04.08.2015",""],["04.08.2015","Payment order electronic banking ,ignovus SW Dev Jun 2015 ",3504.71,"","04.08.2015",""],["03.08.2015","Payment order electronic banking ,Brian Tobler SW Dev Jul 2015 ",4774.01,"","03.08.2015",6825.16],["03.08.2015","Payment order electronic banking ,EUR to USD ",25469.98,"","03.08.2015",""],["24.07.2015","Payment order electronic banking ,Fernando Expenses ",2000,"","24.07.2015",37069.15],["24.07.2015","Payment order electronic banking ,ignovus SW Dev May 2015 ",9804.8,"","24.07.2015",""],["21.07.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",9333.5,"21.07.2015",48873.95],["21.07.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",39519.05,"21.07.2015",""],["08.07.2015","Payment order electronic banking ,HostEurope Inovice 18256709 ",48.79,"","08.07.2015",21.4],["07.07.2015","Payment order electronic banking ,ignovus SW Dev Apr 2015 ",5304.8,"","07.07.2015",70.19],["03.07.2015","Cash withdrawal ,NAB Wohlen (0887) ",500,"","03.07.2015",5374.99],["03.07.2015","Payment order electronic banking ,Brian Tobler SW Support Jun 2015 ",4640.09,"","03.07.2015",""],["02.07.2015","Payment order electronic banking ,EUR to USD ",26188.12,"","02.07.2015",10515.08],["30.06.2015","Expenses for money transfer , ",5.76,"","30.06.2015",36703.2],["30.06.2015","Balance settlement of expenses ,As shown separately ",23.05,"","30.06.2015",""],["30.06.2015","Balance of closing entries ,as shown separately ","",0.54,"30.06.2015",""],["26.06.2015","Payment order electronic banking ,Fernando Expenses ",3000,"","26.06.2015",36731.47],["23.06.2015","Payment order electronic banking ,Fernando Expenses ",2000,"","23.06.2015",39731.47],["23.06.2015","Payment order electronic banking ,EUR to USD ",8683.67,"","23.06.2015",""],["22.06.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",8641.5,"22.06.2015",50415.14],["22.06.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",41589.47,"22.06.2015",""],["10.06.2015","Payment order electronic banking ,Kanton Zug ",118.74,"","10.06.2015",184.17],["10.06.2015","Payment order electronic banking ,Kanton Zug Bundesteuer ",198.15,"","10.06.2015",""],["04.06.2015","Payment order electronic banking ,Fernando Expenses ",800,"","04.06.2015",501.06],["03.06.2015","Payment order electronic banking ,HostEurope Inovice 18151774 ",48.77,"","03.06.2015",1301.06],["02.06.2015","Payment order electronic banking ,Brian Tobler SW Dev May 2015 ",4266.41,"","02.06.2015",1349.83],["02.06.2015","Payment order electronic banking ,EUR to USD ",20024.17,"","02.06.2015",""],["01.06.2015","Payment order electronic banking ,EUR to USD ",2804.24,"","01.06.2015",25640.41],["25.05.2015","Payment order electronic banking ,ignovus SW Dev Mar 2015 ",9804.76,"","25.05.2015",28444.65],["22.05.2015","Payment order electronic banking ,Fernando Guigou May 2015 ",5000,"","22.05.2015",38249.41],["22.05.2015","Payment order electronic banking ,EUR to USD ",7313.11,"","22.05.2015",""],["22.05.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",9075,"22.05.2015",""],["22.05.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",41474.05,"22.05.2015",""],["12.05.2015","Payment order electronic banking ,EUR to USD ",10,"","12.05.2015",13.47],["11.05.2015","Payment order electronic banking ,Brian Tobler SW Support Apr 2015 ",4500.5,"","11.05.2015",23.47],["08.05.2015","Payment order electronic banking ,EUR to USD ",23500,"","08.05.2015",4523.97],["28.04.2015","Payment order electronic banking ,Buchhaltung 2014 ",1909.31,"","28.04.2015",28023.97],["28.04.2015","Payment order electronic banking ,EUR to USD ",2321.02,"","28.04.2015",""],["28.04.2015","Payment order electronic banking ,Marcos Perez SW Support Mar 2015 ",4006.85,"","28.04.2015",""],["28.04.2015","Payment order electronic banking ,ignovus Lean Project Feb 2015 ",9804.79,"","28.04.2015",""],["27.04.2015","Payment order electronic banking ,Fernando Guigou Apr 2015 ",5000,"","27.04.2015",46065.94],["27.04.2015","Payment order electronic banking ,EUR to USD ",6580.51,"","27.04.2015",""],["27.04.2015","SEPA-standard incoming payment ,Dr. Helmut Gruber-Ballehr ","",2203,"27.04.2015",""],["27.04.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",16523,"27.04.2015",""],["27.04.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",38886.36,"27.04.2015",""],["10.04.2015","Payment order electronic banking ,Fernando Expenses ",1500,"","10.04.2015",34.09],["10.04.2015","Payment order electronic banking ,Brian Tobler SW Dev Mar 2015 ",1691.42,"","10.04.2015",""],["10.04.2015","Payment order electronic banking ,Brian Tobler SW Support Mar 2015 ",3000,"","10.04.2015",""],["08.04.2015","Foreign exchange spot transaction ,FXCS--0408-62387 ",16887.14,"","08.04.2015",6225.51],["31.03.2015","Balance settlement of expenses ,As shown separately ",24.92,"","31.03.2015",23112.65],["31.03.2015","Payment order electronic banking ,HostEurope Inovice 17932087 ",145.57,"","31.03.2015",""],["31.03.2015","Payment order electronic banking ,Fernando Suzacq Feb 2015 ",2577.36,"","31.03.2015",""],["31.03.2015","Payment order electronic banking ,Marcos Perez SW Support Feb 2015 ",3949.02,"","31.03.2015",""],["31.03.2015","Payment order electronic banking ,ignovus Lean Project Jan 2015 ",9804.7,"","31.03.2015",""],["31.03.2015","Balance of closing entries ,as shown separately ","",0.78,"31.03.2015",""],["30.03.2015","Payment order electronic banking ,Fernando Guigou Mar 2015 ",5000,"","30.03.2015",39613.44],["30.03.2015","Payment order electronic banking ,EUR to USD ",9869.79,"","30.03.2015",""],["25.03.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",16692,"25.03.2015",54483.23],["25.03.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG ","",36996.67,"25.03.2015",""],["11.03.2015","Payment order electronic banking ,AHV ",837.66,"","11.03.2015",794.56],["11.03.2015","Payment order electronic banking ,Fernando Expenses ",1000,"","11.03.2015",""],["09.03.2015","Payment order electronic banking ,EUR to USD ",28.17,"","09.03.2015",2632.22],["09.03.2015","Payment order electronic banking ,Brian Tobler SW Support Feb 2015 ",4751.93,"","09.03.2015",""],["04.03.2015","Foreign exchange spot transaction ,FXCS--0304-02558 ",16879.56,"","04.03.2015",7412.32],["02.03.2015","Cash withdrawal ,CS Z�rich-Paradeplatz (0835 ",142.56,"","02.03.2015",24291.88],["23.02.2015","Payment order electronic banking ,Miete Nadistr Mar 2015 ",1600,"","23.02.2015",24434.44],["23.02.2015","Payment order electronic banking ,Fernando Guigou Feb 2015 ",5000,"","23.02.2015",""],["23.02.2015","Payment order electronic banking ,Ignovus SW Dev Jan 2015 ",6894.82,"","23.02.2015",""],["20.02.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",10067.5,"20.02.2015",37929.26],["20.02.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",27823.1,"20.02.2015",""],["17.02.2015","Payment order electronic banking ,Jonatan Support Dec 2014 (ERROR) ",1107.94,"","17.02.2015",38.66],["16.02.2015","Payment order electronic banking ,EX 0857-1740435-71 AT 1.0827854625 ","",92.35,"16.02.2015",1146.6],["09.02.2015","Payment order electronic banking ,Fernando Expenses ",1000,"","09.02.2015",1054.25],["09.02.2015","Payment order electronic banking ,Brian Tobler SW Support Jan 2015 ",1799.55,"","09.02.2015",""],["09.02.2015","Payment order electronic banking ,Ignovus Dec 2014 ",2004.82,"","09.02.2015",""],["09.02.2015","Payment order electronic banking ,Marcos Perez SW Support Jan 2015 ",4633.75,"","09.02.2015",""],["05.02.2015","Payment order electronic banking ,Miete Nadistr Feb 2015 ",1600,"","05.02.2015",10492.37],["04.02.2015","Foreign exchange spot transaction ,FXCS--0204-83329 ",18617.02,"","04.02.2015",12092.37],["03.02.2015","Payment order electronic banking ,ignovus Lean Project Dec 2014 ",9804.82,"","03.02.2015",30709.39],["26.01.2015","Payment order electronic banking ,Fernando Guigou Jan 2015 ",5000,"","26.01.2015",40514.21],["23.01.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",6537,"23.01.2015",45514.21],["23.01.2015","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",35520,"23.01.2015",""],["20.01.2015","Payment order electronic banking ,G+H Buchhaltung 2013 St. Veranl. ",487.51,"","20.01.2015",3457.21],["16.01.2015","Payment ,Standard Chartered Bank Germany Bran ","",1000.04,"15.01.2015",3944.72],["14.01.2015","Cash withdrawal banknotes FC ,CS Z�rich-Paradeplatz (0835 ",512.5,"","14.01.2015",2944.68],["14.01.2015","Foreign exchange spot transaction ,FXCS--0112-43402 ",24480.33,"","14.01.2015",""],["13.01.2015","Payment order electronic banking ,HostEurope Inovice 17618767 ",42.29,"","13.01.2015",27937.51],["13.01.2015","Payment order electronic banking ,HostEurope Inovice 17517588 ",42.29,"","13.01.2015",""],["13.01.2015","Payment order electronic banking ,Jonatan Support Dec 2014 ",1104.11,"","13.01.2015",""],["13.01.2015","Payment order electronic banking ,Brian SW Support Dec 2014 ",2479.98,"","13.01.2015",""],["31.12.2014","Expenses for money transfer , ",2.49,"","31.12.2014",31606.18],["31.12.2014","Balance settlement of expenses ,As shown separately ",21.62,"","31.12.2014",""],["31.12.2014","Balance of closing entries ,as shown separately ","",0.81,"31.12.2014",""],["18.12.2014","Payment order electronic banking ,G+H Domizilgebuhren 2015 ",1019.09,"","18.12.2014",31629.48],["18.12.2014","Payment order electronic banking ,Miete Nadistr Dec 2014 ",1600,"","18.12.2014",""],["18.12.2014","Payment order electronic banking ,Miete Nadistr Jan 2015 ",1600,"","18.12.2014",""],["18.12.2014","Payment order electronic banking ,G+H Buchhaltung 2014 ",3210.12,"","18.12.2014",""],["18.12.2014","Payment order electronic banking ,Payment Fernando ",6000,"","18.12.2014",""],["18.12.2014","Payment order electronic banking ,ignovus Lean Project Nov 2014 ",9804.16,"","18.12.2014",""],["17.12.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",17033.04,"17.12.2014",54862.85],["17.12.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",37640,"17.12.2014",""],["03.12.2014","Payment order electronic banking ,Brian SW Development Nov 2014 ",2254.76,"","03.12.2014",189.81],["03.12.2014","Payment order electronic banking ,Brian SW Support Nov 2014 ",3930.62,"","03.12.2014",""],["03.12.2014","Payment order electronic banking ,Ignovus Nov 2014 ",4504.16,"","03.12.2014",""],["03.12.2014","Payment order electronic banking ,Jonatan Support Nov 2014 ",5246.64,"","03.12.2014",""],["03.12.2014","Foreign exchange spot transaction ,FXCS--1201-01759 ",23577.24,"","03.12.2014",""],["27.11.2014","Payment order electronic banking ,G+H Buchhaltung 2013 St. Angeleg ",320.64,"","27.11.2014",39703.23],["27.11.2014","Payment order electronic banking ,G+H Buchhaltung 2013 St. Angeleg ",320.64,"","27.11.2014",""],["27.11.2014","Payment order electronic banking ,Payment Fernando ",6000,"","27.11.2014",""],["26.11.2014","Payment order electronic banking ,ignovus Lean Project Oct 2014 ",9604.15,"","26.11.2014",46344.51],["24.11.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",19437,"24.11.2014",55948.66],["24.11.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",36495.65,"24.11.2014",""],["21.11.2014","Payment order electronic banking ,IN 0857-1740435-71 AT 1.178904175 ",100,"","21.11.2014",16.01],["07.11.2014","Foreign exchange forward transaction ,FXCS--1104-99542 ",22723.58,"","07.11.2014",116.01],["05.11.2014","Payment order electronic banking ,Jonatan Support Oct 2014 ",3024.05,"","05.11.2014",22839.59],["05.11.2014","Payment order electronic banking ,Ignovus Oct 2014 ",3304.15,"","05.11.2014",""],["05.11.2014","Payment order electronic banking ,Brian Lean OCT 2014 ",4000,"","05.11.2014",""],["05.11.2014","Payment order electronic banking ,Brian SW Support Oct 2014 ",5109.48,"","05.11.2014",""],["05.11.2014","Payment order electronic banking ,Brian SW Support Sep 2014 ",5311.71,"","05.11.2014",""],["27.10.2014","Payment order electronic banking ,Miete Nadistr Nov 2014 ",1600,"","27.10.2014",43588.98],["27.10.2014","Payment order electronic banking ,Fernando Expenses ",2000,"","27.10.2014",""],["27.10.2014","Payment order electronic banking ,ignovus Lean Project Set 2014 ",9804.14,"","27.10.2014",""],["22.10.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",11736.5,"22.10.2014",56993.12],["22.10.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",40350,"22.10.2014",""],["21.10.2014","Payment order electronic banking ,HostEurope Inovice 174111324 ",42.1,"","21.10.2014",4906.62],["21.10.2014","Payment order electronic banking ,HostEurope Inovice 17310357 ",42.1,"","21.10.2014",""],["06.10.2014","Payment order electronic banking ,Jonatan Support Set 2014 ",510.02,"","06.10.2014",4990.82],["06.10.2014","Payment order electronic banking ,Ignovus Set 2014 ",8504.14,"","06.10.2014",""],["02.10.2014","Foreign exchange spot transaction ,FXCS--1002-77564 ",25744.17,"","02.10.2014",14004.98],["30.09.2014","Balance settlement of expenses ,As shown separately ",19.05,"","30.09.2014",39749.15],["30.09.2014","Payment order electronic banking ,Miete Nadistr Oct 2014 ",1600,"","30.09.2014",""],["30.09.2014","Balance of closing entries ,as shown separately ","",0.51,"30.09.2014",""],["26.09.2014","Payment order electronic banking ,Marcos Perez Aug 2014 ",1591.83,"","26.09.2014",41367.69],["26.09.2014","Payment order electronic banking ,2700 ",2183.76,"","26.09.2014",""],["26.09.2014","Payment order electronic banking ,Ignovus Aug 2014 ",9804.14,"","26.09.2014",""],["25.09.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",18225,"25.09.2014",54947.42],["25.09.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",36195,"25.09.2014",""],["03.09.2014","Payment order electronic banking ,ignovus Lean Project Aug 2014 ",8904.14,"","03.09.2014",527.42],["02.09.2014","Payment order electronic banking ,Ana SW Dev Aug 2014 ",1189.64,"","02.09.2014",9431.56],["02.09.2014","Payment order electronic banking ,Camila Riveron Aug 2014 ",1306.2,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Miete Nadistr Set 2014 ",1600,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Yasim Zeballos SW Dev Aug 2014 ",1675.31,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Lucia Marroig SW Dev Aug 2014 ",2044.42,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Fernando Suzacq Aug 2014 ",2122.13,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Martin Reyes Jul 2014 ",2122.13,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Jonatan Aug 2014 ",2199.83,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Jonatan Jul 2014 ",2199.83,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Marcos Perez Jul 2014 ",2199.83,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Diego Aug 2014 ",2238.69,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Leandro Aug 2014 ",2355.25,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Federico Becaria Aug 2014 ",2355.25,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Brian SW Support Aug 2014 ",4702.32,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,Marcos Dutto Support Aug 2014 ",5187.24,"","02.09.2014",""],["02.09.2014","Payment order electronic banking ,ignovus Lean Project Jul 2014 ",9804.14,"","02.09.2014",""],["01.09.2014","Payment order electronic banking ,Fernando Expenses ",2000,"","01.09.2014",54733.77],["01.09.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",18980.5,"01.09.2014",""],["01.09.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG M�NCHEN 80339 ","",37181.82,"01.09.2014",""],["26.08.2014","Payment order electronic banking ,HostEurope Inovice 17211538 ",42.06,"","26.08.2014",571.45],["26.08.2014","Cash withdrawal banknotes FC ,CS Z�rich-Paradeplatz (0835 ",717.5,"","26.08.2014",""],["06.08.2014","Payment order electronic banking ,Camila Riveron Jul 2014 ",1237.96,"","06.08.2014",1331.01],["06.08.2014","Payment order electronic banking ,Yasim Zeballos SW Dev Jul 2014 ",1670.63,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Fernando Suzacq Jul 2014 ",1708.77,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Federico Becaria Jul 2014 ",1791.97,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Lucia Marroig SW Dev Jul 2014 ",2006.92,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Diego Jul 2014 ",2104,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Ana SW Dev Jul 2014 ",2312.01,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Leandro Jul 2014 ",2312.01,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Marcos Dutto Support Jul 2014 ",4803.65,"","06.08.2014",""],["06.08.2014","Payment order electronic banking ,Brian SW Support Jul 2014 ",5493.5,"","06.08.2014",""],["31.07.2014","Payment order electronic banking ,HostEurope Inovice 17106478 ",41.73,"","31.07.2014",26772.43],["25.07.2014","Payment order electronic banking ,Ignovus Jul 2014 ",3804.12,"","25.07.2014",26814.16],["22.07.2014","Payment order electronic banking ,Miete Nadistr Aug 2014 ",1600,"","22.07.2014",30618.28],["22.07.2014","Payment order electronic banking ,Martin Reyes Jun 2014 ",1908.27,"","22.07.2014",""],["22.07.2014","Payment order electronic banking ,Poppendiecks ZRH Event (2/2) ",1983.64,"","22.07.2014",""],["22.07.2014","Payment order electronic banking ,Marcos Perez Jun 2014 ",2134.4,"","22.07.2014",""],["22.07.2014","Payment order electronic banking ,Jonatan Jun 2014 ",2134.4,"","22.07.2014",""],["22.07.2014","Payment order electronic banking ,Ana SW Dev Jun 2014 ",2285.15,"","22.07.2014",""],["22.07.2014","Payment order electronic banking ,ignovus Lean Project Jun 2014 ",9804.12,"","22.07.2014",""],["18.07.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG MUNCHEN 80339 ","",19479,"18.07.2014",52468.26],["18.07.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG MUNCHEN 80339 ","",32923.1,"18.07.2014",""],["08.07.2014","Payment order electronic banking ,Ignovus Jun 2014 ",3804.12,"","08.07.2014",66.16],["07.07.2014","Payment order electronic banking ,Camila Riveron Jun 2014 ",774.35,"","07.07.2014",3870.28],["07.07.2014","Payment order electronic banking ,Fernando Suzacq Support Jun 2014 ",1236.46,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Lucia Marroig SW Dev Jun 2014 ",1243.42,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Yasim Zeballos SW Dev Jun 2014 ",1900.12,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Federico Becaria Jun 2014 ",2020.2,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Diego Jun 2014 ",2060.94,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Leandro Jun 2014 ",2125.27,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Brian SW Support Jun 2014 ",4676.8,"","07.07.2014",""],["07.07.2014","Payment order electronic banking ,Marcos Dutto Support Jun 2014 ",4677.07,"","07.07.2014",""],["30.06.2014","Balance settlement of expenses ,As shown separately ",18.94,"","30.06.2014",24584.91],["30.06.2014","Payment order electronic banking ,Miete Nadistr Jul 2014 ",1600,"","30.06.2014",""],["30.06.2014","Balance of closing entries ,as shown separately ","",1.96,"30.06.2014",""],["27.06.2014","Cash withdrawal ,CS Aarau (0003) ",839.13,"","27.06.2014",26201.89],["26.06.2014","Payment order electronic banking ,HostEurope Inovice 17007318 ",41.74,"","26.06.2014",27041.02],["26.06.2014","Payment order electronic banking ,AHV ",734.93,"","26.06.2014",""],["26.06.2014","Payment order electronic banking ,Poppendiecks ZRH Event (1/2) ",1968.28,"","26.06.2014",""],["26.06.2014","Payment order electronic banking ,Novotel May Event Final Invoice ",4025.41,"","26.06.2014",""],["23.06.2014","Payment order electronic banking ,Diego May 2014 (2/2) ",1311.76,"","23.06.2014",33811.38],["23.06.2014","Payment order electronic banking ,Ana SW Dev May 2014 ",1798.19,"","23.06.2014",""],["23.06.2014","Payment order electronic banking ,Martin Reyes May 2014 ",1990.41,"","23.06.2014",""],["23.06.2014","Payment order electronic banking ,Jonatan May 2014 ",2121.51,"","23.06.2014",""],["23.06.2014","Payment order electronic banking ,Federico Becaria May 2014 ",2121.51,"","23.06.2014",""],["23.06.2014","Payment order electronic banking ,Marcos Perez May 2014 ",2121.51,"","23.06.2014",""],["23.06.2014","Payment order electronic banking ,ignovus Lean Project May 2014 ",9804.1,"","23.06.2014",""],["19.06.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG MUENCHEN 80339 ","",16099.5,"19.06.2014",55080.37],["19.06.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG MUENCHEN 80339 ","",36833.33,"19.06.2014",""],["10.06.2014","Payment order electronic banking ,Handelsregisteramt Zug ",33.46,"","10.06.2014",2147.54],["10.06.2014","Payment order electronic banking ,G+H Buchhaltung 2013 Extra Admin ",1354.98,"","10.06.2014",""],["04.06.2014","Payment order electronic banking ,Diego May 2014 (1/2) ",1147.09,"","04.06.2014",3535.98],["04.06.2014","Payment order electronic banking ,Marcos Dutto May 2014 ",1170.7,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Marcos Dutto Support May 2014 ",1547.11,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Camila Riveron 2014 (2 / 2) ",1671.33,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Yasim Zeballos SW Dev May 2014 ",1717.68,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Leandro May 2014 ",2120.67,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Fernando Suzacq Support May 2014 ",3731.41,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Brian SW Support May 2014 ",3986.02,"","04.06.2014",""],["04.06.2014","Payment order electronic banking ,Ignovus May 2014 ",6004.1,"","04.06.2014",""],["03.06.2014","Payment order electronic banking ,Lucia Marroig SW Dev May 2014 ",1629.56,"","03.06.2014",26632.09],["28.05.2014","Payment order electronic banking ,HostEurope Payments ",200,"","28.05.2014",28261.65],["27.05.2014","Payment order electronic banking ,ignovus Lean Project Apr 2014 ",5800,"","27.05.2014",28461.65],["20.05.2014","Payment order electronic banking ,Fernando Expenses ",2000,"","20.05.2014",34261.65],["19.05.2014","Payment order electronic banking ,Diego Apr 2014 (2/2) ",1083.82,"","19.05.2014",36261.65],["19.05.2014","Payment order electronic banking ,Ana SW Dev Apr 2014 (2/2) ",1266.53,"","19.05.2014",""],["19.05.2014","Payment order electronic banking ,Miete Nadistr Jun 2014 ",1600,"","19.05.2014",""],["19.05.2014","Payment order electronic banking ,Martin Reyes Apr 2014 ",1883.55,"","19.05.2014",""],["19.05.2014","Payment order electronic banking ,Jonatan Apr 2014 ",2106.72,"","19.05.2014",""],["19.05.2014","Payment order electronic banking ,Marcos Perez Apr 2014 ",2106.72,"","19.05.2014",""],["19.05.2014","Payment order electronic banking ,Ignovus Apr 2014 ",6204.1,"","19.05.2014",""],["16.05.2014","Payment order electronic banking ,Federico Becaria Apr 2014 ",1971.26,"","16.05.2014",52513.09],["15.05.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG MUENCHEN 80339 ","",17354,"15.05.2014",54484.35],["15.05.2014","SEPA-standard incoming payment ,TETRALOG SYSTEMS AG MUENCHEN 80339 ","",37025,"15.05.2014",""]]');