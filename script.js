const CARD_DETAILS = {
  transit: {
    icon: "🚌",
    title: "무료 대중교통",
    detail: "UCSD ID 카드만 있으면 San Diego MTS 버스와 트롤리(Blue Line, Green Line 등)를 무료로 탑승할 수 있습니다. 캠퍼스 내에서는 The Triton 셔틀도 함께 운행되어 강의동, 기숙사, 주차장을 편리하게 오갈 수 있고, 라호이아·다운타운 등 캠퍼스 밖 이동에도 대중교통비를 거의 들이지 않아도 됩니다."
  },
  software: {
    icon: "💻",
    title: "소프트웨어 라이선스",
    detail: "재학생은 UCSD ITS를 통해 Microsoft 365(Office, OneDrive 포함)를 무료로 내려받을 수 있고, Adobe Creative Cloud도 학생 할인가로 구독할 수 있습니다. 이 외에도 MATLAB, GitHub Student Developer Pack, Zoom Pro 등 학업에 필요한 다양한 소프트웨어와 클라우드 서비스를 무료 또는 대폭 할인된 가격으로 이용할 수 있습니다."
  },
  health: {
    icon: "🏥",
    title: "학생 건강 보험 및 진료",
    detail: "UC SHIP(학생 건강보험)에 가입한 학생은 Student Health Services에서 일반 진료, 정신건강 상담, 예방접종, 처방약 등을 저렴한 비용 또는 무료로 이용할 수 있습니다. CAPS(Counseling and Psychological Services)를 통한 무료 심리 상담도 제공되며, 캠퍼스 내 약국과 검사실도 함께 운영되어 병원을 따로 찾을 필요가 줄어듭니다."
  },
  discounts: {
    icon: "🎟️",
    title: "문화 · 여가 할인",
    detail: "학생증을 제시하면 Birch Aquarium, 여러 박물관과 미술관, AMC 등 극장 체인에서 할인 요금을 받을 수 있습니다. 또한 학교 내 Triton Outfitters나 학생회 프로그램을 통해 디즈니랜드, 유니버설 스튜디오 같은 테마파크 티켓도 정가보다 저렴하게 구매할 수 있습니다."
  },
  library: {
    icon: "📚",
    title: "도서관 및 학습 자료",
    detail: "Geisel Library를 비롯해 Biomedical Library 등 여러 도서관에서 수백만 권의 도서와 저널, 데이터베이스를 무료로 이용할 수 있습니다. 24시간 개방되는 스터디룸과 그룹 스터디 공간, 노트북·계산기 대여 서비스도 제공되어 시험 기간에도 편하게 공부할 곳을 찾을 수 있습니다."
  },
  tutoring: {
    icon: "🧑‍🏫",
    title: "튜터링 · 커리어 서비스",
    detail: "Teaching + Learning Commons에서 대부분의 전공 과목에 대한 무료 튜터링과 워크숍을 제공하며, Writing Hub에서는 에세이나 리포트에 대한 첨삭을 받을 수 있습니다. Career Center에서는 이력서 첨삭, 모의 면접, 인턴십·채용 박람회 연결까지 취업 준비 전 과정을 무료로 지원합니다."
  },
  gym: {
    icon: "🏋️",
    title: "RIMAC / Canyonview 체육관",
    detail: "RIMAC Arena와 Canyonview Aquatic & Recreation Center에는 최신 웨이트·유산소 기구, 실내 수영장, 암벽등반 시설, 실내 트랙이 마련되어 있습니다. 요가, 필라테스, 스피닝 같은 그룹 운동 클래스가 학기 내내 무료로 제공되며, 개인 락커와 수건 대여 서비스도 이용할 수 있습니다."
  },
  dining: {
    icon: "🍽️",
    title: "다이닝 홀 & 카페",
    detail: "각 칼리지(College)마다 고유한 다이닝 홀이 있어 다양한 메뉴를 즐길 수 있고, Price Center와 Library Walk 주변에는 카페와 푸드코트가 밀집해 있습니다. 학생 식비 플랜(Meal Plan)을 이용하면 여러 다이닝 장소에서 자유롭게 식사할 수 있고, 채식·비건·글루텐프리 옵션도 폭넓게 갖춰져 있습니다."
  },
  research: {
    icon: "🔬",
    title: "연구 시설 및 실험실",
    detail: "UCSD는 Scripps Institution of Oceanography, Qualcomm Institute 등 세계적 수준의 연구 시설을 보유하고 있으며, 학부생도 URS(Undergraduate Research Scholars)나 개별 교수 연구실 참여를 통해 첨단 장비를 활용한 실전 연구 경험을 쌓을 수 있습니다. 관심 분야 교수에게 이메일로 직접 연락해 연구실에 합류하는 경우도 흔합니다."
  },
  beach: {
    icon: "🌊",
    title: "Scripps 해변 & 아웃도어 시설",
    detail: "캠퍼스 바로 옆 Scripps Beach와 La Jolla Shores에서는 서핑, 스노클링, 일몰 감상을 즐길 수 있습니다. Outback Adventures에서는 카약, 서핑보드, 캠핑 장비를 학생 할인가로 대여할 수 있고, 정기적으로 하이킹이나 카약 투어 같은 아웃도어 프로그램도 운영됩니다."
  },
  arts: {
    icon: "🎭",
    title: "공연 · 예술 공간",
    detail: "Price Center와 The Loft, Mandeville Auditorium에서는 학생 밴드 공연, 코미디 쇼, 영화 상영, 초청 아티스트 공연이 열립니다. 대부분의 학생 주최 행사는 무료이거나 매우 저렴한 입장료로 즐길 수 있으며, Visual Arts 갤러리에서는 학생과 교수진의 작품 전시도 감상할 수 있습니다."
  },
  parking: {
    icon: "🅿️",
    title: "주차 및 셔틀",
    detail: "학생 주차 퍼밋을 구매하면 지정된 캠퍼스 주차 구역을 이용할 수 있고, The Triton 셔틀은 주요 기숙사·강의동·주차장 노선을 짧은 간격으로 운행해 넓은 캠퍼스 이동 부담을 줄여줍니다. 자전거나 스쿠터 이용자를 위한 무료 거치대와 수리 스테이션도 캠퍼스 곳곳에 마련되어 있습니다."
  }
};

const modal = document.getElementById("detail-modal");
const modalIcon = modal.querySelector(".modal-icon");
const modalTitle = modal.querySelector(".modal-title");
const modalDetail = modal.querySelector(".modal-detail");
const modalClose = modal.querySelector(".modal-close");

function openModal(id) {
  const data = CARD_DETAILS[id];
  if (!data) return;
  modalIcon.textContent = data.icon;
  modalTitle.textContent = data.title;
  modalDetail.textContent = data.detail;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".card[data-id]").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card.dataset.id);
    }
  });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
