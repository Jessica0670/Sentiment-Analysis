let preload = () => {
  table = loadTable('AFINN-111.txt', 'tsv')
}

let setup = () => {
  noCanvas();
  for(var i = 0; i < table.getRowCount(); i++){
    let row = table.getRow(i);
    let word = row.get(0);
    let score = row.get(1)
    console.log(word, score, 'inside setup for sentiment')
  }
}
preload()
setup()
