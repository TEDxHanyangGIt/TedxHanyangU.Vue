<template>
        <v-container fluid>
        <v-row class = "row">    
            <v-col class="frame"
            v-for="card in cards"
            :key="card.title"
            
            >
            <v-card class="cardbox">
                <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="150px"
                    
                >
                    <v-card-title v-text="card.title"></v-card-title>
                </v-img>
                <iconButton 
                    
                    />
                
            </v-card>
            </v-col>
        </v-row>
        </v-container>
</template>


<script>
import iconButton from '@components/Sponsor/iconButton'
export default {
    name: "PartnerCard",
    components: {
        iconButton: iconButton
    },
    data: () => ({
        cards: [
            { 
                title: '남도순대국', 
                src: require("@assets/image/sponsor/namdo.png"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/search/%EB%82%A8%EB%8F%84%EC%88%9C%EB%8C%80%EA%B5%AD/place/1346928498?c=14141626.5463261,4517273.1089402,15,0,0,0,dh&placePath=%3F%2526",
                    }
                ]
            },
            { 
                title: '동방 양꼬치', 
                src: require("@assets/image/sponsor/dongbang.png"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/entry/place/32078474?c=14142281.0383808,4517550.7378047,15,0,0,0,dh",
                    }
                ]
            },
            { 
                title: '돼지분식', 
                src: require("@assets/image/sponsor/pig.png"),
                iconList: [
                    {
                        url:null,
                        map:"https://www.google.com/maps/place/%EB%8F%BC%EC%A7%80%EB%B6%84%EC%8B%9D/@37.5583821,127.0402972,15z/data=!4m5!3m4!1s0x0:0x7f5c997ed7cb7861!8m2!3d37.5583821!4d127.0402972",
                    }
                ]
            },
            { 
                title: '띵똥와플', 
                src: require("@assets/image/sponsor/ddingddong.png"),
                iconList: [
                    {
                        url:"http://www.ddingddong.co.kr/",
                        map:"https://map.naver.com/v5/entry/place/33877169?c=14141971.0257426,4517488.5701339,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt",
                    }
                ]
            },
            { 
                title: '베네토 피자앤펍', 
                src: require("@assets/image/sponsor/veneto.jpg"),
                iconList: [
                    {
                        url:"http://coconutz.kr/1657",
                        map:"https://map.naver.com/v5/search/%EB%B2%A0%EB%84%A4%ED%86%A0%20%ED%94%BC%EC%9E%90%20%EC%95%A4%20%ED%8E%8D/place/1005105047?c=14138184.4913961,4517571.6910819,13,0,0,0,dh",
                    }
                ]
            },
            { 
                title: 'earthman', 
                src: require("@assets/image/sponsor/earthman.jpg"),
                iconList: [
                    {
                        url:"https://www.earthman.asia/",
                        map:"https://map.naver.com/v5/entry/place/36836335?c=14130245.7437773,4524303.8067276,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt",
                    }
                ]  
            },
            { 
                title: 'echopresso', 
                src: require("@assets/image/sponsor/echopresso.jpg"),
                iconList: [
                    {
                        url:"http://www.echopresso.com/bbs/content.php?co_id=about",
                        map:"https://map.naver.com/v5/entry/place/993413799?c=14398076.8096105,4254742.1767630,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt",
                    }
                ] 
            },
            { 
                title: 'VIVA 부대찌개', 
                src: require("@assets/image/sponsor/biya.png"), 
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/entry/place/1528285514?c=14142079.2394196,4517255.8124303,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt",
                    }
                ] 
            },
            { 
                title: '복고다방 한양대점', 
                src: require("@assets/image/sponsor/bokgo_han.jpg"),
                iconList: [
                    {
                        url:"https://www.bokgodabang.com/",
                        map:"https://www.google.com/maps/place/%EB%B3%B5%EA%B3%A0%EB%8B%A4%EB%B0%A9/@37.5613977,127.0398463,15z/data=!4m5!3m4!1s0x0:0x36ed8fe205a7b398!8m2!3d37.5613977!4d127.0398463",
                    }
                ] 
            },
            { 
                title: '커피만 한양대점',
                src: require("@assets/image/sponsor/coffeeMan_han.jpg"),
                iconList: [
                    {
                        url:"https://coffee900.com/main/index.html",
                        map:null,
                    }
                ] 
            },
            { 
                title: '서브웨이 한양대점', 
                src: require("@assets/image/sponsor/subway_han.jpg"),
                iconList: [
                    {
                        url:"https://www.subway.co.kr/",
                        map:"https://map.naver.com/v5/search/%EC%84%9C%EB%B8%8C%EC%9B%A8%EC%9D%B4%20%ED%95%9C%EC%96%91%EB%8C%80%EC%A0%90/place/1991840429?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14138289.5923100,4517629.0188532,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll",
                    }
                ] 
            },
            { 
                title: '이디야 한양대점', 
                src: require("@assets/image/sponsor/ediya_han.gif"),
                iconList: [
                    {
                        url:"https://www.ediya.com/",
                        map:"https://map.naver.com/v5/entry/place/13204849?c=14142201.555756036,4517455.798252145,15,0,0,0,dh",
                    }
                ] 
            },
            { 
                title: '이마트 왕십리점', 
                src: require("@assets/image/sponsor/emart_king10.png"),
                iconList: [
                    {
                        url:"http://emart.com/",
                        map:"https://map.naver.com/v5/search/%EC%9D%B4%EB%A7%88%ED%8A%B8%20%EC%99%95%EC%8B%AD%EB%A6%AC%EC%A0%90/place/13318581?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14141846.4814963,4517725.7144841,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll",
                    }
                ]
                
            },
            { 
                title: 'jungwon', 
                src: require("@assets/image/sponsor/jungwon.png"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/search/jungwon%20%ED%95%9C%EC%96%91%EB%8C%80/place/37996815?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14143025.2547162,4517528.1008404,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll",
                    }
                ]
            },
            { 
                title: '카모메 한양대점', 
                src: require("@assets/image/sponsor/kamome_han.jpg"),
                iconList: [
                    {
                        url:"http://www.thekamome.com/",
                        map:"https://map.naver.com/v5/search/%EC%B9%B4%EB%AA%A8%EB%A9%94%20%ED%95%9C%EC%96%91%EB%8C%80/place/13496755?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14142080.5529896,4517391.8434079,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll",
                    }
                ] 
            },
            { 
                title: '이모네 북어찜', 
                src: require("@assets/image/sponsor/emo.png"),
                iconList: [
                    {
                        url:"https://www.instagram.com/2book3chon/",
                        map:"https://map.naver.com/v5/search/%EC%9D%B4%EB%AA%A8%EB%84%A4%EB%B6%81%EC%96%B4/place/13540237?c=14142080.5529896,4517391.8434079,13,0,0,0,dh",
                    }
                ] 
            },
            { 
                title: '장어구이', 
                src: require("@assets/image/sponsor/eel_92.png"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/search/%EC%9E%A5%EC%96%B4%EA%B5%AC%EC%9D%B4/place/33085421?c=14142080.5529896,4517391.8434079,13,0,0,0,dh&placePath=%3F%2526",
                    }
                ] 
            },
            { 
                title: '코카콜라', 
                src: require("@assets/image/sponsor/cocacola.png"),
                iconList: [
                    {
                        url:"https://www.coca-colajourney.co.kr/",
                        map:"https://map.naver.com/v5/search/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC/place/32971450?c=14134023.4506689,4518823.3474201,15,0,0,0,dh&placePath=%3F%2526",
                    }
                ] 
            },
            { 
                title: '한솥도시락 한양여대점', 
                src: require("@assets/image/sponsor/hansot_han_woman.png"),
                iconList: [
                    {
                        url:"https://www.hsd.co.kr/",
                        map:"https://map.naver.com/v5/entry/place/31068020?c=14142949.16784427,4517605.210723063,15,0,0,0,dh",
                    }
                ] 
            },
            { 
                title: '광동제약', 
                src: require("@assets/image/sponsor/kwangdong.jpg"),
                iconList: [
                    {
                        url:"http://www.ekdp.com/main/main.asp",
                        map:"https://map.naver.com/v5/entry/place/12083024",
                    }
                ] 
            },
            { 
                title: '랩노쉬', 
                src: require("@assets/image/sponsor/labnosh.png"),
                iconList: [
                    {
                        url:"http://labnosh.com/",
                        map:"https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%2B%EA%B5%AC%EB%A1%9C%EA%B5%AC%2B%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C27%EA%B8%B8%2B24%2B(%EA%B5%AC%EB%A1%9C%EB%8F%99)%2B%EB%B2%BD%EC%82%B0%EB%94%94%EC%A7%80%ED%84%B8%EB%B0%B8%EB%A6%AC1%EC%B0%A8%2B801%ED%98%B8/address/14125664.379001763,4506717.585178306,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C27%EA%B8%B8%2024,new?c=14125613.0586096,4506788.0472344,17,0,0,0,dh",
                    }
                ]  
            },
            { 
                title: '라이에또 한양대점', 
                src: require("@assets/image/sponsor/LaLieto_han.png"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/search/%EB%9D%BC%EB%A6%AC%EC%97%90%EB%98%90/place/11780505?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14142291.0581466,4517490.2271907,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll",
                    }
                ] 
            },
            { 
                title: 'logitech', 
                src: require("@assets/image/sponsor/logitech.jpg"),
                iconList: [
                    {
                        url:"https://www.logitech.com/ko-kr",
                        map:"https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%97%AC%EC%9D%98%EA%B3%B5%EC%9B%90%EB%A1%9C%20101,%20CCMM%20%EB%B9%8C%EB%94%A9%20402B/address/14129215.159063492,4513139.3772006575,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%97%AC%EC%9D%98%EA%B3%B5%EC%9B%90%EB%A1%9C%20101,new?c=14129095.3449968,4513149.9443040,18,0,0,0,dh",
                    }
                ] 
            },
            { 
                title: '바비톡', 
                src: require("@assets/image/sponsor/babitalk.png"),
                iconList: [
                    {
                        url:"http://www.babitalk.com/",
                        map:"https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%A1%9C3%EA%B8%B8%2013/address/14141034.361283135,4508239.3860993665,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%A1%9C3%EA%B8%B8%2013,new?c=14158770.5617927,4472626.6814482,15,0,0,0,dh",
                    }
                ] 
            },
            { 
                title: '마조로', 
                src: require("@assets/image/sponsor/mazoro.jpg"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/search/%EC%B9%B4%ED%8E%98%20%EB%A7%88%EC%A1%B0%EB%A1%9C/place/1730906110?c=14141614.6030404,4517304.1614829,15,0,0,0,dh&placePath=%3Fentry%253Dpll%2526",
                    }
                ] 
            },
            { 
                title: '메디힐', 
                src: require("@assets/image/sponsor/mediheal.jpg"),
                iconList: [
                    {
                        url:"https://www.mediheal.com/kr",
                        map:"https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B3%B5%ED%95%AD%EB%8C%80%EB%A1%9C%20516%20%EB%A9%94%EB%94%94%ED%9E%90%EB%B9%8C%EB%94%A9?c=14121889.0724286,4516253.1523440,15,0,0,0,dh",
                    }
                ] 
            },
            {
                title: 'nThing', 
                src: require("@assets/image/sponsor/nThing.jpg"),
                iconList: [
                    {
                        url:"https://nthing.net/",
                        map:"https://map.naver.com/v5/search/nthing/place/58360968?c=14140436.9950734,4512694.0532145,15,0,0,0,dh",
                    }
                ] 
            },
            { 
                title: '소녀방앗간', 
                src: require("@assets/image/sponsor/so_bang.png"),
                iconList: [
                    {
                        url:"http://www.millcompany.co.kr/",
                        map:"https://map.naver.com/v5/search/%EC%86%8C%EB%85%80%EB%B0%A9%EC%95%97%EA%B0%84/place/35848947?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14142481.4033440,4515574.2269014,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll",
                    }
                ] 
            },
            { 
                title: '우주라이크커피 한양대점',
                src: require("@assets/image/sponsor/WouldULike_han.jpg"),
                iconList: [
                    {
                        url:"http://www.wouldulike.co.kr/",
                        map:"https://www.google.com/search?biw=1536&bih=722&tbm=lcl&ei=i4tpX4DnGoX_wAPkpa7wCA&q=%EC%9A%B0%EC%A3%BC%EB%9D%BC%EC%9D%B4%ED%81%AC%EC%BB%A4%ED%94%BC+%ED%95%9C%EC%96%91%EB%8C%80&oq=%EC%9A%B0%EC%A3%BC%EB%9D%BC%EC%9D%B4%ED%81%AC%EC%BB%A4%ED%94%BC+%ED%95%9C%EC%96%91%EB%8C%80&gs_l=psy-ab.3..0i333k1.1620197.1625887.0.1626130.35.27.1.1.1.0.295.3945.0j10j10.21.0....0...1c.1j4.64.psy-ab..23.11.1854.0..0j38j0i67k1j0i433k1j0i30k1j33i160k1.206.afO7VlZ3Sww#rlfi=hd:;si:10120948810239132816;mv:[[37.568604799999996,127.03918290000001],[37.477163399999995,126.89110509999999]]",
                    }
                ] 
            },
            { 
                title: '체셔 comic cafe',
                src: require("@assets/image/sponsor/Cheshire.jpg"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/entry/place/38734190?c=14141734.6276719,4517270.8660450,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt",
                    }
                ]  
            },
            { 
                title: '커리야 한양대점', 
                src: require("@assets/image/sponsor/curryya_han.jpg"),
                iconList: [
                    {
                        url:"https://www.facebook.com/%EC%BB%A4%EB%A6%AC%EC%95%BC-%ED%95%9C%EC%96%91%EB%8C%80%EC%A0%90-334807293549989/",
                        map:"https://www.google.com/maps/place/%EC%BB%A4%EB%A6%AC%EC%95%BC+%ED%95%9C%EC%96%91%EB%8C%80%EC%A0%90+Curryya(Indian+Restaurant)/@37.5338871,126.966058,13z/data=!4m8!1m2!2m1!1z7Luk66as7JW8IO2VnOyWkeuMgCDsnITsuZg!3m4!1s0x357ca4a7ba4d4393:0x4fd9b79fe2a9e423!8m2!3d37.560076!4d127.041883",
                    }
                ] 
            },
            { 
                title: 'KT&G', 
                src: require("@assets/image/sponsor/KT&G.jpg"),
                iconList: [
                    {
                        url:"https://www.ktng.com/",
                        map:null,
                    }
                ]  
            },
            { 
                title: 'ToPresso 한양대점', 
                src: require("@assets/image/sponsor/ToPresso_han.jpg"),
                iconList: [
                    {
                        url:"http://www.topresso.com/site/index?_C_=4&_L_=30&n_media=27758&n_query=TOPRESSO&n_rank=1&n_ad_group=grp-a001-04-000000003944346&n_ad=nad-a001-04-000000106251018&n_keyword_id=nkw-a001-04-000000771913103&n_keyword=TOPRESSO&n_campaign_type=4&n_contract=tct-a001-04-000000000293399&n_ad_group_type=5&NaPm=ct%3Dkfdqwjv4%7Cci%3D0yO0000UKkztrQqRW115%7Ctr%3Dbrnd%7Chk%3Da4b566e99ffb152772a26479af298a71f259cc06",
                        map:"https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20157%20%EC%9B%90%EC%9D%BC%EB%B9%8C%EB%94%A9/address/14140682.602824178,4510910.914688023,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20157,new?c=14140625.9032054,4510908.8825638,19,0,0,0,dh",
                    }                
                ] 
            },
            { 
                title: '밸런스버거 한양대점', 
                src: require("@assets/image/sponsor/valanceBurgers_han.jpg"),
                iconList: [
                    {
                        url:null,
                        map:"https://map.naver.com/v5/entry/place/13225220?c=14142291.7149316,4517056.4242925,15,0,0,0,dh",
                    }
                ]  
            },
            { 
                title: '와플대학 한양대점', 
                src: require("@assets/image/sponsor/waffleuniv_han.jpg"),
                iconList: [
                    {
                        url:"https://www.waffleuniv.com/",
                        map:"https://map.naver.com/v5/entry/place/1113171842?c=14141966.9737131,4517420.3923035,15,0,0,0,dh",
                    }
                ]
            },
            { 
                title: '노랑통닭 한양대점', 
                src: require("@assets/image/sponsor/yellow_chicken_han.jpg"),
                iconList: [
                    {
                        url:"http://www.norangtongdak.co.kr/",
                        map:"https://map.naver.com/v5/entry/place/35841516?c=14141966.9737131,4517420.3923035,15,0,0,0,dh",
                    }
                ] 
            },
        ],
    }),
    }
</script>

<style scoped>

.frame {
    width: 300px;
    height: 160px;
    margin: 50px;
    margin-bottom: 6rem;
    
}
.row {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 0;
    clear: both
    
}

</style>