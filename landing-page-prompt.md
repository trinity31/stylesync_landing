# StyleSync AI 랜딩페이지 제작 프롬프트

## 프로젝트 개요
**StyleSync AI**의 웹 랜딩페이지를 제작해주세요. 이 앱은 AI가 사용자의 옷을 자동으로 분류하고 날씨와 상황에 맞는 코디를 추천하는 개인 패션 비서 앱입니다.

## 기술 스택 (선택)
- **프레임워크**: Next.js 14 (App Router) / React / HTML/CSS/JS
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **배포**: Vercel

## 페이지 구조 및 섹션

### 1. Hero Section (메인 히어로)
- **헤드라인**: "AI가 매일 아침, 당신의 스타일을 완성합니다"
- **서브헤드라인**: "옷장의 옷을 AI가 자동 분류하고, 날씨에 맞는 완벽한 코디를 추천받으세요"
- **CTA 버튼**:
  - "App Store에서 다운로드" (iOS 아이콘)
  - "Google Play에서 받기" (Android 아이콘)
- **비주얼**:
  - 스마트폰 목업에 앱 메인 화면 표시
  - 그라디언트 배경 (화이트 → 파스텔 블루)
  - 떠다니는 옷 아이콘 애니메이션 (floating effect)

### 2. Problem Statement (문제 제기)
- **제목**: "매일 아침 고민되는 코디 선택"
- **고민 포인트** (3개 카드):
  - 😫 "오늘 날씨에 뭘 입지?"
  - 🤔 "옷장에 옷은 많은데 입을 게 없어"
  - ⏰ "아침마다 코디 고르느라 시간 낭비"

### 3. Solution (솔루션 제시)
- **제목**: "StyleSync AI가 해결합니다"
- **핵심 가치 제안** (3가지):
  - 📸 **Magic Closet**: 사진만 찍으면 AI가 자동으로 카테고리, 색상, 스타일 분석
  - 🌤️ **Smart Recommendation**: 실시간 날씨 + 내 옷장 데이터로 매일 맞춤 코디 제안
  - ⭐ **Save & Reuse**: 마음에 드는 코디는 저장해서 언제든 다시 활용

### 4. How It Works (작동 방식)
- **제목**: "3단계로 완성되는 나만의 스타일"
- **스텝별 설명** (인터랙티브 타임라인):
  1. **옷 등록**: 가지고 있는 옷을 사진으로 촬영 → AI가 자동 분류
  2. **AI 분석**: Gemini AI가 색상, 패턴, 스타일을 학습
  3. **코디 추천**: 날씨와 상황에 맞는 2~3가지 코디 즉시 제안

### 5. Features Showcase (주요 기능)
**그리드 레이아웃 (2x2 또는 3컬럼)**

| 기능 | 설명 | 아이콘 |
|------|------|--------|
| 👕 My Closet | 내 옷장을 디지털로 관리 | 옷장 아이콘 |
| 💡 Today's Pick | 오늘의 날씨 맞춤 코디 | 전구 아이콘 |
| 🔔 Daily Reminder | 매일 아침 코디 알림 | 알람 아이콘 |
| 🎨 Smart Tagging | 자동 색상/패턴 인식 | 팔레트 아이콘 |

### 6. Tech Stack (기술력 강조)
- **제목**: "최첨단 AI 기술로 구동됩니다"
- **기술 스택 뱃지**:
  - Gemini 1.5 Flash/Pro (이미지 인식)
  - Supabase (실시간 데이터베이스)
  - OpenWeatherMap (날씨 API)
  - Flutter (크로스 플랫폼)

### 7. Screenshots/App Preview (앱 미리보기)
- **인터랙티브 캐러셀 또는 그리드**
- 주요 화면 3~4개:
  - 옷장 관리 화면
  - AI 코디 추천 화면
  - 코디 상세 화면
  - 즐겨찾기 화면

### 8. Testimonials (미래 섹션, 선택사항)
- 베타 테스터 후기 (실제 데이터가 있을 경우)
- 또는 예상 사용자 시나리오

### 9. Pricing/Roadmap (로드맵 미리보기)
- **현재**: 무료 베타 버전
- **v2 예정 기능**:
  - AR 가상 피팅
  - 소셜 스타일 피드
  - 프리미엄 구독 모델

### 10. Final CTA (최종 전환 유도)
- **제목**: "지금 바로 시작하세요"
- **서브텍스트**: "StyleSync AI와 함께 스마트한 아침을 경험하세요"
- **다운로드 버튼** (큼지막하게)
- **푸터**:
  - 이메일 문의
  - 개인정보처리방침
  - 서비스 이용약관
  - GitHub 링크 (선택)

## 디자인 가이드라인

### 컬러 팔레트
```css
--primary-white: #FFFFFF
--secondary-gray: #F5F5F7
--mid-gray: #86868B
--accent-blue: #A7D8F0
--text-dark: #1D1D1F
--gradient-bg: linear-gradient(135deg, #FFFFFF 0%, #E8F4F8 100%)
```

### 타이포그래피
- **헤드라인**: Pretendard Bold / 48-64px
- **서브헤드**: Pretendard Medium / 20-24px
- **본문**: Pretendard Regular / 16-18px

### 디자인 스타일
- **미니멀리즘**: 깔끔하고 여백이 넉넉한 레이아웃
- **카드형 UI**: 섹션마다 subtle shadow와 rounded corners
- **마이크로 인터랙션**: 호버 시 부드러운 애니메이션
- **모던 그라디언트**: 부드러운 색상 전환

## 애니메이션 및 인터랙션

### Scroll Animations
- Fade in on scroll (섹션별)
- Parallax effect (히어로 섹션)
- Stagger animation (기능 카드)

### Hover Effects
- 버튼: scale(1.05) + shadow 증가
- 카드: translateY(-5px) + shadow 확대
- 이미지: subtle zoom-in

### 로딩 애니메이션
- Skeleton loading (이미지)
- Smooth transitions between sections

## 반응형 디자인
- **Desktop**: 1440px 기준 최적화
- **Tablet**: 768px - 1024px (2컬럼 레이아웃)
- **Mobile**: 320px - 767px (1컬럼 스택)

## SEO 최적화
- **Meta Title**: "StyleSync AI - AI 패션 코디 추천 앱"
- **Meta Description**: "AI가 당신의 옷장을 분석하고 날씨에 맞는 완벽한 코디를 추천합니다. iOS/Android 무료 다운로드"
- **OG Image**: 앱 메인 화면 썸네일
- **Keywords**: AI 코디 추천, 패션 앱, 스마트 옷장, 날씨 코디

## 추가 요구사항
1. **성능 최적화**: Lighthouse 스코어 90+ 목표
2. **접근성**: WCAG 2.1 AA 준수
3. **다국어 지원**: 한국어/영어 (선택사항)
4. **Analytics**: Google Analytics 4 연동

---