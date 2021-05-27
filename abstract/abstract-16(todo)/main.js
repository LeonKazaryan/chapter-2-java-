(async () => {

    const db = await IndexedDBStore.open();
    console.log(mockToDoList(10));
    db.seed(mockToDoList);
  
    const model = new ToDoList(db);
    const view = new View();
    const controller = new Controller(model, view);
    
  })();