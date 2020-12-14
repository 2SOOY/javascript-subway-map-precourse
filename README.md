# 🚇 지하철 노선도 미션

> 사용자가 조회, 추가, 삭제 등의 기능을 이용하여 직접 지하철 노선도를 설계하는 어플리케이션입니다.

## 🚀 전반적인 구조

## 🚀 기능 목록

### 0. 메뉴 인터페이스 및 공통 기능

1. 메뉴 버튼 렌더링

   - 4개의 메뉴 버튼을 렌더링 하는 기능
   - 각각의 버튼 클릭시 적절한 메뉴 화면을 보여주는 기능

2. localStorage
   - 로컬스토리지를 통해 저장된 역에 대한 정보를 저장하고 불러오는 기능.
   - 로컬스토리지를 통해 저장된 노선에 대한 정보를 저장하고 불러오는 기능

### 1. 역 관리 메뉴

1. 지하철 역 등록

   - 역을 입력하면 해당 역을 추가하는 기능
   - 역 입력값에 대한 검증 하는 기능
     - 지하철 역 이름 2글자 이상
     - 중복된 이름 등록 X
     - 빈 입력값 X

2. 지하철 역 삭제

   - 등록된 역을 삭제하는 기능
     - 이미 노선에 등록된 역은 삭제 X

3. 지하철 역 목록 조회
   - 저장된 역을 테이블 형태로 보여주는 기능

### 2. 노선 관리 메뉴

1. 지하철 노선 등록

   - 노선 이름 입력과 상행, 하행 종점을 선택하여 노선을 추가하는 기능
   - 추가할 노선을 검증하는 기능
     - 노선 등록 시 상행, 하행 종점역 필요
     - 동일한 역으로 상행, 하행 종점 설정 X
     - 중복된 노선 등록 X

2. 지하철 노선 삭제

   - 등록된 노선을 삭제하는 기능

3. 지하철 노선 목록 조회

   - 저장된 노선을 테이블 형태로 보여주는 기능

### 3. 구간 관리 메뉴

4. 지하철 구간 추가

   - 노선 내에 역을 추가
   - 하나의 역은 다양한 노선에 추가 가능
   - 노선 갈래길 허용 X

5. 지하철 구간 삭제

   - 노선 내의 등록된 역 제거
   - 종점 제거 => 종점 : 다음역
   - 노선 내 역이 2개 이하 => 역 제거 X

### 4. 지하철 노선도 출력 메뉴

    - 모든 노선에 대한 지하철 역 조회

## 🚀 기타

[3WEEK 미션 진행](https://www.notion.so/3WEEK-0584226cc6994eb69918bd1cd9a0477b)
