<template>
    <div class="organizer-board">
        <Selects />
        <Profile
            v-for="organizer in organizerList"
            :key="organizer.id"
            :organizer="organizer"
        />
    </div>
</template>

<script>
import Profile from "@components/Organizers/Profile"
import Selects from "@components/Organizers/Selects"

export default {
    name: "OrganizerBoard",
    data(){
        return{
            organizerList: [
                {
                    id: "1",
                    team: "디렉터",
                    name: "김윤우",
                    img:  "https://t1.daumcdn.net/liveboard/kncom/10889702ee3246e990f427f5e4c5bc79.JPG",
                    comment: "드디어 해냈다만어람농라ㅗ만ㅇ뢈노ㅓㅇㄹ뫙럼닝로ㅓㅣ농림노얼",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "2",
                    team: "연사섭외팀",
                    name: "김태훈",
                    img:  "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F0313AE4251CE463C26",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "3",
                    team: "연사섭외팀",
                    name: "유아형 ",
                    img: "https://t1.daumcdn.net/liveboard/kncom/10889702ee3246e990f427f5e4c5bc79.JPG",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "4",
                    team: "연사섭외팀",
                    name: "이예운",
                    img:  "https://image.chosun.com/sitedata/image/201809/15/2018091501155_0.jpg",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "5",
                    team: "연사섭외팀",
                    name: "윤채원",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrkyjilptT9HlxB7U7aDmYFUChVq-uB71LLw&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "6",
                    team: "연사섭외팀",
                    name: "임예진",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnrAvW4WYlXZ2RmmCdVPCdgO7G_Ow8mkqJhw&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "7",
                    team: "연사섭외팀",
                    name: "최지승",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQQ5xdJgXm8DXfd2foyyfvRZqh209Tez-sJg&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "8",
                    team: "행사기획팀",
                    name: "박진석",
                    img:  "https://file3.instiz.net/data/file3/2018/02/03/e/c/d/ecd1be6a794eb9683d8cde7baa7f6d22.jpg",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "9",
                    team: "행사기획팀",
                    name: "김연성",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "10",
                    team: "행사기획팀",
                    name: "김빈",
                    img: "https://lh3.googleusercontent.com/proxy/ntO4nd7d_xczOIYhHoRflCUgNRG3PY-GCWgH2xFLtlmflJ4_qoAet5uDrb9M0xLKPudaN1Yi25qRFRczxJnbF8LBFaw23t2h2R4IFHMjga274p-T99-fdZ0ZpvQLqGElL5bkS1F_Wao7yPjeROFXhOqxyNzzc5TZfra5XGypTPsXMUoSHRRnCX7wDSLnREWVcRIRnN1aD6M6QhF3XfE6uRKykEPb1oAUXJk5a5aKamd--uSaRl--1iDY-fS9uH7CfDZTUGxX0JXUSFIbnSQss7-feyiPrvQbCSVb3A",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "11",
                    team: "행사기획팀",
                    name: "박주현",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "12",
                    team: "행사기획팀",
                    name: "김은영",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "13",
                    team: "행사기획팀",
                    name: "이현정",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "14",
                    team: "대외협력팀",
                    name: "정다윤",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "15",
                    team: "대외협력팀",
                    name: "임나미",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "16",
                    team: "대외협력팀",
                    name: "배혜원",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "17",
                    team: "대외협력팀",
                    name: "문우리",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "18",
                    team: "대외협력팀",
                    name: "김태훈",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "19",
                    team: "홍보팀",
                    name: "정인영",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "20",
                    team: "홍보팀",
                    name: "조수진",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "21",
                    team: "홍보팀",
                    name: "김태완",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "22",
                    team: "홍보팀",
                    name: "유호준",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "23",
                    team: "홍보팀",
                    name: "이예린",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "24",
                    team: "디자인팀",
                    name: "서채연",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "25",
                    team: "디자인팀",
                    name: "손현영",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "26",
                    team: "디자인팀",
                    name: "이성준",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "27",
                    team: "디자인팀",
                    name: "박소은",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "28",
                    team: "디자인팀",
                    name: "서영준",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "29",
                    team: "기술팀",
                    name: "백재현",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                },
                {
                    id: "30",
                    team: "기술팀",
                    name: "김승희",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "",
                    snsList: [
                        {
                            snsurl: "https://www.facebook.com/TEDxHanyangU/",
                            snstype:"FaceBook",
                            snsimg:require("@assets/image/iconFacebook.png")
                        },
                        {
                            snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                            snstype:"Youtube",
                            snsimg: require("@assets/image/iconYoutube.png")
                        },
                        {
                            snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                            snstype:"Instagram",
                            snsimg:require("@assets/image/iconInstagram.png")
                        }
                    ]
                }
                
            ]
        }

    },
    components: {
        Profile: Profile,
        Selects: Selects
    }
}
</script>

<style scoped>
.organizer-board {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    margin-left: 350px;
    position: relative;
    box-sizing: border-box;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    justify-content: space-between;
    align-content: stretch;
    -webkit-box-align: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    }
@media (max-width: 800px){
    .frame{
        margin-left: auto;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>