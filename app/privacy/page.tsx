import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-8">개인정보처리방침</h1>
        <div className="prose prose-lg text-mid-gray max-w-none">
          <p className="mb-4">
            StyleSync AI(이하 '회사')는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다.
          </p>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">1. 개인정보의 수집 항목 및 수집 방법</h3>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">수집 항목</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>이메일 주소 (로그인 ID로 사용)</li>
            <li>디바이스 정보 (OS, 앱 버전)</li>
            <li>서비스 이용 기록 (앱 내 활동 로그)</li>
            <li>푸시알림 토큰</li>
            <li>Apple ID와 연결된 사용자 식별자</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">수집 방법</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우 (이메일, 닉네임, 프로필 등)</li>
            <li>서비스 이용 과정에서 자동으로 생성되어 수집되는 경우 (디바이스 정보, 서비스 이용 기록, 옷/코디 사진/텍스트/분석 결과 등)</li>
            <li>고객센터를 통한 상담 과정에서 웹페이지, 메일 등을 통해 수집하는 경우</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">2. 개인정보의 수집 및 이용목적</h3>
          <p className="mb-4">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다:</p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">서비스 제공에 관한 목적</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>회원 식별 및 가입의사 확인</li>
            <li>회원제 서비스 제공 (옷장/코디 기록, AI 분석 결과 제공, 통계 등)</li>
            <li>AI 기반 스타일 분석 및 추천 서비스 제공</li>
            <li>옷장 기록 및 관리 기능 제공</li>
            <li>스타일 추천</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">회원 관리</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>회원제 서비스 이용에 따른 본인확인</li>
            <li>개인 식별</li>
            <li>가입 의사 확인</li>
            <li>불만처리 등 민원처리</li>
            <li>고지사항 전달</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">신규 서비스 개발 및 마케팅·광고에의 활용</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>신규 서비스 개발 및 맞춤 서비스 제공 (예: 스타일 분석 기반 개인화 리포트)</li>
            <li>통계학적 특성에 따른 서비스 제공 및 광고 게재 (개인 식별 불가 형태)</li>
            <li>서비스의 유효성 확인</li>
            <li>이벤트 및 광고성 정보 제공 및 참여기회 제공 (수신 동의 시)</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">3. 개인정보의 보유 및 이용기간</h3>
          <p className="mb-4">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">회사 내부 방침에 의한 정보보유 사유</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>부정이용기록</strong><br />
              보존 이유: 부정 이용 방지<br />
              보존 기간: 1년
            </li>
            <li>
              <strong>옷장/코디 기록 데이터 (사진, 텍스트, 분석 결과 등)</strong><br />
              보존 이유: 서비스 제공 및 이용자 요청 시 복구 지원<br />
              보존 기간: 회원 탈퇴 시까지
            </li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">관련법령에 의한 정보보유 사유</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>웹사이트/앱 방문기록</strong><br />
              보존 근거: 통신비밀보호법<br />
              보존 기간: 3개월
            </li>
            <li>기타 관련 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보존</li>
            <li>구매 내역/영수증은 App Store 규정 및 세법에 따라 일정 기간 보관되며 이용 목적 달성시 즉시 파기</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">4. 개인정보의 파기절차 및 방법</h3>
          <p className="mb-4">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성되거나 보유 기간이 종료된 후에는 해당 정보를 지체 없이 파기합니다.</p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">파기절차</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>회원탈퇴 시 옷장/코디 기록을 포함한 대부분의 개인정보는 즉시 삭제 처리됩니다.</li>
            <li>단, 법령에 따라 보존해야 하는 정보는 별도의 DB 또는 다른 저장 공간으로 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 파기됩니다. 이 때 별도 저장된 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">파기방법</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
            <li>종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">5. 개인정보의 제3자 제공 및 처리 위탁</h3>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">개인정보의 제3자 제공</h4>
          <p className="mb-2">회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>이용자들이 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">개인정보 처리 위탁</h4>
          <p className="mb-2">회사는 서비스 제공을 위해 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁받는 자(수탁자)와 위탁하는 업무의 내용은 아래와 같습니다.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Supabase/Firebase</strong><br />
              위탁 업무 내용: 회원 데이터 저장 및 관리 (DB), 인증, 푸시 알림, 클라우드 인프라 운영<br />
              개인정보 보유 및 이용기간: 회원탈퇴 시 혹은 위탁계약 종료 시까지<br />
              저장 위치: Supabase / Google Cloud Platform 서버 (해외)
            </li>
            <li>
              <strong>Google Analytics (Google LLC)</strong><br />
              위탁 업무 내용: 서비스 이용 통계 분석<br />
              수집하는 정보: 서비스 이용 기록, 접속 로그, 쿠키, 광고 ID 등 (개인 식별 불가 형태)<br />
              보유 및 이용기간: 14개월
            </li>
            <li>
              <strong>AI 분석 서비스 제공 업체 (Google)</strong><br />
              위탁 업무 내용: 옷/코디 사진 기반 스타일 및 속성 분석<br />
              이전되는 개인정보 항목: 옷/코디 사진, 관련 텍스트 설명 (개인 식별 정보 제외)<br />
              개인정보 보유 및 이용기간: 분석 목적 달성 후 즉시 파기 또는 위탁 계약에 따른 기간 (업체 정책 확인 필요)
            </li>
          </ul>
          <p className="mb-4">
            회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
          </p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">국외 이전 동의 고지</h4>
          <p className="mb-2">회사는 서비스 제공 및 이용자 편의 증진 등을 위해 아래와 같이 개인정보를 국외로 이전하고 있습니다.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>이전받는 자: Google LLC (Firebase, Google Analytics, Apple, RevenueCat)</strong><br />
              이전되는 개인정보 항목: [1. 개인정보 수집 항목]에 명시된 항목 중 Firebase 및 Google Analytics 관련 항목 (이메일, 닉네임, 디바이스 정보, 서비스 이용기록, 옷장/코디 기록 데이터, 푸시 토큰 등), 결제 및 구독 정보<br />
              이전되는 국가: 미국<br />
              이전일시 및 방법: 회원가입 및 서비스 이용 시점에 네트워크를 통해 전송<br />
              이전받는 자의 이용목적: 클라우드 서버 운영/관리, 데이터 분석<br />
              보유 및 이용 기간: 회원탈퇴 시 또는 위탁계약 종료 시까지
            </li>
            <li>
              <strong>이전받는 자: AI 분석 서비스 제공 업체 (상기 명시된 업체)</strong><br />
              이전되는 개인정보 항목: 옷/코디 사진, 관련 텍스트 설명 (개인 식별 정보 제외)<br />
              이전되는 국가: [AI 서비스 제공 업체의 서버 위치 국가 - 미국]<br />
              이전일시 및 방법: AI 분석 요청 시점에 네트워크를 통해 전송<br />
              이전받는 자의 이용목적: AI 기반 스타일 분석<br />
              보유 및 이용 기간: 분석 목적 달성 후 즉시 파기 또는 위탁 계약에 따른 기간
            </li>
          </ul>
          <p className="mb-4">이용자는 개인정보의 국외 이전을 원하지 않을 경우 동의를 거부할 수 있으며, 동의 거부 시 국외 이전이 필수적인 서비스의 이용이 제한될 수 있습니다.</p>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">6. 이용자 및 법정대리인의 권리와 그 행사방법</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.</li>
            <li>개인정보 조회, 수정을 위해서는 '프로필 수정' 등의 기능을 이용할 수 있습니다.</li>
            <li>가입해지(동의철회)를 위해서는 앱 내 '회원탈퇴' 기능을 이용할 수 있습니다.</li>
            <li>혹은 개인정보보호책임자에게 이메일로 연락하시면 지체없이 조치하겠습니다.</li>
            <li>이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.</li>
            <li>회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "3. 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">7. 개인정보의 안전성 확보조치</h3>
          <p className="mb-2">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">관리적 조치</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>내부관리계획 수립 및 시행</li>
            <li>개인정보 취급 직원의 최소화 및 교육</li>
            <li>개인정보 처리 시스템 접근 제한</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">기술적 조치</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>개인정보처리시스템 등의 접근권한 관리</li>
            <li>접근통제시스템 설치</li>
            <li>고유식별정보 등의 암호화</li>
            <li>보안프로그램 설치 및 주기적 갱신·점검</li>
            <li>데이터 백업 및 위변조 방지</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">8. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</h3>
          <p className="mb-2">회사는 서비스 이용 과정에서 이용자 편의 제공 및 통계 분석을 위해 쿠키 또는 앱 내 식별자(예: 광고 ID)를 사용할 수 있습니다.</p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">사용 목적</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>이용 형태 및 접속 빈도 분석</li>
            <li>서비스 개선 및 맞춤형 서비스 제공</li>
          </ul>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">수집 거부</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>광고 ID (앱): 이용자는 디바이스 설정에서 광고 ID 수집을 제한하거나 재설정할 수 있습니다. (설정 방법은 OS별로 상이)</li>
            <li>단, 쿠키 또는 식별자 수집을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">9. 개인정보 보호책임자 및 담당자 안내</h3>
          <p className="mb-4">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <h4 className="text-lg font-semibold text-text-dark mt-4 mb-2">개인정보 보호책임자</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>이름: 송경연</li>
            <li>직책: 대표</li>
            <li>연락처: admin@davinci-apps.online</li>
          </ul>
          <p className="mb-2">기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</li>
            <li>대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</li>
            <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)</li>
          </ul>

          <h3 className="text-xl font-bold text-text-dark mt-8 mb-4">10. 개인정보처리방침의 변경</h3>
          <p className="mb-4">
            이 개인정보처리방침은 2025년 12월 1일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항 또는 이메일을 통하여 고지할 것입니다.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
