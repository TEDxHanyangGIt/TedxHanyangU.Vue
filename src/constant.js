export const menuList = [
    {
        name: "Home",
        route_name: "home",
        icon: "fas fa-home grey-color"
    },
    {
        name: "About",
        route_name: "about",
        icon: "fas fa-home grey-color"
    },
    {
        name: "Organizers",
        route_name: "organizers",
        icon: "fas fa-users grey-color"
    },
    {
        name: "Talks",
        route_name: "talk",
        icon: "fas fa-home grey-color"
    }
];

export const HomeMainText = "TED는 Technology, Entertainment, Design의 약자로 자신이 하는 일에 열정을 가진 사람들이 'Ideas Worth Spreading (공유할 가치가 있는 아이디어)' 이라는 슬로건 아래에서 18분간 발표하고 이야기를 나누는 자리입니다. TEDx의 'x'는 독립적으로 조직된 TED 이벤트를 뜻하며, TED의 기본 가이드라인을 활용하여, 자발적으로 TED를 기획하고자 하는 사람들이 모여 만드는 이벤트입니다.\n\nTED, short for Technology, Entertainment, Design, is a conference where speakers with passion for their work presents their ideas under the slogan 'Ideas Worth Spreading' for 18 minutes. The 'x' in TEDx represents the idea of an independent TED-like event organized by individuals under TED specific guidelines."
export const TedxRuleVideo = "https://www.youtube.com/embed/QRabMAqxwaE?autoplay=1"
// export const TedxRuleVideo = "https://www.youtube.com/embed/U_sYIKWhJvk"
export const events = [
    {
        "no": 1,
        "image": require("@assets/image/events/1.jpg"),
        "display": "on",
        "title": "Expect the unexpected",
        "talks": [
            {
                "speaker": "박철준",
                "occupation": "ARCHIBAN 건축도시연구원",
                "talk_title": "대중문화공간 한강 아레나",
                "youtube": "https://youtu.be/a53eLY69gc0"
            },
            {
                "speaker": "한선천",
                "occupation": "한양대학교 무용과 재학",
                "talk_title": "현대무용으로 소통하기",
                "youtube": "https://youtu.be/gLAhE8RtrIk"
            },
            {
                "speaker": "유영만",
                "occupation": "한양대학교 교수학습개발센터장",
                "talk_title": "여러분에게 지식생태학을 소개합니다",
                "youtube": "https://youtu.be/NWLlbmANlgk"
            },
            {
                "speaker": "정태성",
                "occupation": "개인택시운송사업자",
                "talk_title": "5성급 택시",
                "youtube": "https://youtu.be/WODUC0XxfhM"
            }
        ]
    },
    {
        "no": 2,
        "image": require("@assets/image/events/2.jpg"),
        "display": "on",
        "title": "오감도",
        "talks": [
            {
                "speaker": "김은경",
                "occupation": "채소 소믈리에",
                "talk_title": "미각-자연의 맛을 느끼다",
                "youtube": "https://youtu.be/yfi0Hi38TQ0"
            },
            {
                "speaker": "장민승",
                "occupation": "공공미술가",
                "talk_title": "청각-Sphere 프로젝트",
                "youtube": "https://youtu.be/FsVcyr-p02g"
            },
            {
                "speaker": "임원철",
                "occupation": "조향사",
                "talk_title": "후각-모든 것이 사라져도 가장 마지막까지 남아있는 것, 향기",
                "youtube": "https://youtu.be/gIibfZWm20w"
            },
            {
                "speaker": "유대영",
                "occupation": "VJ",
                "talk_title": "시각-눈과 귀가 즐거워지는 시간",
                "youtube": "https://youtu.be/etK5e5Hjg4w"
            }
        ]
    },
    {
        "no": 3,
        "image": require("@assets/image/events/3.jpg"),
        "display": "on",
        "title": "거짓-말(명사)",
        "talks": [
            {
                "speaker": "윤영수",
                "occupation": "KBS 방송작가",
                "talk_title": "역사에 대한 참과 거짓",
                "youtube": "http://youtu.be/1xro4abasLU"
            },
            {
                "speaker": "이재석",
                "occupation": "서울경찰청 과학수사계 거짓말 탐지반 경위",
                "talk_title": "과학, 폴리그라프, 그리고 범죄",
                "youtube": "http://youtu.be/et32yx90tDo"
            },
            {
                "speaker": "서민",
                "occupation": "단국대학교 의학 교수",
                "talk_title": "과학자의 거짓말",
                "youtube": "http://youtu.be/DFhy66uOr8A"
            }
        ]
    },
    {
        "no": 4,
        "image": require("@assets/image/events/4.jpg"),
        "display": "on",
        "title": "제페토 할아버지",
        "talks": [
            {
                "speaker": "선우명호",
                "occupation": "한양대학교 ACE Lab 연구원",
                "talk_title": "미래자동차 기술에 꿈을 불어넣다",
                "youtube": "https://youtu.be/DgGcPv6cy-k"
            },
            {
                "speaker": "박진호",
                "occupation": "씨네메이트 컬러리스트",
                "talk_title": "영화에 숨을 불어넣다",
                "youtube": "https://youtu.be/rMZOXI-bflA"
            },
            {
                "speaker": "김효진",
                "occupation": "그린디자이너",
                "talk_title": "버려진 것에 숨을 불어넣다",
                "youtube": "https://youtu.be/-JbYiP7IZbE"
            },
            {
                "speaker": "안희창",
                "occupation": "한양대학교 병원 재건성형의",
                "talk_title": "새 삶에 숨을 불어넣다",
                "youtube": "https://youtu.be/EEl7-gp4srY"
            }
        ]
    },
    {
        "no": 5,
        "image": require("@assets/image/events/5.jpg"),
        "display": "on",
        "title": "움(UM); 트다",
        "talks": [
            {
                "speaker": "최종언",
                "occupation": "오픈크리에이터즈 공동대표",
                "talk_title": "차원이 움트다",
                "youtube": "https://youtu.be/iyl8QqGaR-Q"
            },
            {
                "speaker": "이나리",
                "occupation": "은행권청년창업재단 기업가정신센터장",
                "talk_title": "D캠프, 생태계/열린터가 움트다",
                "youtube": "https://youtu.be/6yLDRl8ZepQ"
            },
            {
                "speaker": "윤여환",
                "occupation": "충남대학교 회화과 교수",
                "talk_title": "생명/화폭에 움트다",
                "youtube": "https://youtu.be/ZUqJfMDUhS4?list=PLsRNoUx8w3rNRPnAGAfHYDRCJ272aQTmG"
            },
            {
                "speaker": "김찬수",
                "occupation": "남녀소통연구소 대표",
                "talk_title": "감정이 움트다",
                "youtube": "https://youtu.be/tgJ6LbqmqH8"
            },
            {
                "speaker": "구민근",
                "occupation": "FAIR SPACE 대표",
                "talk_title": "소유가 아닌 공유, 공간기부가 움트다",
                "youtube": "https://youtu.be/zZZU7r331wE"
            }
        ]
    },
    {
        "no": 6,
        "image": require("@assets/image/events/6.jpg"),
        "display": "on",
        "title": "HANDLE",
        "talks": [
            {
                "speaker": "김윤영",
                "occupation": "서울대학교 기계항공공학부 교수",
                "talk_title": "그림을 설계하다",
                "youtube": "https://youtu.be/A1sx7gUZ-Xc"
            },
            {
                "speaker": "최현석",
                "occupation": "ELBON THE TABLE 총괄 셰프",
                "talk_title": "CRAZY ON YOURSELF",
                "youtube": "https://youtu.be/U6pgPSvCYgY"
            },
            {
                "speaker": "최소현",
                "occupation": "PERCEPTION 대표이사",
                "talk_title": "누구나 디자이너가 될수 있다",
                "youtube": "https://youtu.be/40YTGAkSeFA"
            },
            {
                "speaker": "이신혁",
                "occupation": "PROJECT SH 감독",
                "talk_title": "일상에 양념치기",
                "youtube": "https://youtu.be/JqxOwfqk5GU"
            },
            {
                "speaker": "박상돈",
                "occupation": "BEAT BOXER ",
                "talk_title": "A NEXT STEP IN THE MUSIC WORLD",
                "youtube": "https://youtu.be/LuQh76oZ8Tg"
            },
            {
                "speaker": "조항우",
                "occupation": "아트라스 BX 카레이서 겸 감독",
                "talk_title": "DRIVE TO WIN",
                "youtube": "https://youtu.be/8p1WTiat2no"
            }
        ]
    },
    {
        "no": 7,
        "image": require("@assets/image/events/7.jpg"),
        "display": "on",
        "title": "초록(GREEN)",
        "talks": [
            {
                "speaker": "임형준",
                "occupation": "유엔세계식량계획 한국사무소장",
                "talk_title": "모든나라가 green이 되는 세상을 꿈꾸다",
                "youtube": "https://youtu.be/97sdmcrp0Xk"
            },
            {
                "speaker": "이주은",
                "occupation": "미술사학자",
                "talk_title": "초록 - 악마의 색에서 천사의 색으로",
                "youtube": "https://youtu.be/JePC3h4hhgw"
            },
            {
                "speaker": "김상철",
                "occupation": "그린카 본부장",
                "talk_title": "세상을 변화시킨 Green, 자동차에서 함께 꿈꾸다",
                "youtube": "https://youtu.be/dgb-A4gKEnk"
            },
            {
                "speaker": "김가현",
                "occupation": "싱어송라이터 락쿤",
                "talk_title": "Editing the brain in Sandrohy",
                "youtube": "https://youtu.be/xK9Klzjv-kk"
            },
            {
                "speaker": "서동일",
                "occupation": "오큘러스 VR 한국지사장",
                "talk_title": "VR - The new digital mudium",
                "youtube": "https://youtu.be/GUSnC6nXZ3U"
            },
            {
                "speaker": "김대호",
                "occupation": "공공 PR & DESIGN 컨설턴트",
                "talk_title": "지구와 인간을 위한 공존의 길",
                "youtube": "https://youtu.be/-9FhrKBEWo0"
            }
        ]
    },
    {
        "no": 8,
        "image": require("@assets/image/events/8.jpg"),
        "display": "on",
        "title": "FEVER",
        "talks": [
            {
                "speaker": "최대호",
                "occupation": "'읽어보시집' 작가",
                "talk_title": "손글씨로 쓴 내 인생",
                "youtube": "https://www.youtube.com/watch?v=_bBNWDKLFBs"
            },
            {
                "speaker": "송대섭",
                "occupation": "동물바이러스 연구 박사",
                "talk_title": "바이러스 습격 사건",
                "youtube": "https://www.youtube.com/watch?v=isQvpEdTi2o"
            },
            {
                "speaker": "유승혜",
                "occupation": "걷고 쓰는 사람, 여행작가",
                "talk_title": "엄마, 우리 같이 오길 잘 했어",
                "youtube": "https://www.youtube.com/watch?v=bS6b21P7WX8"
            },
            {
                "speaker": "김민욱",
                "occupation": "난방텐트 (주)바이맘 대표",
                "talk_title": "나의 뜨거운 마음으로 모두에게 온기를",
                "youtube": "https://www.youtube.com/watch?v=g0UmYsOeMpc"
            },
            {
                "speaker": "안민우",
                "occupation": "메모하는 청년, 청년 사업가",
                "talk_title": "마음의 열을 다스리는 법",
                "youtube": "https://www.youtube.com/watch?v=B3dbfZnEC58"
            },
            {
                "speaker": "호조(권순호)",
                "occupation": "카카오톡 이모티콘 디자이너",
                "talk_title": "닥치고 그림이나 그려",
                "youtube": "https://www.youtube.com/watch?v=LFuIQQAdTWQ"
            }
        ]
    },
    {
        "no": 9,
        "image": require("@assets/image/events/9.jpg"),
        "display": "on",
        "title": "KNOCK",
        "notice": "제9회 TEDxHanyangU 'KNOCK'의 강연영상은 라이센스 문제로 업로드되지 못하였습니다.",
        "talks": [
            {
                "speaker": "라이언각",
                "occupation": "살사 댄서",
                "talk_title": "광불광득:미치지 아니하면 얻지 못한다"
            },
            {
                "speaker": "자메즈",
                "occupation": "랩퍼",
                "talk_title": "내가 어디있든 그냥 하고 싶어. 노래가"
            },
            {
                "speaker": "정덕희",
                "occupation": "탱그램 팩토리 대표",
                "talk_title": "제조업에 노크한 디자이너"
            },
            {
                "speaker": "지웅배",
                "occupation": "우주연구원",
                "talk_title": "당신과 우주는 얼마나 멀리 떨어져 있을까요?"
            },
            {
                "speaker": "사우스빅",
                "occupation": "복고풍 디자이너",
                "talk_title": "위트있는 디자인, 뭐라고 생각해?"
            },
            {
                "speaker": "이기업",
                "occupation": "자유로운 대학생",
                "talk_title": "내가 두근거리는 오늘"
            }
        ]
    },
    {
        "no": 10,
        "image": require("@assets/image/events/10.jpg"),
        "display": "on",
        "title": "Renaissance",
        "subtitle": "사람을 재조명하다",
        "talks": [
            {
                "speaker": "김동환",
                "occupation": "로봇기자 개발자",
                "talk_title": "로봇 저널리즘, 두려워할 필요 없어요",
                "youtube": "https://www.youtube.com/watch?v=LmYjAmNnVWY&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=3"
            },
            {
                "speaker": "이성동",
                "occupation": "얼킨(ul:kin) 대표",
                "talk_title": "세상에 단 하나뿐인 예술을 입다",
                "youtube": "https://www.youtube.com/watch?v=iuyGcRSNq1Q&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=1"
            },
            {
                "speaker": "곽유라&최정윤",
                "occupation": "플래쳐랩 공동대표",
                "talk_title": "섹스 토이가 나쁜건가요?",
                "youtube": "https://www.youtube.com/watch?v=cT8ezszGiJU&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=4"
            },
            {
                "speaker": "현동진",
                "occupation": "웨어러블 로봇 개발자",
                "talk_title": "로봇의 중심에 인간을 놓다",
                "youtube": "https://www.youtube.com/watch?v=cHUTpBys1-c&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=2"
            },
            {
                "speaker": "최민정",
                "occupation": "설레다 일러스트레이터",
                "talk_title": "그림으로 당신을 치유해줄게요",
                "youtube": "https://www.youtube.com/watch?v=WnMAbUUcMx4&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=5"
            },
            {
                "speaker": "윤홍조",
                "occupation": "마리몬드 대표",
                "talk_title": "오늘 하루도 당신은 소중하고 아름답습니다"
            }
        ]
    },
    {
        "no": 11,
        "image": require("@assets/image/events/11.jpg"),
        "display": "on",
        "title": "心 CITY",
        "talks": [
            {
                "speaker": "정원오",
                "occupation": "성동구청장",
                "talk_title": "젠트리피케이션 닥터, 성동구를 상생으로 치료하다.",
                "youtube": "https://www.youtube.com/watch?v=fpa7CzIe3xM"
            },
            {
                "speaker": "이원형",
                "occupation": "tvN '바벨250' PD",
                "talk_title": "꼭 언어가 통해야 마음이 통하나요?",
                "youtube": "https://www.youtube.com/watch?v=i5ungpGfJ5M"
            },
            {
                "speaker": "고지훈",
                "occupation": "LOUD 공공소통연구소",
                "talk_title": "서로의 마음을 이어가는 작은 소통 실천",
                "youtube": "https://www.youtube.com/watch?v=JZ9tDicYOpQ"
            },
            {
                "speaker": "박소령",
                "occupation": "퍼블리(PUBLY) CEO",
                "talk_title": "우리사회의 지적자본을 쌓는 사람들, PUBLY",
                "youtube": "https://www.youtube.com/watch?v=YS2cjfZNWqw"
            },
            {
                "speaker": "이영민",
                "occupation": "꽃눈과 시인의 포토포엠",
                "talk_title": "시각장애 학생들의 사진전 - 보이지 않는 것을 보다."
            },
            {
                "speaker": "양경수",
                "occupation": "작가",
                "talk_title": "그림으로 밥 먹고 살기",
                "youtube": "https://www.youtube.com/watch?v=_PconJ9l3os"
            }
        ]
    },
    {
        "no": 12,
        "image": require("@assets/image/events/12.jpg"),
        "display": "on",
        "title": "달의 뒷면",
        "talks": [
            {
                "speaker": "김홍기",
                "occupation": "패션큐레이터",
                "talk_title": "단추, 작지만 놀라운 옷의 이면",
                "youtube": "https://youtu.be/3qKgVDbo7DQ"
            },
            {
                "speaker": "이지민",
                "occupation": "PR5번가 CEO",
                "talk_title": "진짜 한국의 술을 아십니까?",
                "youtube": "https://youtu.be/dGpjww3KsU4"
            },
            {
                "speaker": "소형석",
                "occupation": "SBS 모비딕 '양세형의 숏터뷰'' PD",
                "talk_title": "Attention, Adaption, Annotation 관심의 시장에 적응하기"
            },
            {
                "speaker": "허성용",
                "occupation": "아프리카인사이트 대표",
                "talk_title": "빈곤포르노, 그 불편한 진실",
                "youtube": "https://youtu.be/JuFamq6AHTU"
            },
            {
                "speaker": "김현식",
                "occupation": "물나무사진관 대표",
                "talk_title": "조선에서 태어난 사진",
                "youtube": "https://youtu.be/12WRBnN-92U"
            },
            {
                "speaker": "이혜정",
                "occupation": "교육과혁신연구소장",
                "talk_title": "'물 만난 물고기'를 만드는 물",
                "youtube": "https://youtu.be/hX98Qmc_4sg"
            }
        ]
    },
    {
        "no": 13,
        "image": require("@assets/image/events/13.jpg"),
        "display": "on",
        "title": "제 8요일",
        "talks": [
            {
                "speaker": "오선경",
                "occupation": "성공독섴코칭센터 대표",
                "talk_title": "멋지고 충분한, 제8요일의 책읽기",
                "youtube": "https://www.youtube.com/watch?v=7S8BvsRDVVE"
            },
            {
                "speaker": "양재웅",
                "occupation": "W진병원 원장",
                "talk_title": "행복한 연애",
                "youtube": "https://www.youtube.com/watch?v=JDTciL0PVXU"
            },
            {
                "speaker": "최낙삼",
                "occupation": "좋은상품연구소 소장",
                "talk_title": "CSV의 효율적 전략과 구체적 실현",
                "youtube": "https://www.youtube.com/watch?v=t0SRA5lwZ54"
            },
            {
                "speaker": "소보",
                "occupation": "싱어송라이터",
                "talk_title": "평범해서 더 특별한, 제8요일",
                "youtube": "https://www.youtube.com/watch?v=JJxQCIcbqTk"
            },
            {
                "speaker": "김병기",
                "occupation": "아이들과미래재단 경영전략실",
                "talk_title": "스포츠 교육을 매개로 한 변화 마을과 아이들",
                "youtube": "https://www.youtube.com/watch?v=wlaQRrn7ZYg"
            },
            {
                "speaker": "정신희",
                "occupation": "이화여대 여성학강사",
                "talk_title": "우리는 모두 '엄마'다",
                "youtube": "https://www.youtube.com/watch?v=1Qk9RcgT3vI"
            }
        ]
    },
    {
        "no": 14,
        "image": require("@assets/image/events/14.jpg"),
        "display": "on",
        "title": "CRUSH",
        "subtitle": "out the old idea, on the new idea",
        "talks": [
            {
                "speaker": "이정화",
                "occupation": "한국아동심리코칭센터 대표",
                "talk_title": "꼭 그래야만 하나요?",
                "youtube": "https://www.youtube.com/watch?v=B3spAFaItYE"
            },
            {
                "speaker": "이은아",
                "occupation": "나는 (It’s about me!’) 대표",
                "talk_title": "어떤 비장애형제들의 이야기",
                "youtube": "https://www.youtube.com/watch?v=X9sfFhqixSw"
            },
            {
                "speaker": "이상은",
                "occupation": "비언어커뮤니케이션 전문가",
                "talk_title": "아는 사람에게만 보이는 비밀언어, 바디랭귀지",
                "youtube": "https://www.youtube.com/watch?v=MVspV59JTpM&t=10s"
            },
            {
                "speaker": "강석진",
                "occupation": "국립 경상대 건축학과 교수",
                "talk_title": "”CRIME X DESIGN = CPTED”",
                "youtube": "https://www.youtube.com/watch?v=ENXnA8bSaDs"
            },
            {
                "speaker": "박외진",
                "occupation": "주식회사 ‘아크릴’ 대표",
                "talk_title": "감성, 공감. 그리고 인공지능",
                "youtube": "https://www.youtube.com/watch?v=cq9V7pXxr-w"
            }
        ]
    },
    {
        "no": 15,
        "image": require("@assets/image/events/15.jpg"),
        "display": "on",
        "title": "[잇다, 있다]:",
        "subtitle": "Connect the ideas, and we are alive",
        "talks": [
            {
                "speaker": "김민식",
                "occupation": "MBC PD",
                "talk_title": "잘못 탄 기차가 목적지에 데려다준다",
                "youtube": "https://www.youtube.com/watch?v=boUexJJVj_8"
            },
            {
                "speaker": "김민경",
                "occupation": "한양대학교 교수",
                "talk_title": "견고한 벽 : 더 쌓을 것인가? 뛰어넘을 것인가",
                "youtube": "https://www.youtube.com/watch?v=eG_nQzXMJKo"
            },
            {
                "speaker": "정상수",
                "occupation": "사회복지법인 금란 이사장",
                "talk_title": "너와 나. 우리가 걸을 때의 길",
                "youtube": "https://www.youtube.com/watch?v=L7nBz0PB10w"
            },
            {
                "speaker": "권태윤",
                "occupation": "한국 APOPO 대표",
                "talk_title": "안전한 내일 : 쥐를 이용한 지뢰 제거 방법",
                "youtube": "https://www.youtube.com/watch?v=QjhAlNIaQaQ"
            },
            {
                "speaker": "기우진",
                "occupation": "사회적 기업 (주)러블리페이퍼 대표",
                "talk_title": "당신의 이웃은 누구입니까?",
                "youtube": "https://www.youtube.com/watch?v=yQS2sRcWEMc"
            },
            {
                "speaker": "서현",
                "occupation": "한양대학교 교수",
                "talk_title": "집이 담은 이야기",
                "youtube": "https://www.youtube.com/watch?v=at70hMnIldk"
            }
        ]
    },
    {
        "no": 16,
        "image": require("@assets/image/events/16.jpg"),
        "display": "on",
        "title": "[발화:發話]",
        "subtitle": "비밀의 화원에 당신을 초대합니다.",
        "talks": [
            {
                "speaker": "민은정",
                "occupation": "INTERBRAND CCO",
                "talk_title": "언어는 브랜드의 집",
                "youtube": "https://www.youtube.com/watch?v=3k5ivlu00xc"
            },
            {
                "speaker": "조소현",
                "occupation": "변호사",
                "talk_title": "법, 아름다운 화원을 위한 약속",
                "youtube": "https://www.youtube.com/watch?v=syAc_lnp0to"
            },
            {
                "speaker": "김응수",
                "sub_speaker": "카메라타 솔",
                "occupation": "한양대학교 교수",
                "talk_title": "비발디 사계 中\n여름이 주는 감정의 효과",
                "youtube": "https://www.youtube.com/watch?v=t6Wh8VygPcs"
            },
            {
                "speaker": "김동현",
                "occupation": "넥슨 코리아 카트 라이브 유닛 PM",
                "talk_title": "역주행의 키워드 읽어내기,\n문화의 제 2의 전성기를 열다",
                "youtube": "https://www.youtube.com/watch?v=XpkZXroOKfw"
            },
            {
                "speaker": "최동호",
                "occupation": "한양대학교 교수",
                "talk_title": "내 이름을 걸고 연구를 한다",
                "youtube": "https://www.youtube.com/watch?v=Yu_1Np9YgXs"
            }
        ]
    },
    {
        "no": 17,
        "image": require("@assets/image/events/17.jpg"),
        "display": "on",
        "title": "Palette",
        "subtitle": "",
        "talks": [
            {
                "speaker": "현은령",
                "occupation": "한양대학교 부교수",
                "talk_title": "과학 기술 혁신 시대 다함께 누리기: 장애인을 위한 디자인"
            },
            {
                "speaker": "김두리",
                "occupation": "한양대학교 조교수",
                "talk_title": "한계를 뛰어넘다, 나노 포토그래퍼의 이야기",
                "youtube": "https://www.youtube.com/watch?v=XahNshN3gDA"
            },
            {
                "speaker": "나태흠",
                "occupation": "사회적 기업 안테나 대표",
                "talk_title": "도시 재생, 내 삶의 재생",
                "youtube": "https://www.youtube.com/watch?v=rujg_eT0o2Y"
            },
            {
                "speaker": "최세훈",
                "occupation": "한양대학교 원자력 공학도",
                "talk_title": "최적화와 소통: 일본 오염수와 ALARA",
                "youtube": "https://www.youtube.com/watch?v=qA9owg1jCtU"
            },
            {
                "speaker": "최석영",
                "occupation": "뉴미디어아트 스튜디오 감성 놀이터 대표",
                "talk_title": "새로운 도전, 심리치유VR",
                "youtube": "https://www.youtube.com/watch?v=H1MMPtdOKsc"
            },
            {
                "speaker": "박하영",
                "occupation": "에델만 코리아 부사장",
                "talk_title": "Why Brand-Audience Relationship is Key",
                "youtube": "https://www.youtube.com/watch?v=KW-dpBfQwiA"
            }
        ]
    }
]

export const AboutText_ko1 = "TED는 Technology, Entertainment, Design의 약자로 자신이 하는 일에 열정을 가진 사람들이 'Ideas Worth Spreading(공유할 가치가 있는 아이디어)'이라는 슬로건 아래에서 18분간 발표하고 이야기를 나누는 자리입니다. TEDx의 'x'는 독립적으로 조직된 TED 이벤트를 뜻하며, TED의 기본 가이드라인을 활용하여, 자발적으로 TED를 기획하고자 하는 사람들이 모여 만드는 이벤트입니다."
export const AboutText_en1 = "TED, short for Technology, Entertainment, Design, is a conference where speakers with passion for their work presents their ideas under the slogan 'Ideas Worth Spreading' for 18 minutes. The 'x' in TEDx represents the idea of an independent TED-like event organized by individuals under TED specific guidelines."
export const AboutText_ko2 = "TEDxHanyangU는 한양대학교의 교육 이념인 사랑의 실천을 바탕으로, 다양한 학문의 지식을 통해 폭넓은 교육을 받은 근면정직한 교양인으로 성장하는 데 보탬이 되는 아이디어 공유의 장을 펼치고자 노력합니다. 학문적 이론에 집중하는 교양인을 넘어서, 생각하고 배운 바를 실천에 옮기는 실천적 교양인이 되고자 하는 TEDxHanyangU는 교수학습개발센터의 지원을 받아 다양한 아이디어를 가진 학우들과 학내에 'Ideas Worth Spreading'이라는 가치를 실현하고 있습니다."
export const AboutText_en2 = "TEDxHanyangU was organized based on Hanyang University's ideals of education, Love in Action, to create a conference for sharing ideas that will help students grow into dilligent and honest beings through widening their academic persective. With support from 'The Center for Teaching & Learning', TEDxHanyangU hopes to celebrate 'Ideas Worth Spreading' and encourage fellow students to not only focus on academia but use knowledge for the good of the society."
export const AboutText_ko3 = "Facebook, Instagram, Youtube에서도 TEDxHanyangU를 만나볼 수 있습니다. TEDxHanyangU의 새로운 소식과 연사님들의 카드뉴스를 보고싶다면 아래의 Facebook과 Instagram으로, 연사님들의 강연을 다시 보고싶다면 아래의 Youtube로 방문해주세요."
export const AboutText_en3 = "You can also find TEDxHanyangU on Facebook, Instagram, and Youtube. If you want to see the news of TEDxHanyangU and speakers 'card news, please visit the following Facebook and Instagram. If you want to see the speakers' lecture again, please visit Youtube below."
        
