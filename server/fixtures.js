if (Orders.find().count() === 0) {
  Orders.insert({
    title: 'Noviembre/17/2017',
    id:1,
    tableItems: [
      {
        insumo: "gaseosa",
        cantidad:"3"
      },
      {
        insumo: "papas",
        cantidad:"5"
      },
    ]
  });

  Orders.insert({
    title: 'Noviembre/19/2017',
    id:2,
    tableItems: [
      {
        insumo: "gaseosa",
        cantidad:"3"
      },
      {
        insumo: "papas",
        cantidad:"5"
      },
    ]
  });

  Orders.insert({
    title: 'Noviembre/22/2017',
    id:3,
    tableItems: [
      {
        insumo: "gaseosa",
        cantidad:"3"
      },
      {
        insumo: "papas",
        cantidad:"5"
      },
    ]
  });
}
