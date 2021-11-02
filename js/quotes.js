const quotes = [
  {
    quote: "게으른 예술가가 만든 명작은 없다.",
    author: "-미상-",
  },
  {
    quote: "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
    author: "-알버트 아인슈타인-",
  },
  {
    quote: "혁신이 지도자와 추종자를 가른다. ",
    author: "-스티브 잡스-",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    author: "-토마스 제퍼슨-",
  },
  {
    quote: "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "-로버트 콜리어-",
  },
  {
    quote: "모든 진보는 익숙한 영역이 아닌 곳에서 이뤄진다.",
    author: "-마이클 존 보박-",
  },
  {
    quote: "우리는 우리가 늘 생각하는 것이 된다. 그것이 가장 묘한 비밀이다.",
    author: "-얼 나이팅게일-",
  },
  {
    quote: "성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
    author: "-콜린 R. 데이비스-",
  },
  {
    quote: "과정에서 재미를 느끼지 못하는데 성공하는 일은 거의 없다.",
    author: "-데일 카네기-",
  },
  {
    quote: "노력한 날이 노력하지 않은 날보다 많도록",
    author: "-윤종호-",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
