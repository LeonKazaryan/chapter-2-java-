
window.addEventListener("load", () => {
  const list = $("div", { className: "list" });
  document.body.append(list);


  const handleScroll = throttle(() => {
    console.log(list.scrollTop, list.scrollHeight, list.clientHeight);

    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      console.log("ДНО!");
      addItems(list);
    }

  }) (100);

  list.addEventListener("scroll", handleScroll);

  addItems(list);
});


let ITEM_ID = 0;
let isLoading = null;

const addItems = list => {
  if (isLoading !== null) {
    return;
  }


  const spinner = $("div", { className: "list__spinner" }, "Загружаем данные");
  list.append(spinner);

  isLoading = setTimeout(() => {
    spinner.remove();

    if (ITEM_ID >= 30) {
      list.append($("div", { className: "list__message" }, "Новых пунктов нет"));
      isLoading = null;
    } else {
      const items = createArray(() => 
        $("div", { className: "list__item" }, ++ITEM_ID)
      ) (10);

      list.append(...items);

      isLoading = null;
    }

  }, 2000);

}