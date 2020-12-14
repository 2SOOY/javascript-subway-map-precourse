import { MESSAGE } from "../../utils/constants/message.js";
import { isRemovableStation } from "../../utils/validations/stationValidation.js";

class StationTable {
  constructor($target, { stationStore, lineStore }) {
    this.$target = $target;
    this.stationStore = stationStore;
    this.lineStore = lineStore;

    this.stationStore.subscribe(this.render);

    this.render();
    this.bindEvents();
  }

  mountTemplate() {
    this.$target.innerHTML = `
      <h3>🚉 지하철 역 목록</h3>
      <table border="1">
        <tr>
          <th>역 이름</th>
          <th>설정</th>
        </tr>
        ${this.createTableRowsHTML(this.stationStore.stations)}
      </table>
    `;
  }

  createTableRowsHTML(names) {
    return names.reduce((html, name) => {
      html += this.TableRowHTML(name);
      return html;
    }, ``);
  }

  TableRowHTML(name) {
    return `
    <tr>
      <td data-name="${name}">${name}</td>
      <td ><button class="station-delete-button">삭제</button></td>
    </tr>
    `;
  }

  bindEvents() {
    this.$target.addEventListener(`click`, this.onClick.bind(this));
  }

  onClick({ target }) {
    if (!target.classList.contains(`station-delete-button`)) return;
    const name = target.closest(`tr`).firstElementChild.dataset.name;

    if (
      !isRemovableStation(this.lineStore.lines, name) ||
      !confirm(MESSAGE.CONFIRM)
    ) {
      return;
    }

    this.stationStore.removeStation(name);
    localStorage.setItem(`STATION`, JSON.stringify(this.stationStore.stations));
  }

  render = () => {
    this.mountTemplate();
  };
}

export default StationTable;