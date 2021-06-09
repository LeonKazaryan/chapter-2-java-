const CITIES = [
  "Yerevan",
  "Nur-Sultan",
  "Gyumri",
  "Almaty",
  "Shymkent",
  "Moskow",
  "Warsaw",
  "Aphens",
  "Constantinople",
  "Ribeiro",
  "Troitsk",
  "Boston",
  "Baniachang",
  "La Azulita",
  "ДЊernГЎ Hora",
  "Oneop",
  "Daqiao",
  "TГЎriba",
  "San Diego",
  "Suita",
  "Casselman",
  "Niort",
  "Viloco",
  "Zhongfeng",
  "JesГєs MarГ­a",
  "Flandes",
  "Khodzhi-Gasan",
  "Kudowa-ZdrГіj",
  "TchollirГ©",
  "Manjakandriana",
  "Longjin",
  "Xuanhua",
  "ElГ­as",
  "Cintra",
  "Pelaya",
  "Reda",
  "Astanajapura",
  "Juan N Alvarez",
  "Buenos Aires",
  "Huiqi",
  "Santiago de Cuba",
  "HoЕ‚oby",
  "Tairua",
  "Sidomulyo",
  "Kabakovo",
  "Murowana GoЕ›lina",
  "Barranquilla",
  "Rehoboth",
  "Kasama",
  "Adassil",
  "Guankou",
  "Hongwei",
  "Pederneiras",
  "Carmen",
  "Semey",
  "Karangparwa",
  "Pruchnik",
  "Nyimba",
  "Taoyang",
  "Shikeng",
  "Ongandjera",
  "Potikosin",
  "Krasnapollye",
  "Emiliano Zapata",
  "Taisen-ri",
  "Hyesan-si",
  "Macroom",
  "Alcaria da Serra",
  "Van Nuys",
  "Tala",
  "San-PГ©dro",
  "Jenesano",
  "Chengdong",
  "SeverobaykalвЂ™sk",
  "Dhahab",
  "Rawa Mazowiecka",
  "Tambakromo",
  "Butterworth",
  "Duluth",
  "Krasnyy Gulyay",
  "Embu",
  "Jesenice",
  "Sukamulya",
  "Zainsk",
  "Arroio Grande",
  "Chachoengsao",
  "RehnДЃn",
  "SГЈo Martinho do Campo",
  "Puerto Galera",
  "Pouso Alegre",
  "EsГ©ka",
  "Khashuri",
  "Taposan",
  "Anaheim",
  "Alegria",
  "Gudong",
  "KrasnoarmiysвЂ™k",
  "Malabag",
  "Tsengel",
  "Sann",
  "ArgalastГ­",
  "Zaysan",
  "GЕЌdo",
  "Midland",
  "Liberta",
  "Kota Kinabalu",
  "Kuantan",
  "Tamra",
  "SГЈo Miguel do IguaГ§u",
  "VineЕѕ",
  "Buliu",
  "Zall-DardhГ«",
  "Azurva",
  "Yukhnov",
  "GostyЕ„",
  "Xuling",
  "NГ©a KГ­os",
  "Komi",
  "PilnГ­kov",
  "Lengshuijing",
  "Kumbo",
  "Bayombong",
  "Chusovoy",
  "Г‰vry",
  "Santa Rosa",
  "Budapest",
  "Las Heras",
  "TЕ™ebГ­ДЌ",
  "Muyuzi",
  "Masaguisi",
  "Penebel",
  "Frakulla e Madhe",
  "Riangderi",
  "Gunungputri",
  "Jinsha",
  "Mtubatuba",
  "Ormstown",
  "Kolomanu",
  "Kuanda",
  "Las Vegas",
  "Baohe",
  "Gujba",
  "MarвЂ™вЂ™ina Horka",
  "Looc",
  "Ambatondrazaka",
  "Ryazanskiy",
  "Linoan",
  "Karpogory",
  "Campina Grande do Sul",
  "Qianqiao",
  "Eirol",
  "Al HДЃshimД«yah",
  "TГ­o Pujio",
  "Luodian",
  "Lanshan",
  "Wright",
  "Hrastnik",
  "Vesoul",
  "Datong",
  "Shuangtian",
  "Kadoma",
  "Sambongmulyo",
  "Stockholm",
  "Longquan",
  "Yangshufang",
  "Al KhirДЃb",
  "Mboto",
  "ThiГЁs Nones",
  "Kagawasan",
  "Beranci",
  "Nandulehe",
  "QaxbaЕџ",
  "Washington",
  "Piippola",
  "Askim",
  "Masalovka",
  "Beilun",
  "Sananduva",
  "Volary",
  "Frei Paulo",
  "Wates",
  "Luntai",
  "Opuwo",
  "Kai",
  "Uptar",
  "San Pedro Jocopilas",
  "Bontoc",
  "Damiao",
  "Taihe",
  "Anmore",
  "Sidi Qacem",
  "Malie",
  "Vukojevci",
  "Groningen",
  "Limeiras",
  "Slobodka",
  "Ribas do Rio Pardo",
  "Ciladaeun",
  "Nanxing",
  "Cruz de Pau",
  "CamaГ§ari",
  "Fenglin",
  "Yanjiang",
  "Yanglin",
  "Baicaogou",
  "UmeГҐ",
  "AshmЕ«n",
  "Pirassununga",
  "Alae",
  "Karlovo",
  "Oklahoma City",
  "Novoalekseyevskaya",
  "Sulyukta",
  "Shanghudi",
  "Baizhu",
  "Santiago",
  "Castlemartyr",
  "Maubeuge",
  "Xiadian",
  "Al Maбё©fid",
  "Bintang",
  "PodporozhвЂ™ye",
  "Espinal",
  "Zeguo",
  "Dabao",
  "Monastyrishche",
  "Canauay",
  "Koumac",
  "Lengshuitan",
  "Gozdnica",
  "KharbathДЃ BanД« бёЁДЃrith",
  "Sungaikupang",
  "Kilmacanoge",
  "бёЁajjah",
  "Volovo",
  "Tangchijie",
  "Noebesa",
  "Puerto Cisnes",
  "Chengxi",
  "Palotina",
  "PЕ™Г­bor",
  "Dayou",
  "Utrecht (stad)",
  "Lueng Putu",
  "Xinminxiang",
  "Sade",
  "Saint-Г‰tienne",
  "SmГ­nthi",
  "Karangharjo",
  "Qingchuan",
  "Fort Lauderdale",
  "Okegawa",
  "Sacramento",
  "Dire Dawa",
  "LapinjГ¤rvi",
  "Tangxi",
  "Neuville",
  "Gressier",
  "Chavusy",
  "BoronГіw",
  "BahГ­a de CarГЎquez",
  "Santo TomГ©",
  "Limmared",
  "Sainte-Agathe-des-Monts",
  "Beolgyo",
  "DolnГ­ Libina",
  "La Paz",
  "Phra Khanong",
  "Laban",
  "PiГєma",
  "Prnjavor",
  "KushchГ«vskaya",
  "Yijiang",
  "Independencia",
  "Matatiele",
  "ArwДЃd",
  "Carot",
  "RakiДЌan",
  "WilkoЕ‚az",
  "Bayt LД«d",
  "San Isidro",
  "Putrajaya",
  "Lorraine",
  "Thorold",
  "Pasirtujuhpuluh",
  "Henglu",
  "Huskvarna",
  "Sultan Kudarat",
  "KomatsushimachЕЌ",
  "Eauripik",
  "Lepoglava",
  "Hongxing",
  "CaГ±ada de GГіmez",
  "Cullhuas",
  "GravataГ­",
  "Karlstad",
  "Buffalo",
  "Rennes",
  "Kuala Terengganu",
  "Valence",
  "Nara-shi",
  "Polen",
  "RД…czna",
  "BiaЕ‚oЕ‚eka",
  "Naushahro FД«roz",
  "Pathum Rat",
  "Hartford",
  "Olovyannaya",
  "Qiubin",
  "Las Varillas",
  "Berehomet",
  "Guijalo",
  "Ujung",
  "Hengduo",
  "Changxingbao",
  "Kiarajangkung",
  "Verkhniye Kigi",
  "Lordelo",
  "SГЈo Borja",
  "Manchester",
  "Anning",
  "Khyzy",
  "ДЊeskГЅ TД›ЕЎГ­n",
  "MaraГЈ",
  "Asembagus",
  "Huicheng",
  "Yubileyny",
  "Onueke",
  "Tsushima",
  "Jadowniki",
  "Kitui",
  "Zarechnyy",
  "MauГЎ",
  "Svetlyy",
  "Safed",
  "Pinayagan Norte",
  "AngoulГЄme",
  "Yangzi Jianglu",
  "Sekarjalak",
  "Mercier",
  "Wuyang",
  "Varkaus",
  "Canton",
  "Arpajon",
  "IlandЕѕa",
  "Hongjiazui",
  "Alburitel",
  "Shanga",
  "El Cardo",
  "Corujeira",
  "Д¦amrun",
  "VГ­tkov",
  "Xiaoruo",
  "Qiaozhen",
  "Luzhou",
  "AlmalaguГЄs",
  "DzГјГјnharaa",
  "Campbellton",
  "Kaburon",
  "Simrishamn",
  "Kiukasen",
  "Maruoka",
  "Canturay",
  "Gambang",
  "ДЊeskГЅ TД›ЕЎГ­n",
  "Cagdianao",
  "Zhangcun",
  "Argenteuil",
  "Karanganyar",
  "VГ¤sterГҐs",
  "Kurlovo",
  "Fenghuang",
  "BeЕЎka",
  "Baisangguan",
  "West Jerusalem",
  "Loja",
  "CouГ§o",
  "Luzon",
  "RossoshвЂ™",
  "Rana",
  "Lewoluo",
  "Chebba",
  "Lindavista",
  "Darmasari",
  "Taikang",
  "Bogorodskoye",
  "Cruzeiro",
  "Bojongsari",
  "Ban Mai",
  "Odessa",
  "Kalangsari",
  "GГ¶teborg",
  "Greensboro",
  "Campana",
  "Mekarsari",
  "Guilherand-Granges",
  "Maastricht",
  "Gomel",
  "Yinzhu",
  "Orimattila",
  "Madolenihm Municipality Government",
  "Ergates",
  "Labog",
  "MagoГєla",
  "Farah",
  "Kaolinovo",
  "Papakura",
  "Mб»№ Tho",
  "Tamorong",
  "San Marcelino",
  "Asheville",
  "Vershino-Shakhtaminskiy",
  "Zhangfang",
  "Lammi",
  "Rucava",
  "Washington",
  "Uppsala",
  "Chesma",
  "Zengfu",
  "Banturkrajan",
  "Rancabelut",
  "Yuktae-dong",
  "Pokhara",
  "Melfi",
  "Lwengo",
  "Vicente Guerrero",
  "Merdeka",
  "Stockholm",
  "Nandulehe",
  "Venda",
  "Kananya",
  "Uwelini",
  "Tambong",
  "NГ©ma",
  "Shidu",
  "Lopatyn",
  "Lewograran",
  "Trenton",
  "Stavanger",
  "Tanarara",
  "Xiangfu",
  "Jishigang",
  "Studenec",
  "Nowshera",
  "Vale de Madeiros",
  "KГ©falos",
  "Washington",
  "Yuanqiao",
  "Suchy DД…b",
  "AbaetГ©",
  "Shah Alam",
  "Shantou",
  "Kuripan",
  "ЕўДЃqchah KhДЃnah",
  "Desa Baregbeg",
  "Kluczbork",
  "ViamГЈo",
  "Dalu",
  "Luhanka",
  "Bogorejo",
  "Pinhais",
  "Maizuru",
  "Krueng Luak",
  "Carepa",
  "Kerbuyan",
  "Shijiao",
  "Sakado",
  "Balaoang",
  "El Carril",
  "Limmared",
  "Medang",
  "San Diego",
  "Kosino",
  "Shicang",
  "AlГ­artos",
  "PeriyiГЎli",
  "Port Maria",
  "SГ©",
  "Presidencia Roque SГЎenz PeГ±a",
  "Maloye Verevo",
  "Xinkai",
  "Cimanglid",
  "Bedayutalang",
  "Lanlongkou",
  "Buesaco",
  "Sainte-Martine",
  "San Rafael",
  "Gabi",
  "SГ¶dra Sandby",
  "ЕЃagГіw",
  "Skhira",
  "Ntoum",
  "Akouda",
  "Cahors",
  "Batas Barat",
  "Xingnong",
  "Taywanak Ilaya",
  "Jiangpan",
  "Haoba",
  "Yamada",
  "Wenwucao",
  "Youngstown",
  "Dachang",
  "Jeponkrajan",
  "Nuwara Eliya",
  "Ustynivka",
  "Zhumadian",
  "Gurlan",
  "Sathing Phra",
  "Wysokie Mazowieckie",
  "Jingyang",
  "Naberezhnyye Chelny",
  "Libouchec",
  "KsiД…Еј Wielkopolski",
  "Sabugal",
  "Kebon",
  "Deje",
  "Seara",
  "Caieiras",
  "La Esperanza",
  "San Isidro",
  "Bolengpulau",
  "Arroio do Meio",
  "Oroquieta",
  "Passos",
  "Punta del Este",
  "Ponta Grossa",
  "Maogou",
  "Hanting",
  "PidvolochysвЂ™k",
  "Shahrud",
  "TrzciЕ„sko ZdrГіj",
  "Liuxiang",
  "Mayorga",
  "Changping",
  "Makiv",
  "Juigalpa",
  "Chernyshevsk",
  "Tieling",
  "Kolno",
  "Jianggezhuang",
  "Tayang",
  "Yanjiao",
  "LabГЁge",
  "Yuntan",
  "Sarakhs",
  "Zaqatala",
  "Anjozorobe",
  "Nyeri",
  "Longmen",
  "DesД“",
  "Panguruan",
  "DrГЎsov",
  "Unidos",
  "ItsandzГ©ni",
  "Caromatan",
  "Frederico Westphalen",
  "Sumuragung",
  "вЂIbrД«",
  "Alfta",
  "Krasnodon",
  "Frederico Westphalen",
  "Jinsha",
  "Sakai",
  "ГЃgios AthanГЎsios",
  "Fort LibertГ©",
  "Dolo",
  "Jimsar",
  "Loma Alta",
  "Magatos",
  "Sanbao",
  "Pasirmukti",
  "Nowosielce-Gniewosz",
  "Morcellemont Saint AndrГ©",
  "Margamukti",
  "Jaen",
  "Oslo",
  "Santa Catalina",
  "Agen",
  "Kirkop",
  "Cungking",
  "Giyon",
  "Norton",
  "Khuma",
  "ЕљwiД™ciechowa",
  "Oyan",
  "Cimanggu",
  "Kvitok",
  "Arapongas",
  "Szczecinek",
  "HaiвЂ™an",
  "Woniuhe",
  "Maszewo DuЕјe",
  "VЕ©ng TГ u",
  "Paris 12",
  "Blois",
  "Milano",
  "Kampong Chhnang",
  "Zaraza",
  "JeffreyвЂ™s Bay",
  "Las Vegas",
  "Arenal",
  "Anhua",
  "Chiclayo",
  "Taavetti",
  "Memphis",
  "Gangba",
  "Skole",
  "Qingshan",
  "Paris 01",
  "Nieuw Nickerie",
  "Narvacan",
  "Bor",
  "Leigongmiao",
  "Roche-Г -Bateau",
  "Opatowiec",
  "Volta Redonda",
  "Porangaba",
  "Fatubia",
  "Corinto",
  "Masu",
  "Khanabad",
  "Tanzhou",
  "Santa Ignacia",
  "Melres",
  "Cola",
  "Dazaifu",
  "Madrid",
  "Cimenga",
  "Piquete",
  "Lagoa do Itaenga",
  "Bzou",
  "Awayan",
  "Draginje",
  "HЕ­ngju-dong",
  "Tintina",
  "Tha Bo",
  "DДЃr an NaЕџr",
  "Xiaodukou",
  "Chishui",
  "Acton Vale",
  "Livadiya",
  "Bang Sao Thong",
  "Gantang",
  "RДЃmsar",
  "Duancun",
  "Hutang",
  "Cartagena del ChairГЎ",
  "Mutsu",
  "Dziergowice",
  "Duli",
  "Babantar",
  "Fagatogo",
  "Ambo Village",
  "Djibo",
  "Challas",
  "TЕ™inec",
  "Pathum Thani",
  "Kukuluk",
  "Paris 09",
  "LyМЃ SЖЎn",
  "StylГ­da",
  "Greenville",
  "Sabugo",
  "Reutlingen",
  "Belas",
  "Alavus",
  "Е ibenik",
  "KoЕ›cielec",
  "Svetlyy",
  "Inayauan",
  "Beiqijia",
  "Lameiro",
  "Kasina Wielka",
  "Malilipot",
  "Guapimirim",
  "PГЎno PolemГ­dia",
  "Luyang",
  "Malakand",
  "Sotouboua",
  "Baklashi",
  "OrlГ©ans",
  "Shiren",
  "MiЕ‚osЕ‚aw",
  "Bwizibwera",
  "Sujitan",
  "Sagay",
  "Nakhon Nayok",
  "Nesebar",
  "Prozor",
  "Tambakrejo",
  "Jose Maria Morelos",
  "Sano",
  "Harjamukti",
  "Tegallega",
  "Santa Cruz",
  "Lanling",
  "GГ¶teborg",
  "Kinsealy-Drinan",
  "Sanpai",
  "Puamata",
  "Shiquan",
  "JД«roft",
  "Purwodadi",
  "Smara",
  "Visby",
  "SГ©mГ©",
  "Gayam",
  "Nishishinminato",
  "Pailiao",
  "Laimuda",
  "Kujang-Е­p",
  "Taibao",
  "Fakaifou Village",
  "Mogok",
  "Daleman",
  "Lunik",
  "Santiago",
  "Dimovo",
  "Vysehrad",
  "Jardin",
  "NДЃбё©iyat HД«rДЃn",
  "Р—СѓСѓРЅРјРѕРґ",
  "Kilinochchi",
  "Douba",
  "ItuzaingГі",
  "Rybinsk",
  "Cikiruh",
  "TrollhГ¤ttan",
  "Llauta",
  "Fuan",
  "Kalmar",
  "Berlin",
  "Fuxing",
  "Wenquan",
  "Bunut",
  "Amio",
  "Shuiyuan",
  "Anping",
  "Chakaray",
  "Beaumont",
  "Al KarДЃmah",
  "Koten",
  "Kotel",
  "Santa InГЄs",
  "Armstrong",
  "Sukamulya",
  "Wangcheng",
  "ЕЅalec",
  "Dawuhan",
  "Kalianget",
  "AsunciГіn Mita",
  "Waingapu",
  "PЕ™Г­bor",
  "Konduga",
  "Columbeira",
  "Fagersta",
  "Shayuan",
  "Santa Cruz do Rio Pardo",
  "Salinas",
  "Ribeiro",
  "Tarogong",
  "Biqiao",
  "Conde",
  "Liberta",
  "Bukabu",
  "Pleven",
  "Bangrat",
  "Dushu",
  "BarwaЕ‚d GГіrny",
  "Marija Bistrica",
  "Syanno",
  "Shuhe",
  "Xingdian",
  "Shanlian",
  "MalakwДЃl",
  "Pushchino",
  "Tsementnozavodskiy",
  "Tunis",
  "Semiluki",
  "TrollhГ¤ttan",
  "Omaha",
  "Vallentuna",
  "Saurimo",
  "Konkwesso",
  "Pho Duc",
  "Olmos",
  "Loureiro",
  "Duzhou",
  "Kushikino",
  "JЕ«rmala",
  "Tianzishan",
  "Nuevo BerlГ­n",
  "Goujie",
  "RГ­o Gallegos",
  "Hisings KГ¤rra",
  "PiЕ‚awa GГіrna",
  "Vikhorevka",
  "Guandu",
  "Stockholm",
  "Cikalong",
  "Imider",
  "AngoulГЄme",
  "Bassar",
  "Timba Lauk",
  "Aime",
  "Santa Cruz de El Seibo",
  "Huilong",
  "OberГЎ",
  "Ciwidara",
  "ГЃgua Levada",
  "Lago",
  "FДЃqЕ«s",
  "Surubim",
  "Tacoma",
  "Lisewo",
  "LianвЂ™an",
  "Beja",
  "DomsjГ¶",
  "Dangcalan",
  "Zhonghe",
  "Sabaneta",
  "Levski",
  "Pukhavichy",
  "Xiongshan",
  "Nantes",
  "Itapecerica da Serra",
  "Valencia",
  "Niagara Falls",
  "Replot",
  "Baoping",
  "Valdivia",
  "Debesy",
  "Chattanooga",
  "El Olivar",
  "HyГЁres",
  "Karajeun",
  "Strasbourg",
  "Sabugueiro",
  "Kyzyl-OktyabrвЂ™skiy",
  "QalвЂeh-ye KhvДЃjeh",
  "Kostyantynivka",
  "BadД«n",
  "GrГ¤nna",
  "Libei",
  "DistracciГіn",
  "Dawang",
  "Bilaran",
  "Qingquan",
  "Ode",
  "QalвЂat BД«shah",
  "Zhaoyuan",
  "Sikonge",
  "Tsagaan-Olom",
  "Marina",
  "TasД«l",
  "Jalinan",
  "Fort Smith",
  "DziД™gielГіw",
  "Chicago",
  "Shuibian",
  "Shamanka",
  "Esparza",
  "KЕЌnan",
  "Tucupita",
  "Avelinha",
  "Bouarouss",
  "Tsubata",
  "Huangnan",
  "Wanjiazhuang",
  "Bauru",
  "Krasnoye",
  "Kuala Terengganu",
  "Stryszawa",
  "Planeta Rica",
  "Taozhou",
  "Madur",
  "Georgetown",
  "Xinning",
  "Taojiahe",
  "Manukau City",
  "Camingawan",
  "Cбє§u GiбєҐy",
  "Nueva Ocotepeque",
  "La Oroya",
  "Blatnica",
  "Xuguang",
  "Ipiales",
  "Bratislava",
  "Francisco I Madero",
  "ГЌnfias",
  "ZaГЇo",
  "Phoenix",
  "Fovissste",
  "Tuanzhou",
  "London",
  "Washington",
  "MГ©naka",
  "TвЂ™etвЂ™ri Tsqaro",
  "Mae Wang",
  "Bang Phae",
  "Port Washington",
  "Hanjianglu",
  "Washington",
  "Cova Figueira",
  "Xichehe",
  "Yanwukou",
  "BaligrГіd",
  "Batujaran",
  "Champagnole",
  "Noyemberyan",
  "Lexington",
  "Lyubeshiv",
  "ChakwДЃl",
  "Val-d'Or",
  "Alenquer",
  "Ciseuseupan",
  "Kadurahayu",
  "GachancipГЎ",
  "LappajГ¤rvi",
  "RogГіЕєno",
  "Praia da Vagueira",
  "Heping",
  "Mae Chan",
  "Daniwato",
  "Maunuri",
  "Retkovci",
  "Jagna",
  "Blizne",
  "Haradzyeya",
  "Dolisie",
  "Chixi",
  "Oeoh",
  "Khodasy",
  "La Esperanza",
  "Bloemfontein",
  "Tuusula",
  "Nikitinskiy",
  "Donostia-San Sebastian",
  "Camilaca",
  "Virojoki",
  "Anjirmuara",
  "Nongba",
  "Jiuxian",
  "Tungoo",
  "Guadalupe",
  "Xixiang",
  "Baturyn",
  "Purwodadi",
  "VoznesenвЂ™ye",
  "Linjiang",
  "Kore",
  "Cabo",
  "Fovissste",
  "Puyung",
  "Gadang",
  "Lleida",
  "Lasek",
  "Sentul",
  "Ziguinchor",
  "Kalimati",
  "Ica",
  "Shuozhou",
  "Riyue",
  "Dongxi",
  "ConceiГ§ГЈo do Araguaia",
  "Naran-mandokhu Somon",
  "Portoviejo",
  "Fanyang",
  "SГЈo SebastiГЈo do ParaГ­so",
  "San Pedro",
  "Chugur",
  "Hayes",
  "Mari",
  "Jomda",
  "Obanazawa",
  "Kutasari",
  "Johogunung",
  "Lanyang",
  "Sangzhen",
  "NвЂ™dalatando",
  "Bulihan",
  "Newark",
  "Foz do IguaГ§u",
  "QingвЂ™an",
  "бёЁawf",
  "Villa Regina",
  "Melita",
  "Sosnovka",
  "OstromД›Е™",
  "QukГ«s-SkГ«nderbe",
  "Bitica",
  "Hwange",
  "Malabang",
  "Caohe",
  "Arroyo Naranjo",
  "Xianju",
  "Victoria Falls",
  "Phan Thong",
  "Jiangkou",
  "Dongji",
  "Nginjen",
  "Pasirnangka",
  "Irving",
  "Plasy",
  "Linfen",
  "Getafe",
  "BrzeЕєnica",
  "Beckerich",
  ]

const CODES = [randomLetter(3)];

const PRICES = [randomInt(0,300000)];


const mockCity = i => 
  [randomInt(0, CITIES.length)];

const mockCode = () => {
  const code = randomLetter(3);
  return code;
}

const mockPrice = () => {
  randomInt(0,300000);
}

const mockCity = i => {
  const City = mockCity(i);
  
  return new City(
    City,
    mockCode(),
    mockPrice(),
  );
}

const mockCities = createArray(mockCity);