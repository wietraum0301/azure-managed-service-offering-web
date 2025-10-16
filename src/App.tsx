import React from 'react';

const pricingModels = [
  {
    title: "티켓형",
    price: "100시간/연",
    description: "케이스당 소요시간 차감, 고객 요청에 따라 서비스 제공",
  },
  {
    title: "월고정형",
    price: "300만원/월",
    description: "스탠다드 티어 서비스 제공, 24x7 모니터링 및 운영 지원",
  },
  {
    title: "풀매니지드",
    price: "500만원/월",
    description: "프리미엄레벨 서비스 및 엔드투엔드 운영 지원, 멀티클라우드 가능",
  },
];

const tiers = ["Light", "Economy", "Standard", "Premium"];
const features = [
  {
    category: "Support",
    feature: "Technical/Billing/Account",
    description: "24x7 서비스 지원 및 Azure 전체 계정/청구 관련 Guidance 제공",
    support: [true, true, true, true],
  },
  {
    category: "Monitoring",
    feature: "Resource Monitoring",
    description: "클라우드 자원 모니터링 및 알림 서비스 제공",
    support: [false, true, true, true],
  },
  {
    category: "CloudOperation",
    feature: "Change Management",
    description: "자원 변경 요청 및 관리",
    support: [false, false, true, true],
  },
  {
    category: "CloudOperation",
    feature: "Incident Management",
    description: "장애 발생 시 신속한 프로세스에 의한 복구",
    support: [false, false, true, true],
  },
  {
    category: "CloudOperation",
    feature: "Problem Management",
    description: "장애 원인 분석 및 지속 관리",
    support: [false, false, true, true],
  },
  {
    category: "CloudOperation",
    feature: "Security Management",
    description: "네트워크/보안 정책 관리",
    support: [false, false, true, true],
  },
  {
    category: "Inspection",
    feature: "Cloud Inspection",
    description: "CSP Fundamental 점검 및 환경 진단",
    support: [false, false, true, true],
  },
  {
    category: "Cloud Optimization",
    feature: "Right-sizing & Cost Report",
    description: "자원 비용 최적화 및 리포트 제공",
    support: [false, false, true, true],
  },
  {
    category: "Report",
    feature: "Asset Report",
    description: "자산 현황 리포트 제공",
    support: [false, false, true, true],
  },
  {
    category: "AdvancedOperation",
    feature: "O/S Management",
    description: "운영체제(OS) 관리 및 패치 지원",
    support: [false, false, false, true],
  },
  {
    category: "AdvancedOperation",
    feature: "Middleware Management",
    description: "Cloud 환경에서의 WAS 등 미들웨어 기술 지원",
    support: [false, false, false, true],
  },
  {
    category: "AdvancedOperation",
    feature: "Solution Management",
    description: "고객 맞춤 솔루션 연계 및 통합 지원",
    support: [false, false, false, true],
  },
];

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <header className="bg-blue-800 text-white p-5 flex justify-between items-center">
        <h1 className="font-bold text-2xl">Azure Managed Service Offering</h1>
        <button className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600">문의하기</button>
      </header>
      <section className="max-w-4xl mx-auto mt-8 mb-8 p-6 bg-white rounded shadow">
        <h2 className="font-bold text-xl mb-2">클라우드 운영 효율과 비용 최적화의 시작</h2>
        <p>
          Azure Managed Service는 고객의 비즈니스 상황에 맞춰 다양한 운영 지원과 전문 서비스를 제공합니다.<br/>
          멀티클라우드 관리, 장애 복구, 비용 최적화, 보안 등 엔드투엔드 서비스를 한 번에 경험하세요.
        </p>
      </section>
      <section className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingModels.map((model, idx) => (
          <div key={model.title} className="bg-white rounded shadow p-5">
            <h3 className="font-bold text-lg mb-2">{model.title}</h3>
            <div className="text-blue-700 font-bold text-xl mb-2">{model.price}</div>
            <div>{model.description}</div>
          </div>
        ))}
      </section>
      <section className="max-w-6xl mx-auto bg-white rounded shadow p-6 mb-8">
        <h2 className="font-bold text-xl mb-4">서비스 티어별 지원 비교</h2>
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Feature</th>
              <th className="p-2 border">Description</th>
              {tiers.map(tier => (
                <th key={tier} className="p-2 border">{tier}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, idx) => (
              <tr key={idx}>
                <td className="p-2 border">{f.category}</td>
                <td className="p-2 border">{f.feature}</td>
                <td className="p-2 border">{f.description}</td>
                {f.support.map((sup, sidx) => (
                  <td className="p-2 border text-center" key={sidx}>
                    {sup ? <span className="text-blue-600 font-bold">&#9679;</span> : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <footer className="text-center py-6 text-gray-500">© 2025 Azure Managed Service Strategic Team</footer>
    </div>
  );
}

export default App;
