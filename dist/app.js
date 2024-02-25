class Table {
  constructor(table) {
    this.table = table;
    //this.table.addEventListener("click", this.handleClick.bind(this));
  }

  getItem() {
    fetch("./data.josn")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const ItemTable = document.getElementById("table");
const dataTable = new Table(ItemTable);
dataTable.getItem();
