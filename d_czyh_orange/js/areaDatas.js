// 省份列表
var iosProvinces = [
  /*******华北五省********/
  { id: "110000", value: "北京市", parentId: "0" },
  { id: "120000", value: "天津市", parentId: "0" },
  { id: "130000", value: "河北省", parentId: "0" },
  { id: "140000", value: "山西省", parentId: "0" },
  { id: "150000", value: "内蒙古自治区", parentId: "0" },
  /*******东北三省********/
  { id: "210000", value: "辽宁省", parentId: "0" },
  { id: "220000", value: "吉林省", parentId: "0" },
  { id: "230000", value: "黑龙江省", parentId: "0" },
  /*******华东省********/
  { id: "310000", value: "上海市", parentId: "0" },
  { id: "320000", value: "江苏省", parentId: "0" },
  { id: "330000", value: "浙江省", parentId: "0" },
  { id: "340000", value: "安徽省", parentId: "0" },
  { id: "350000", value: "福建省", parentId: "0" },
  { id: "360000", value: "江西省", parentId: "0" },
  { id: "370000", value: "山东省", parentId: "0" },
  /****华中、华南六省******/
  { id: "410000", value: "河南省", parentId: "0" },
  { id: "420000", value: "湖北省", parentId: "0" },
  { id: "430000", value: "湖南省", parentId: "0" },
  { id: "440000", value: "广东省", parentId: "0" },
  { id: "450000", value: "广西壮族自治区", parentId: "0" },
  { id: "460000", value: "海南省", parentId: "0" },
  /****西南五省******/
  { id: "500000", value: "重庆市", parentId: "0" },
  { id: "510000", value: "四川省", parentId: "0" },
  { id: "520000", value: "贵州省", parentId: "0" },
  { id: "530000", value: "云南省", parentId: "0" },
  { id: "540000", value: "西藏自治区", parentId: "0" },
  /****西北五省******/
  { id: "610000", value: "陕西省", parentId: "0" },
  { id: "620000", value: "甘肃省", parentId: "0" },
  { id: "630000", value: "青海省", parentId: "0" },
  { id: "640000", value: "宁夏回族自治区", parentId: "0" },
  { id: "650000", value: "新疆维吾尔族自治区", parentId: "0" }
];

// 城市列表
var iosCitys = [
  /**********北京市********/
  { id: "110100", value: "北京市", parentId: "110000" },
  /**********天津市********/
  { id: "120100", value: "天津市", parentId: "120000" },
  /**********河北省********/
  { id: "130100", value: "石家庄市", parentId: "130000" },
  { id: "130200", value: "唐山市", parentId: "130000" },
  { id: "130300", value: "秦皇岛市", parentId: "130000" },
  { id: "130400", value: "邯郸市", parentId: "130000" },
  { id: "130500", value: "邢台市", parentId: "130000" },
  { id: "130600", value: "保定市", parentId: "130000" },
  { id: "130700", value: "张家口市", parentId: "130000" },
  { id: "130800", value: "承德市", parentId: "130000" },
  { id: "130900", value: "沧州市", parentId: "130000" },
  { id: "131000", value: "廊坊市", parentId: "130000" },
  { id: "131100", value: "衡水市", parentId: "130000" },
  /**********山西省********/
  { id: "140100", value: "太原市", parentId: "140000" },
  { id: "140200", value: "大同市", parentId: "140000" },
  { id: "140300", value: "阳泉市", parentId: "140000" },
  { id: "140400", value: "长治市", parentId: "140000" },
  { id: "140500", value: "晋城市", parentId: "140000" },
  { id: "140600", value: "朔州市", parentId: "140000" },
  { id: "140700", value: "晋中市", parentId: "140000" },
  { id: "140800", value: "运城市", parentId: "140000" },
  { id: "140900", value: "忻州市", parentId: "140000" },
  { id: "141000", value: "临汾市", parentId: "140000" },
  { id: "141100", value: "吕梁市", parentId: "140000" },
  /**********内蒙古自治区********/
  { id: "150100", value: "呼和浩特市", parentId: "150000" },
  { id: "150200", value: "包头市", parentId: "150000" },
  { id: "150300", value: "乌海市", parentId: "150000" },
  { id: "150400", value: "赤峰市", parentId: "150000" },
  { id: "150500", value: "通辽市", parentId: "150000" },
  { id: "150600", value: "鄂尔多斯市", parentId: "150000" },
  { id: "150700", value: "呼伦贝尔市", parentId: "150000" },
  { id: "150800", value: "巴彦淖尔市", parentId: "150000" },
  { id: "150900", value: "乌兰察布市", parentId: "150000" },
  { id: "152200", value: "兴安盟", parentId: "150000" },
  { id: "152500", value: "锡林郭勒盟", parentId: "150000" },
  { id: "152900", value: "阿拉善盟", parentId: "150000" },
  /**********辽宁省********/
  { id: "210100", value: "沈阳市", parentId: "210000" },
  { id: "210200", value: "大连市", parentId: "210000" },
  { id: "210300", value: "鞍山市", parentId: "210000" },
  { id: "210400", value: "抚顺市", parentId: "210000" },
  { id: "210500", value: "本溪市", parentId: "210000" },
  { id: "210600", value: "丹东市", parentId: "210000" },
  { id: "210700", value: "锦州市", parentId: "210000" },
  { id: "210800", value: "营口市", parentId: "210000" },
  { id: "210900", value: "阜新市", parentId: "210000" },
  { id: "211000", value: "辽阳市", parentId: "210000" },
  { id: "211100", value: "盘锦市", parentId: "210000" },
  { id: "211200", value: "铁岭市", parentId: "210000" },
  { id: "211300", value: "朝阳市", parentId: "210000" },
  { id: "211400", value: "葫芦岛市", parentId: "210000" },
  /**********吉林省********/
  { id: "220100", value: "长春市", parentId: "220000" },
  { id: "220200", value: "吉林市", parentId: "220000" },
  { id: "220300", value: "四平市", parentId: "220000" },
  { id: "220400", value: "辽源市", parentId: "220000" },
  { id: "220500", value: "通化市", parentId: "220000" },
  { id: "220600", value: "白山市", parentId: "220000" },
  { id: "220700", value: "松原市", parentId: "220000" },
  { id: "220800", value: "白城市", parentId: "220000" },
  { id: "222400", value: "延边朝鲜族自治州", parentId: "220000" },
  /**********黑龙江省********/
  { id: "230100", value: "哈尔滨市", parentId: "230000" },
  { id: "230200", value: "齐齐哈尔市", parentId: "230000" },
  { id: "230300", value: "鸡西市", parentId: "230000" },
  { id: "230400", value: "鹤岗市", parentId: "230000" },
  { id: "230500", value: "双鸭山市", parentId: "230000" },
  { id: "230600", value: "大庆市", parentId: "230000" },
  { id: "230700", value: "伊春市", parentId: "230000" },
  { id: "230800", value: "佳木斯市", parentId: "230000" },
  { id: "230900", value: "七台河市", parentId: "230000" },
  { id: "231000", value: "牡丹江市", parentId: "230000" },
  { id: "231100", value: "黑河市", parentId: "230000" },
  { id: "231200", value: "绥化市", parentId: "230000" },
  { id: "232700", value: "大兴安岭地区", parentId: "230000" },
  /**********上海市********/
  { id: "310100", value: "上海市", parentId: "310000" },
  /**********江苏省********/
  { id: "320100", value: "南京市", parentId: "320000" },
  { id: "320200", value: "无锡市", parentId: "320000" },
  { id: "320300", value: "徐州市", parentId: "320000" },
  { id: "320400", value: "常州市", parentId: "320000" },
  { id: "320500", value: "苏州市", parentId: "320000" },
  { id: "320600", value: "南通市", parentId: "320000" },
  { id: "320700", value: "连云港市", parentId: "320000" },
  { id: "320800", value: "淮安市", parentId: "320000" },
  { id: "320900", value: "盐城市", parentId: "320000" },
  { id: "321000", value: "扬州市", parentId: "320000" },
  { id: "321100", value: "镇江市", parentId: "320000" },
  { id: "321200", value: "泰州市", parentId: "320000" },
  { id: "321300", value: "宿迁市", parentId: "320000" },
  /**********浙江省********/
  { id: "330100", value: "杭州市", parentId: "330000" },
  { id: "330200", value: "宁波市", parentId: "330000" },
  { id: "330300", value: "温州市", parentId: "330000" },
  { id: "330400", value: "嘉兴市", parentId: "330000" },
  { id: "330500", value: "湖州市", parentId: "330000" },
  { id: "330600", value: "绍兴市", parentId: "330000" },
  { id: "330700", value: "金华市", parentId: "330000" },
  { id: "330800", value: "衢州市", parentId: "330000" },
  { id: "330900", value: "舟山市", parentId: "330000" },
  { id: "331000", value: "台州市", parentId: "330000" },
  { id: "331100", value: "丽水市", parentId: "330000" },
  /**********安徽省********/
  { id: "340100", value: "合肥市", parentId: "340000" },
  { id: "340200", value: "芜湖市", parentId: "340000" },
  { id: "340300", value: "蚌埠市", parentId: "340000" },
  { id: "340400", value: "淮南市", parentId: "340000" },
  { id: "340500", value: "马鞍山市", parentId: "340000" },
  { id: "340600", value: "淮北市", parentId: "340000" },
  { id: "340700", value: "铜陵市", parentId: "340000" },
  { id: "340800", value: "安庆市", parentId: "340000" },
  { id: "341000", value: "黄山市", parentId: "340000" },
  { id: "341100", value: "滁州市", parentId: "340000" },
  { id: "341200", value: "阜阳市", parentId: "340000" },
  { id: "341300", value: "宿州市", parentId: "340000" },
  { id: "341500", value: "六安市", parentId: "340000" },
  { id: "341600", value: "亳州市", parentId: "340000" },
  { id: "341700", value: "池州市", parentId: "340000" },
  { id: "341800", value: "宣城市", parentId: "340000" },
  /**********福建省********/
  { id: "350100", value: "福州市", parentId: "350000" },
  { id: "350200", value: "厦门市", parentId: "350000" },
  { id: "350300", value: "莆田市", parentId: "350000" },
  { id: "350400", value: "三明市", parentId: "350000" },
  { id: "350500", value: "泉州市", parentId: "350000" },
  { id: "350600", value: "漳州市", parentId: "350000" },
  { id: "350700", value: "南平市", parentId: "350000" },
  { id: "350800", value: "龙岩市", parentId: "350000" },
  { id: "350900", value: "宁德市", parentId: "350000" },
  /**********江西省********/
  { id: "360100", value: "南昌市", parentId: "360000" },
  { id: "360200", value: "景德镇市", parentId: "360000" },
  { id: "360300", value: "萍乡市", parentId: "360000" },
  { id: "360400", value: "九江市", parentId: "360000" },
  { id: "360500", value: "新余市", parentId: "360000" },
  { id: "360600", value: "鹰潭市", parentId: "360000" },
  { id: "360700", value: "赣州市", parentId: "360000" },
  { id: "360800", value: "吉安市", parentId: "360000" },
  { id: "360900", value: "宜春市", parentId: "360000" },
  { id: "361000", value: "抚州市", parentId: "360000" },
  { id: "361100", value: "上饶市", parentId: "360000" },
  /**********山东省********/
  { id: "370100", value: "济南市", parentId: "370000" },
  { id: "370200", value: "青岛市", parentId: "370000" },
  { id: "370300", value: "淄博市", parentId: "370000" },
  { id: "370400", value: "枣庄市", parentId: "370000" },
  { id: "370500", value: "东营市", parentId: "370000" },
  { id: "370600", value: "烟台市", parentId: "370000" },
  { id: "370700", value: "潍坊市", parentId: "370000" },
  { id: "370800", value: "济宁市", parentId: "370000" },
  { id: "370900", value: "泰安市", parentId: "370000" },
  { id: "371000", value: "威海市", parentId: "370000" },
  { id: "371100", value: "日照市", parentId: "370000" },
  { id: "371200", value: "莱芜市", parentId: "370000" },
  { id: "371300", value: "临沂市", parentId: "370000" },
  { id: "371400", value: "德州市", parentId: "370000" },
  { id: "371500", value: "聊城市", parentId: "370000" },
  { id: "371600", value: "滨州市", parentId: "370000" },
  { id: "371700", value: "菏泽市", parentId: "370000" },
  /**********河南省********/
  { id: "410100", value: "郑州市", parentId: "410000" },
  { id: "410200", value: "开封市", parentId: "410000" },
  { id: "410300", value: "洛阳市", parentId: "410000" },
  { id: "410400", value: "平顶山市", parentId: "410000" },
  { id: "410500", value: "安阳市", parentId: "410000" },
  { id: "410600", value: "鹤壁市", parentId: "410000" },
  { id: "410700", value: "新乡市", parentId: "410000" },
  { id: "410800", value: "焦作市", parentId: "410000" },
  { id: "410900", value: "濮阳市", parentId: "410000" },
  { id: "411000", value: "许昌市", parentId: "410000" },
  { id: "411100", value: "漯河市", parentId: "410000" },
  { id: "411200", value: "三门峡市", parentId: "410000" },
  { id: "411300", value: "南阳市", parentId: "410000" },
  { id: "411400", value: "商丘市", parentId: "410000" },
  { id: "411500", value: "信阳市", parentId: "410000" },
  { id: "411600", value: "周口市", parentId: "410000" },
  { id: "411700", value: "驻马店市", parentId: "410000" },
  /**省直辖市**/
  { id: "419001", value: "济源市", parentId: "410000" },
  /**********湖北省********/
  { id: "420100", value: "武汉市", parentId: "420000" },
  { id: "420200", value: "黄石市", parentId: "420000" },
  { id: "420300", value: "十堰市", parentId: "420000" },
  { id: "420500", value: "宜昌市", parentId: "420000" },
  { id: "420600", value: "襄阳市", parentId: "420000" },
  { id: "420700", value: "鄂州市", parentId: "420000" },
  { id: "420800", value: "荆门市", parentId: "420000" },
  { id: "420900", value: "孝感市", parentId: "420000" },
  { id: "421000", value: "荆州市", parentId: "420000" },
  { id: "421100", value: "黄冈市", parentId: "420000" },
  { id: "421200", value: "咸宁市", parentId: "420000" },
  { id: "421300", value: "随州市", parentId: "420000" },
  { id: "422800", value: "恩施土家族苗族自治州", parentId: "420000" },

  /**省直辖市**/
  { id: "429004", value: "仙桃市", parentId: "420000" },
  { id: "429005", value: "潜江市", parentId: "420000" },
  { id: "429006", value: "天门市", parentId: "420000" },
  { id: "429021", value: "神农架林区", parentId: "420000" },
  /**********湖南省********/
  { id: "430100", value: "长沙市", parentId: "430000" },
  { id: "430200", value: "株洲市", parentId: "430000" },
  { id: "430300", value: "湘潭市", parentId: "430000" },
  { id: "430400", value: "衡阳市", parentId: "430000" },
  { id: "430500", value: "邵阳市", parentId: "430000" },
  { id: "430600", value: "岳阳市", parentId: "430000" },
  { id: "430700", value: "常德市", parentId: "430000" },
  { id: "430800", value: "张家界市", parentId: "430000" },
  { id: "430900", value: "益阳市", parentId: "430000" },
  { id: "431000", value: "郴州市", parentId: "430000" },
  { id: "431100", value: "永州市", parentId: "430000" },
  { id: "431200", value: "怀化市", parentId: "430000" },
  { id: "431300", value: "娄底市", parentId: "430000" },
  { id: "433100", value: "湘西土家族苗族自治州", parentId: "430000" },
  /**********广东省********/
  { id: "440100", value: "广州市", parentId: "440000" },
  { id: "440200", value: "韶关市", parentId: "440000" },
  { id: "440300", value: "深圳市", parentId: "440000" },
  { id: "440400", value: "珠海市", parentId: "440000" },
  { id: "440500", value: "汕头市", parentId: "440000" },
  { id: "440600", value: "佛山市", parentId: "440000" },
  { id: "440700", value: "江门市", parentId: "440000" },
  { id: "440800", value: "湛江市", parentId: "440000" },
  { id: "440900", value: "茂名市", parentId: "440000" },
  { id: "441200", value: "肇庆市", parentId: "440000" },
  { id: "441300", value: "惠州市", parentId: "440000" },
  { id: "441400", value: "梅州市", parentId: "440000" },
  { id: "441500", value: "汕尾市", parentId: "440000" },
  { id: "441600", value: "河源市", parentId: "440000" },
  { id: "441700", value: "阳江市", parentId: "440000" },
  { id: "441800", value: "清远市", parentId: "440000" },
  { id: "441900", value: "东莞市", parentId: "440000" },
  { id: "442000", value: "中山市", parentId: "440000" },
  { id: "445100", value: "潮州市", parentId: "440000" },
  { id: "445200", value: "揭阳市", parentId: "440000" },
  { id: "445300", value: "云浮市", parentId: "440000" },
  /**********广西壮族自治区********/
  { id: "450100", value: "南宁市", parentId: "450000" },
  { id: "450200", value: "柳州市", parentId: "450000" },
  { id: "450300", value: "桂林市", parentId: "450000" },
  { id: "450400", value: "梧州市", parentId: "450000" },
  { id: "450500", value: "北海市", parentId: "450000" },
  { id: "450600", value: "防城港市", parentId: "450000" },
  { id: "450700", value: "钦州市", parentId: "450000" },
  { id: "450800", value: "贵港市", parentId: "450000" },
  { id: "450900", value: "玉林市", parentId: "450000" },
  { id: "451000", value: "百色市", parentId: "450000" },
  { id: "451100", value: "贺州市", parentId: "450000" },
  { id: "451200", value: "河池市", parentId: "450000" },
  { id: "451300", value: "来宾市", parentId: "450000" },
  { id: "451400", value: "崇左市", parentId: "450000" },
  /**********海南省********/
  { id: "460100", value: "海口市", parentId: "460000" },
  { id: "460200", value: "三亚市", parentId: "460000" },
  { id: "460300", value: "三沙市", parentId: "460000" },
  /**海南省直辖**/
  { id: "469001", value: "五指山市", parentId: "460000" },
  { id: "469002", value: "琼海市", parentId: "460000" },
  { id: "469003", value: "儋州市", parentId: "460000" },
  { id: "469005", value: "文昌市", parentId: "460000" },
  { id: "469006", value: "万宁市", parentId: "460000" },
  { id: "469007", value: "东方市", parentId: "460000" },
  { id: "469021", value: "定安县", parentId: "460000" },
  { id: "469022", value: "屯昌县", parentId: "460000" },
  { id: "469023", value: "澄迈县", parentId: "460000" },
  { id: "469024", value: "临高县", parentId: "460000" },
  { id: "469025", value: "白沙黎族自治县", parentId: "460000" },
  { id: "469026", value: "昌江黎族自治县", parentId: "460000" },
  { id: "469027", value: "乐东黎族自治县", parentId: "460000" },
  { id: "469028", value: "陵水黎族自治县", parentId: "460000" },
  { id: "469029", value: "保亭黎族苗族自治县", parentId: "460000" },
  { id: "469030", value: "琼中黎族苗族自治县", parentId: "460000" },
  /**********重庆市********/
  { id: "500100", value: "重庆市", parentId: "500000" },
  /**********四川省********/
  { id: "510100", value: "成都市", parentId: "510000" },
  { id: "510300", value: "自贡市", parentId: "510000" },
  { id: "510400", value: "攀枝花市", parentId: "510000" },
  { id: "510500", value: "泸州市", parentId: "510000" },
  { id: "510600", value: "德阳市", parentId: "510000" },
  { id: "510700", value: "绵阳市", parentId: "510000" },
  { id: "510800", value: "广元市", parentId: "510000" },
  { id: "510900", value: "遂宁市", parentId: "510000" },
  { id: "511000", value: "内江市", parentId: "510000" },
  { id: "511100", value: "乐山市", parentId: "510000" },
  { id: "511300", value: "南充市", parentId: "510000" },
  { id: "511400", value: "眉山市", parentId: "510000" },
  { id: "511500", value: "宜宾市", parentId: "510000" },
  { id: "511600", value: "广安市", parentId: "510000" },
  { id: "511700", value: "达州市", parentId: "510000" },
  { id: "511800", value: "雅安市", parentId: "510000" },
  { id: "511900", value: "巴中市", parentId: "510000" },
  { id: "512000", value: "资阳市", parentId: "510000" },
  { id: "513200", value: "阿坝藏族羌族自治州", parentId: "510000" },
  { id: "513300", value: "甘孜藏族自治州", parentId: "510000" },
  { id: "513400", value: "凉山彝族自治州", parentId: "510000" },
  /**********贵州省********/
  { id: "520100", value: "贵阳市", parentId: "520000" },
  { id: "520200", value: "六盘水市", parentId: "520000" },
  { id: "520300", value: "遵义市", parentId: "520000" },
  { id: "520400", value: "安顺市", parentId: "520000" },
  { id: "522200", value: "铜仁市", parentId: "520000" },
  { id: "522300", value: "黔西南布依族苗族自治州", parentId: "520000" },
  { id: "522400", value: "毕节市", parentId: "520000" },
  { id: "522600", value: "黔东南苗族侗族自治州", parentId: "520000" },
  { id: "522700", value: "黔南布依族苗族自治州", parentId: "520000" },
  /**********云南省********/
  { id: "530100", value: "昆明市", parentId: "530000" },
  { id: "530300", value: "曲靖市", parentId: "530000" },
  { id: "530400", value: "玉溪市", parentId: "530000" },
  { id: "530500", value: "保山市", parentId: "530000" },
  { id: "530600", value: "昭通市", parentId: "530000" },
  { id: "530700", value: "丽江市", parentId: "530000" },
  { id: "530800", value: "普洱市", parentId: "530000" },
  { id: "530900", value: "临沧市", parentId: "530000" },
  { id: "532300", value: "楚雄彝族自治州", parentId: "530000" },
  { id: "532500", value: "红河哈尼族彝族自治州", parentId: "530000" },
  { id: "532600", value: "文山壮族苗族自治州", parentId: "530000" },
  { id: "532800", value: "西双版纳傣族自治州", parentId: "530000" },
  { id: "532900", value: "大理白族自治州", parentId: "530000" },
  { id: "533100", value: "德宏傣族景颇族自治州", parentId: "530000" },
  { id: "533300", value: "怒江傈僳族自治州", parentId: "530000" },
  { id: "533400", value: "迪庆藏族自治州", parentId: "530000" },
  /**********西藏自治区********/
  { id: "540100", value: "拉萨市", parentId: "540000" },
  { id: "542100", value: "昌都地区", parentId: "540000" },
  { id: "542200", value: "山南地区", parentId: "540000" },
  { id: "542300", value: "日喀则地区", parentId: "540000" },
  { id: "542400", value: "那曲地区", parentId: "540000" },
  { id: "542500", value: "阿里地区", parentId: "540000" },
  { id: "542600", value: "林芝地区", parentId: "540000" },
  /**********陕西省********/
  { id: "610100", value: "西安市", parentId: "610000" },
  { id: "610200", value: "铜川市", parentId: "610000" },
  { id: "610300", value: "宝鸡市", parentId: "610000" },
  { id: "610400", value: "咸阳市", parentId: "610000" },
  { id: "610500", value: "渭南市", parentId: "610000" },
  { id: "610600", value: "延安市", parentId: "610000" },
  { id: "610700", value: "汉中市", parentId: "610000" },
  { id: "610800", value: "榆林市", parentId: "610000" },
  { id: "610900", value: "安康市", parentId: "610000" },
  { id: "611000", value: "商洛市", parentId: "610000" },
  /**********甘肃省********/
  { id: "620100", value: "兰州市", parentId: "620000" },
  { id: "620200", value: "嘉峪关市", parentId: "620000" },
  { id: "620300", value: "金昌市", parentId: "620000" },
  { id: "620400", value: "白银市", parentId: "620000" },
  { id: "620500", value: "天水市", parentId: "620000" },
  { id: "620600", value: "武威市", parentId: "620000" },
  { id: "620700", value: "张掖市", parentId: "620000" },
  { id: "620800", value: "平凉市", parentId: "620000" },
  { id: "620900", value: "酒泉市", parentId: "620000" },
  { id: "621000", value: "庆阳市", parentId: "620000" },
  { id: "621100", value: "定西市", parentId: "620000" },
  { id: "621200", value: "陇南市", parentId: "620000" },
  { id: "622900", value: "临夏回族自治州", parentId: "620000" },
  { id: "623000", value: "甘南藏族自治州", parentId: "620000" },
  /**********青海省********/
  { id: "630100", value: "西宁市", parentId: "630000" },
  { id: "632100", value: "海东地区", parentId: "630000" },
  { id: "632200", value: "海北藏族自治州", parentId: "630000" },
  { id: "632300", value: "黄南藏族自治州", parentId: "630000" },
  { id: "632500", value: "海南藏族自治州", parentId: "630000" },
  { id: "632600", value: "果洛藏族自治州", parentId: "630000" },
  { id: "632700", value: "玉树藏族自治州", parentId: "630000" },
  { id: "632800", value: "海西蒙古族藏族自治州", parentId: "630000" },
  /**********宁夏回族自治区********/
  { id: "640100", value: "银川市", parentId: "640000" },
  { id: "640200", value: "石嘴山市", parentId: "640000" },
  { id: "640300", value: "吴忠市", parentId: "640000" },
  { id: "640400", value: "固原市", parentId: "640000" },
  { id: "640500", value: "中卫市", parentId: "640000" },
  /**********新疆维吾尔族自治区********/
  { id: "650100", value: "乌鲁木齐市", parentId: "650000" },
  { id: "650200", value: "克拉玛依市", parentId: "650000" },
  { id: "652100", value: "吐鲁番地区", parentId: "650000" },
  { id: "652200", value: "哈密地区", parentId: "650000" },
  { id: "652300", value: "昌吉回族自治州", parentId: "650000" },
  { id: "652700", value: "博尔塔拉蒙古自治州", parentId: "650000" },
  { id: "652800", value: "巴音郭楞蒙古自治州", parentId: "650000" },
  { id: "652900", value: "阿克苏地区", parentId: "650000" },
  { id: "653000", value: "克孜勒苏柯尔克孜自治州", parentId: "650000" },
  { id: "653100", value: "喀什地区", parentId: "650000" },
  { id: "653200", value: "和田地区", parentId: "650000" },
  { id: "654000", value: "伊犁哈萨克自治州", parentId: "650000" },
  { id: "654200", value: "塔城地区", parentId: "650000" },
  { id: "654300", value: "阿勒泰地区", parentId: "650000" },
  /**********自治区直辖********/
  { id: "659001", value: "石河子市", parentId: "650000" },
  { id: "659002", value: "阿拉尔市", parentId: "650000" },
  { id: "659003", value: "图木舒克市", parentId: "650000" },
  { id: "659004", value: "五家渠市", parentId: "650000" }
];
