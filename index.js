// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text, enrollUrl) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';
  // image.style.borderRadius = '20px';
  
  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;
  
  const button = document.createElement('input');
  button.type = 'button';
  button.value = '🍀행운쇼핑🍀';
  
  // button.style.backgroundImage = `url(image/button.png)`;
  // button.alt = 'Door Image';
  button.style.width = '30%';
  button.style.height = '30px';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.backgroundColor = 'pink';
  button.style.borderRadius = '20px';
  // button.style.border = 'none';
  button.style.marginTop = '10px';

  
  // 버튼 클릭 시 새 창 열기
  button.addEventListener('click', () => {
      window.open(enrollUrl, '_blank');
  });

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);
  modalContent.appendChild(button)

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);



  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message":  "✨ 행운: 12월의 시작과 함께 한 해를 정리할 좋은 기운이 가득!❓질문 : Don't worry, be Belly! 를 외쳐볼까요?", "enrollUrl": "https://forms.office.com/r/CrR9tJm3Hy" },
  { "number": 2, "message":  "✨ 행운: 당신의 열정 passion 이 롯데홈쇼핑의 미래를 만듭니다!❓질문 : 오늘의 패션 fashion 을 알려주세요 ٩(ˊᗜˋ*)و", "enrollUrl": "https://forms.office.com/r/6gEjYrEW7E" },
  { "number": 3, "message":  "✨ 행운: 오늘 하루도 화이팅! 어제보다 오늘 더 좋은 일만 가득할 거예요!(◍•ᴗ•◍)✧ ❓질문: 오늘은 나 or 동료에게 칭찬 한마디 어떨까요? BellyGood!", "enrollUrl": "https://forms.office.com/r/KjtYp0vHf5" },
  { "number": 4, "message":  "✨ 행운: 예상치 못한 행운이 찾아올 것 같은 날이에요! ❓질문 : 오늘 점심 메뉴를 추천해주세요! 맛있는 걸 먹으면 오후도 활기차답니다!(๑•̀ㅂ•́)و✧", "enrollUrl": "https://forms.office.com/r/ASqvBbq5dz" },
  { "number": 5, "message":  "✨ 행운: 여러분의 미소가 롯데홈쇼핑을 더 빛나게 해요 ⭐❓ 질문: 회사 생활에 활력을 주는 나만의 비결이 있다면? (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "enrollUrl": "https://forms.office.com/r/gtFAi3hJEY" },
  { "number": 6, "message":  "✨ 행운: 아싸 금요일! ⸜(♡'ᗜ'♡)⸝ 긍정적인 에너지가 가득한 하루가 될 거예요!❓ 질문: 즐거운 주말을 보내기 위해서 무엇을 하면 좋을까요? 다들 즐주!💚", "enrollUrl": "https://forms.office.com/r/kGsXTrHaeu" },
  { "number": 7, "message":  "✨ 행운: 여유로운 주말, 특별한 추억이 만들어질 거예요!❓ 질문:  새로 배우고 싶은게 있다면? (•͈⌔•͈⑅)", "enrollUrl": "https://forms.office.com/r/m0F80pg36v" },
  { "number": 8, "message":  "✨ 행운: 편안한 일요일, 새로운 한 주를 위한 에너지가 채워질 거예요! ᖭི(ˊᗜˋ*)ᖫྀ❓ 질문: 주말에 보고 싶은 영화나 드라마는?", "enrollUrl": "https://forms.office.com/r/VtYFPUN7Ht" },
  { "number": 9, "message":  "✨ 행운: 활기찬 월요일! 신나는 리듬처럼 즐거운 일만 가득! 오늘은 BGM을 바꿔봤어요 다같이 감상해요!❓질문: 출근길에 무엇을 들으면서 오셨나요?  ♪(๑ᴖ◡ᴖ๑)♪", "enrollUrl": "https://forms.office.com/r/1TFvEA7Pwe" },
  { "number": 10, "message": "✨ 행운: 현명한 소비로 두 배의 행복이 찾아올 거예요! (✿˵•́ᴗ•̀˵) ❓ 질문: 올해 가장 잘 한 내돈내산 소비가 있다면?💰", "enrollUrl": "https://forms.office.com/r/nHnA1FxqxG" },
  { "number": 11, "message": "✨ 행운: 오늘은 업무가 술술 풀리는 날이에요! 🧻🤓 ❓ 질문: 나만의 버킷리스트가 있다면? ٩(๑❛ᴗ❛๑)۶", "enrollUrl": "https://forms.office.com/r/bEdb3MrCGH" },
  { "number": 12, "message": "✨ 행운: 벨리가 추천하는 오늘의 운세 - 초특급 대박날 것 같은 날! (≡^∇^≡)❓질문:  세계 어디든 어디론가 자유롭게 떠날 수 있다면?!🌏", "enrollUrl": "https://forms.office.com/r/Z3CkdUrDJD" },
  { "number": 13, "message": "✨ 행운: 오늘은 모든 걱정이 사라지는 마법의 날이에요!🧙❓질문:  스트레스를 날려버리는 나만의 방법은?♡ ٩(´▽`)۶ ♡", "enrollUrl": "https://forms.office.com/r/dACBaHQbku" },
  { "number": 14, "message": "✨ 행운: 벨리가 추천하는 오늘의 운세: 초특급 대박날 것 같은 날! ❓ 질문: 벨리의 초특급 럭키 파워가 여러분께 슝✨ 전해지길 바라요! 오늘도 대박 터지는 하루 보내세요! (◍•ᴗ•◍)✧", "enrollUrl": "https://forms.office.com/r/hHUHYGe1MM" },
  { "number": 15, "message": "✨ 행운: 연말이 다가오네요! 올해도 수고 많으셨어요❤️ 벨리's 팁: 잠깐의 스트레칭으로 상쾌한 하루를!🙆 ❓ 질문: 나만의 건강관리 비법은?!💪 ", "enrollUrl": "https://forms.office.com/r/uhncqA8Ks3" },
  { "number": 16, "message": "✨ 행운: 오늘은 당신이 주인공인 영화 같은 하루! 🎬 ❓ 질문: 내 인생 최고의 장면은 언제였나요? 📺 ", "enrollUrl": "https://forms.office.com/r/uXkBVmk7Gb" },
  { "number": 17, "message": "✨ 행운: 당신의 엉뚱한 상상이 멋진 아이디어가 될 거예요!💡❓ 질문:  최근 떠오른 재미있는 생각은? 🤔💭 ", "enrollUrl": "https://forms.office.com/r/U8VrPDQAEv" },
  { "number": 18, "message": "✨ 행운: 오늘은 행운의 여신이 당신을 집중 케어하는 날!🍀 ❓ 질문: 올해 행운처럼 나에게 다가온 깨달음or배운 점이 있다면? ", "enrollUrl": "https://forms.office.com/r/NB4emV8gph" },
  { "number": 19, "message": "✨ 행운: 당신의 매력이 200% 발산되는 날! 💫당신의 노력이 아름답게 빛날 거예요!🌟 ❓ 질문: 올해 가장 뿌듯했던 순간은? 😊 ", "enrollUrl": "https://forms.office.com/r/DgTHABzV28" },
  { "number": 20, "message": "✨ 행운: 행복한 우연이 도미노처럼 연이어 찾아올 거예요! 🚪🚪🚪 ❓ 질문:  세 개의 문 뒤에 각각 어떤 행운이 숨어있길 바라시나요? 🚪 첫 번째 문: 🚪 두 번째 문: 🚪 세 번째 문:", "enrollUrl": "https://forms.office.com/r/D6Vd6DE2jt" },
  { "number": 21, "message": "✨ 행운: 연말 분위기와 함께 행복한 기운이 가득!🎀 올해 남은 목표도 파이팅! 벨리가 응원할게요! ❓ 질문: 올해 가장 감사했던 동료는 누구인가요?🤝", "enrollUrl": "https://forms.office.com/r/5mMhkDLZUt" },
  { "number": 22, "message": "✨ 행운: 한 해의 마무리가 풍성해지는 날! 당신은 충분히 잘해냈어요👏 ❓ 질문: 다가오는 2025년에 이루고 싶은 목표 딱 3가지는 무엇인가요?🎯 ", "enrollUrl": "https://forms.office.com/r/SXfLtjhsXw" },
  { "number": 23, "message": "✨ 행운: 크리스마스가 다가오네요! 설레는 마음 가득하세요! 당신의 소원을 들어줄 산타가 오고 있어요! 🎅 ❓ 질문:  산타에게 몰래 부탁하고 싶은 소원은? 🎁 ", "enrollUrl": "https://forms.office.com/r/jX7H79KQYK" },
  { "number": 24, "message": "✨ 행운: 메리 크리스마스! 따뜻한 연말 보내세요🎄특별한 기적이 일어날 거예요! ❓ 질문: 새해에도 함께해요! Don't worry, be Belly! 🎊", "enrollUrl": "https://forms.office.com/r/UTYSfMhB1d" }
];




// TODO: 
//  1. 링크 24개 만들기 (폼즈)
//  2. 위의 modalMessageList 에서 enrollUrl 값 변경하기 (1번에서 나온 값으로)
//  3. 응모하기 버튼 CSS 수정 (28L 이후에 button 에 대해서 CSS 추가, 19~22L 참고)
//  4. GPT 한테 눌렀을 때 URL 로 옮겨가는게 아니라 폴더명까지 붙는 부분 수정 요청해서 반영하기.

// const modalMessageList = [
//   { "number": 1, "message": "행복의 계절, 모두가 함께하는 24일!" },
//   { "number": 2, "message": "이 12월, 행복한 순간이 우리를 감싸네요." },
//   { "number": 3, "message": "다 같이 즐겁게 보내는 24일, 행복이 가득합니다!" },
//   { "number": 4, "message": "12월의 특별함을 모두와 함께 나누어요." },
//   { "number": 5, "message": "각자의 작은 행복이 모여 만드는 특별한 24일!" },
//   { "number": 6, "message": "행복이라는 이름의 캘린더, 모두에게 열려 있어요." },
//   { "number": 7, "message": "함께 하는 즐거움, 24일 동안 계속되길 바랍니다." },
//   { "number": 8, "message": "12월은 행복한 순간들이 가득한 달이에요." },
//   { "number": 9, "message": "우리 모두에게 찾아온 특별한 행복의 계절!" },
//   { "number": 10, "message": "매일 매일이 행복으로 가득찬 24일이 되길." },
//   { "number": 11, "message": "12월, 행복이 가득한 당신과 나누는 소중한 시간." },
//   { "number": 12, "message": "다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요." },
//   { "number": 13, "message": "행복의 파도가 모두에게 찾아오는 특별한 24일!" },
//   { "number": 14, "message": "12월, 각자의 작은 행복이 모여 큰 기쁨이 되길." },
//   { "number": 15, "message": "모두에게 행복이 넘치는 24일을 기대해봐요." },
//   { "number": 16, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
//   { "number": 17, "message": "모두에게 행복한 24일이 될 것을 기대합니다!" },
//   { "number": 18, "message": "12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
//   { "number": 19, "message": "다양한 행복이 모여 하나로 뭉쳐지는 24일!" },
//   { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
//   { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
//   { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
//   { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
//   { "number": 24, "message": "12월, 모두에게 기쁨과 행복이 넘치는 달이에요." }
// ];
