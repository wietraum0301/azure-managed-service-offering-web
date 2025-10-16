# Azure Managed Service Offering Web

클라우드 운영 효율과 비용 최적화를 한 번에!  
Azure Managed Service의 다양한 오퍼링과 비교표를 한눈에 볼 수 있는 웹사이트입니다.

## 주요 특징
- 티어별 서비스 비교, 상세 안내, 빠른 문의
- Azure Web App 자동배포 환경

## Quick Start

```bash
npm install
npm run build
npm start
```

## Azure Web App 자동배포

- main 브랜치에 push 시 GitHub Actions로 Azure Web App에 자동배포됩니다.
- Azure Portal에서 Web App 리소스를 생성 후, Publish Profile을 GitHub Secrets(`AZURE_WEBAPP_NAME`, `AZURE_WEBAPP_PUBLISH_PROFILE`)에 등록하세요.

## 문의 및 견적
- celia@megazone.com
