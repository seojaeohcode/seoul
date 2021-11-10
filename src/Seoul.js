import React, { Component } from "react";
import './Seoul.scss';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";

class Seoul extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }

    render() {
        const properties = {
            duration: 5000,
            autoplay: false,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease"
        };
        const slideImages = [
            "https://github.com/seojaeohcode/seoulpicture/blob/main/%EC%84%9C%EC%9A%B8%EC%A7%80%EB%8F%84.jpg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/seoulmetro.jpg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/%EA%B5%AD%ED%9A%8C%EC%9D%98%EC%82%AC%EB%8B%B9.jpeg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%B0%95%EB%AC%BC%EA%B4%80.jpg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/namsantower.jpg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/ddp.jpeg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/coex.jpeg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/%EA%B4%91%EC%9E%A5%EC%8B%9C%EC%9E%A5.jpg?raw=true",
            "https://github.com/seojaeohcode/seoulpicture/blob/main/%EB%85%B8%EB%9F%89%EC%A7%84%EC%88%98%EC%82%B0%EC%8B%9C%EC%9E%A5.jpg?raw=true"
        ];

        return (
            <body>
                <header>
                    <div class="title">
                        <div class="image">
                            <img src="https://github.com/seojaeohcode/icon/blob/main/free-icon-seoul-tower-4498554.png?raw=true" width="100px" height="100px" />
                        </div>
                        <div class="text text1">
                            멜라
                        </div>
                        <p class="text text2">
                            서울시소개
                        </p>
                        <div class="text text3">
                            8개도시 프로젝트(서울,인천,대전,대구,울산,부산,광주,제주)
                        </div>
                    </div>
                </header>
                <main>
                    <section>
                        <div class="imageslide">
                            <div className="slide-container">
                                <Slide ref={this.slideRef} {...properties}>
                                    {slideImages.map((each, index) => (
                                        <div key={index} className="each-slide">
                                            <img className="lazy" src={each} alt="sample" width="1920px" height="800px"/>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                                <div class="buttons back">
                                <button onClick={this.back} type="button">
                                    Go Back
                                </button>
                                </div>
                                <div class="buttons next">
                                <button onClick={this.next} type="button">
                                    Go Next
                                </button>
                                </div>
                        </div>
                    </section>
                    <section>
                        <div class="section1" align="middle">
                        <iframe width="1000" height="560" src="https://www.youtube.com/embed/viIhOorr11I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </section>
                    <section>
                        <div class="section2">
                            <div class="s2title">서울 미래유산 맛집 3</div>
                            <div class="s2textlarge">1.한일관</div><br/>
                            <div class="hanilgwan">
                            <div class="imageleft"><img src="https://github.com/seojaeohcode/seoulpicture/blob/main/%EB%A7%9B%EC%A7%912%ED%95%9C%EC%9D%BC%EA%B4%80.jpg?raw=true" height="620px"/></div>
                            <div class="positionbox">
                                위치
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25307.405433296495!2d126.99413393226487!3d37.545033557310106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38f7ba84491%3A0x21eaef496eff3aba!2z7ZWc7J286rSAIOyVleq1rOygleygkA!5e0!3m2!1sko!2skr!4v1636559950831!5m2!1sko!2skr" width="600" height="550" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div class="s2textsmall textbox">
                                한일관은 1939년 일제강점기부터 종로에서 영업을 시작하여<br/> 
                                82년의 역사를 자랑하는 음식점이다.<br/>
                                역대 대한민국 대통령들이 즐겨찾았던 곳으로도 유명하다.<br/>
                                특히 불고기와 냉면으로 유명하다.<br/> 
                                불고기는 궁중음식 너비아니처럼 양념한 생고기를 석쇠에 직화로 굽던 방식에서 전골을 화로와 결합한 서울식 불고기의 원조로 평가 받는다.<br/>
                                가운데가 솟아오른 불판으로 이루어진 그릇 주변에 육수를 붓고<br/> 
                                불판 위에 양념한 고기와 야채를 구워 먹은 뒤<br/> 
                                불고기에서 흘러나온 육즙을 머금은 육수에 냉면사리를 넣어 끓이거나<br/> 
                                양념이 늘어붙은 불판에 구워먹는 방식이다.<br/> 
                                현재도 본점에서 '불고기 1939'란 이름으로 당시 메뉴를 판매하고 있고<br/>
                                또한 놋쇠 그릇에 조리된 불고기를 담아오는 식으로<br/> 
                                21세기 혼밥에 어울리는 방법으로 서울불고기의 특색을 보여준다.<br/>
                                냉면의 특징은 편육과 함께 다진 고기를 꾸미로 올린다.<br/> 
                                비빔냉면은 너무 맵거나 시지 않고 삼삼한 간에 달콤하여 <br/>
                                단골이라면 식사를 한 뒤 냉면 한 그릇을<br/> 
                                가족과 나눠먹으며 후식처럼 먹는 사람도 많다.<br/> 
                                물냉면은 육수에 새콤한 맛이 약간 가미된 것으로,<br/>
                                새콤한 서울식 물냉면의 원조로 취급받는다.<br/> 
                                단, 다른 서울지역 물냉면에 비해 간이 심심한 편이다. <br/>
                                이유는 서울식 물냉면은 갈수록 새콤한 맛이 강해졌지만,<br/> 
                                이곳은 옛날 맛을 유지하고 있기 때문이다.
                            </div>
                            </div>
                            <div class="s2textlarge">2.우래옥</div><br/>
                            <div class="hanilgwan">
                            <div class="imageleft"><img src="https://github.com/seojaeohcode/seoulpicture/blob/main/%EB%A7%9B%EC%A7%911%EC%9A%B0%EB%9E%98%EC%98%A5.jpeg?raw=true" width="500px" height="620px"/></div>
                            <div class="positionbox">
                                위치
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.4431351830085!2d126.99653491576751!3d37.568181679797505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca31f957798f7%3A0x733d6d9929611f90!2z7Jqw656Y7Jil!5e0!3m2!1sko!2skr!4v1636563611417!5m2!1sko!2skr" width="600" height="550" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div class="s2textsmall textbox">
                                우래옥은 불고기, 갈비, 냉면 전문점으로 <br/>
                                1946년에 개업한 오래된 냉면집 중 한 곳이다.<br/>
                                우래옥(又來屋)이란 상호명은 "다시 찾아온 집"이라는 의미이다.<br/> 
                                한국식 고기 구이집 구성이며, <br/>
                                그 중에서 양념갈비구이와 불고기를 중심으로 짜여 있다. <br/>
                                단, 냉면만을 먹기 위해 오는 손님도 매우 많다. <br/>
                                대부분의 메뉴가 좋은 평을 받지만, <br/>
                                가격은 호텔이 아닌 한식당 중에서는 비싼편이다.<br/> 
                                2020년 6월 기준, 불고기가 1인분에 35,000원,<br/> 
                                갈비가 1인분 51,000원이며 냉면은 14,000원이다.<br/> 
                                냉면의 고명으로는 고기, 무, 김치가 올라가고 <br/>
                                서울시내의 다른 평양냉면집과 비교했을때 냉면의 양이 가장 많다.<br/>
                                참고로 젊은 사람들이 생각하는 일반적인 냉면 맛과는 다르다.<br/>
                                육수에 동치미 국물을 섞지 않고 고기로만 맛을 낸다.<br/> 
                                이 자극적이지 않은 맛이 원래 평양냉면 본연의 맛이라고 한다.<br/>
                                일반적으로 냉면 맛이라고 생각되는 맛에서 벗어나 <br/>
                                달지 않고 자극적인 맛이 덜하며 진한 육향에 담백하다.<br/>
                                우래옥의 평양냉면이 유명한 이유는 바로<br/> 
                                소고기만을 사용하는 깊은 육수 맛과<br/> 
                                메밀의 함량이 매우 많은 면 덕분이다.<br/> 
                                일반적으로 먹는 동치미 국물이나 꿩, 닭 육수와는 달리,<br/> 
                                우래옥 육수는 묵직하고 꾸밈 없는 느낌을 받게 된다.
                            </div>
                            </div>
                            <div class="s2textlarge">3.이문설농탕</div><br/>
                            <div class="hanilgwan">
                            <div class="imageleft"><img src="https://github.com/seojaeohcode/seoulpicture/blob/main/%EB%A7%9B%EC%A7%913%EC%9D%B4%EB%AC%B8%EC%84%A4%EB%86%8D%ED%83%95.jpeg?raw=true" width="500px" height="620px"/></div>
                            <div class="positionbox">
                                위치
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.250387015861!2d126.98169571576764!3d37.57272127979665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e8338e4637%3A0xedad10537399c4f7!2z7J2066y47ISk64aN7YOV!5e0!3m2!1sko!2skr!4v1636564970928!5m2!1sko!2skr" width="600" height="550" allowfullscreen="" loading="lazy"></iframe>                            </div>
                            <div class="s2textsmall textbox">
                                이문설농탕은 설렁탕 전문점으로 <br/>
                                대한제국 때인 1902년 서울 종로에 개업한 대한민국 최장수 식당<br/>
                                고종 시대에 개업해서 지금도 운영중인 식당. <br/>
                                2020년 기준으로 사람 나이상 119살<br/> 
                                같은 종로에 있는 해장국 전문점인 청진옥(1937년 개업)이나 <br/>
                                곰탕 전문점인 하동관보다 30년 오래된 전통적 설렁탕 전문점으로 알려졌다. <br/>
                                메뉴는 설렁탕, 도가니탕, 머리탕이다.<br/> 
                                각 탕마다 특 사이즈가 있는데 일반 탕보다 3,000원 정도 비싸다.<br/>
                                설렁탕에 들어가는 고기는 양지, 머리, 마나, <br/>
                                볼기살, 우설 등 다양하게 들어가고, <br/>
                                머리탕에는 말 그대로 머릿고기만 들어간다. <br/>
                                설렁탕과 머리탕은 흔히 생각하는 일반적인 뚝배기에 담겨 나오는데 <br/>
                                도가니탕 뚝배기는 설렁탕 뚝배기보다 약간 작다.<br/>
                                술안주 메뉴로는 수육, 도가니, 혀밑, 소 머리 고기, 마나가 있다.<br/>
                                다른 설렁탕점과는 달리 인공 조미료를 <br/>
                                사용하지 않는다는 점을 고수하고 있어서 <br/>
                                설렁탕 맛은 특이하게도 싱거우면서도 담백하다.<br/>
                                김두한은 이곳의 단골 손님이었으며, 한 때 아르바이트도 했었다고 한다.<br/>
                                그래서 '야인시대'에서도 김두한이 이곳에서 식사를 하거나 <br/>
                                부하들과 술을 마시는 장면이 종종 나온다. <br/>
                                여기선 이문식당이란 이름으로 나온다.
                            </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div class="foot">
                        Programmer:Seojaeoh Designer:Baekintae
                        <br/>
                        team mela first project 8city Thank you for looking at the site.
                        <br/>
                        literary property
                        <br/>
                        <div>아이콘 제작자 <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </footer>
            </body>
        )
    }
}

export default Seoul