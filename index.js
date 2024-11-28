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

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  const button = document.createElement('input');
  button.type = 'button';
  button.value = '응모하기';

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
  { "number": 1, "message":  "Don't worry, be Belly! 오늘도 힘찬 하루의 시작이에요!", "enrollUrl": "www.naver.com?1" },
  { "number": 2, "message":  "오늘 점심 메뉴는 뭘로 하실 건가요? 맛있는 걸 먹으면 오후도 활기차답니다!", "enrollUrl": "www.naver.com?1" },
  { "number": 3, "message":  "여러분의 미소가 롯데홈쇼핑을 더 빛나게 해요⭐", "enrollUrl": "www.naver.com?1" },
  { "number": 4, "message":  "오늘은 '파이팅 한 잔' 하는 날! 따뜻한 음료 한 잔 어떠세요?", "enrollUrl": "www.naver.com?1" },
  { "number": 5, "message":  "벨리가 응원해요! 오늘도 멋진 하루 보내세요!", "enrollUrl": "www.naver.com?1" },
  { "number": 6, "message":  "우리 함께 만드는 변화, 당신이 바로 주인공이에요!", "enrollUrl": "www.naver.com?1" },
  { "number": 7, "message":  "오늘 하루도 수고 많으셨어요. 내일은 더 좋은 일만 가득할 거예요!", "enrollUrl": "www.naver.com?1" },
  { "number": 8, "message":  "우리 회사 최고의 장점은 바로 당신! 자부심을 가지세요💪", "enrollUrl": "www.naver.com?1" },
  { "number": 9, "message":  "오늘은 동료에게 칭찬 한마디 어떨까요? BellyGood!", "enrollUrl": "www.naver.com?1" },
  { "number": 10, "message": "벨리의 특별 행운의 기운을 드립니다! 럭키데이에요!", "enrollUrl": "www.naver.com?1" },
  { "number": 11, "message": "힘들 때는 '더나은'과 함께! 우리는 한 팀이니까요!", "enrollUrl": "www.naver.com?1" },
  { "number": 12, "message": "오늘은 런치버디와 함께하는 즐거운 점심 어떠세요?", "enrollUrl": "www.naver.com?1" },
  { "number": 13, "message": "당신의 아이디어가 새로운 가치를 만들어요!", "enrollUrl": "www.naver.com?1" },
  { "number": 14, "message": "벨리가 추천하는 오늘의 운세: 초특급 대박날 것 같은 날!", "enrollUrl": "www.naver.com?1" },
  { "number": 15, "message": "연말이 다가오네요! 올해도 수고 많으셨어요❤️", "enrollUrl": "www.naver.com?1" },
  { "number": 16, "message": "우리 회사 동호회 한번 참여해보세요! 새로운 인연이 기다려요!", "enrollUrl": "www.naver.com?1" },
  { "number": 17, "message": "오늘은 함께라서 더 행복한 하루에요", "enrollUrl": "www.naver.com?1" },
  { "number": 18, "message": "당신의 열정이 롯데홈쇼핑의 미래를 만듭니다!", "enrollUrl": "www.naver.com?1" },
  { "number": 19, "message": "벨리's 팁: 잠깐의 스트레칭으로 상쾌한 하루를!", "enrollUrl": "www.naver.com?1" },
  { "number": 20, "message": "당신이 있어 롯데홈쇼핑이 더 따뜻해져요", "enrollUrl": "www.naver.com?1" },
  { "number": 21, "message": "올해 남은 목표도 파이팅! 벨리가 응원할게요!", "enrollUrl": "www.naver.com?1" },
  { "number": 22, "message": "크리스마스가 다가오네요! 설레는 마음 가득하세요🎅", "enrollUrl": "www.naver.com?1" },
  { "number": 23, "message": "한 해의 마무리, 당신은 충분히 잘해냈어요!", "enrollUrl": "www.naver.com?1" },
  { "number": 24, "message": "메리 크리스마스! 따뜻한 연말 보내세요🎄", "enrollUrl": "www.naver.com?1" }
];



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
