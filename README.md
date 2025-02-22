# 첫 사이드 프로젝트(이름은 미정)
## ☀️ 관련 일지
[개발 일지](https://godsaeng-salgi.tistory.com/52)

## ⚒️ 기술 스택

Frontend : React

Backend : Nest.js

Infra : AWS EC2

Map : Openlayers, Naver API

## 🗺️ 계획

### MVP

- 메인 화면에 지도 띄우기(초기 화면은 서울역) 
- 위치 버튼 클릭 시, 위치 권한 허용창 띄우기
- 카페 버튼 클릭 시, 현재 화면 내의 카페 정보 리스트업 및 지도에 마커
- 영업 시작 시간, 종료 시간에 맞는 카페만 필터링

### 추가 기능

- 다른 날 선택 기능
- 영역 선택 기능(Ploygon 혹은 직접 구현)
- 카페 리스트 저장 기능(개인 소장용)
- 카페 리스트 공유 기능(커뮤니티용)
- (AI) 카페 추천 기능


## 🏃 TODO List 
### Day 1 (2025.01.28)

Frontend

- [x] 사이트 접속 시, 지도 띄우기 
- [x] 탐색 버튼 클릭 시, 현재 위치에 대한 직사각형 정보 추출
- [ ] 탐색 버튼 클릭 후, 카페 리스트업
- [ ] 탐색 버튼 클릭 후, 지도에 마커 생성

Backend

- [ ] AWS 배포
- [ ] 근처 카페 탐색하는 Naver API 연동

### Day 2 

Frontend

- [ ] 시간 설정 인풋 추가
- [ ] 시간 설정 후 탐색 버튼 클릭 시, 시간 정보 전송

Backend

- [ ] 시간 설정이 들어오면 그 조건에 맞는 카페 정보 전송

## 디렉토리 구조

```
src/
├── app/ : 앱의 진입점
├── pages/ : 페이지 단위의 구성
│   ├── HomePage/
│   │   ├── index.tsx
│   │   ├── ui/
│   │   └── model/
│   └── DetailPage/
├── widgets/ : 여러 페이지에서 재사용할 수 있는 복합 UI 요소
│   └── OpenLayersMap/
│       ├── index.ts
│       ├── style.css
│       └── model.ts
├── features/ : 기능 모음
│   ├── api/
│   └── location/
├── entities/ : 도메인 엔티티 관리
│   └── cafe/
└── shared/ : 공통 리소스
    ├── ui/
    ├── lib/
    ├── api/
    ├── constant/
    └── styles/
```