class Account {
  data = [
    {
      title: "Gmail",
      url: "https://mail.google.com/",
      username: "app@gmail.com",
      password: "123456",
    },
    {
      title: "Version",
      url: "https://gitlab.com/",
      username: "app@gmail.com",
      password: "1234",
    },
  ];
  constructor(table) {
    this.table = table;

    //this.table.addEventListener("click", this.handleClick.bind(this));
  }

  addItem() {}

  removeItem() {}

  displyItem() {
    let template = "";
    this.data.forEach((element) => {
      template += `<div>
      <div>Title: <b>${element.title}</b></div>
      <div>URL: <b>${element.url}</b></div>
      <div>Username: <b>${element.username}</b></div>
      <div>Password: <b>${element.password}</b></div>
      </div></br>`;
    });
    this.table.innerHTML += template;
  }

  getItem() {
    /* fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      }); */
  }
}

const ItemTable = document.getElementById("account");
const dataTable = new Account(ItemTable);
dataTable.displyItem();

//const addForm = document.getElementById("formsubmit");
