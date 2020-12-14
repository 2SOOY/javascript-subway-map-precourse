export const LineManagerInnerHTML = () => `
    ${InputHTML()}
    ${TableHTML()}
`;

const InputHTML = () => `
  <p>노선 이름</p>
  <Input id="line-name-input" />
  <div>
    <span>상행 종점</span>
    <select id ="line-start-station-selector"></select>
  </div>
  <div>
    <span>하행 종점</span>
    <select id ="line-end-station-selector"></select>
  </div>
  <button id="line-add-button">노선 추가</button>
`;

export const SelectInnerHTML = names => {
  return names.reduce((html, name) => {
    html += OptionHTML(name);
    return html;
  }, ``);
};

const OptionHTML = name => `
  <option value=${name}>${name}</option>
`;

const TableHTML = () => `
  <h3>🚉 지하철 노선 목록</h3>
  <table id="line-table" border="1">
    ${LineHeaderHTML()}
  </table>
`;

export const LineHeaderHTML = () => `
  <tr>
    <th>노선 이름</th>
    <th>상행 종점역</th>
    <th>하행 종점역</th>
    <th>설정</th>
  </tr>
`;

export const LineRowHTML = (name, startStation, endStation) => `
  <tr>
    <td data-name=${name}>${name}</td>
    <td>${startStation}</td>
    <td>${endStation}</td>
    <td><button class="line-delete-button">노선에서 제거</button></td>
  </tr>
`;