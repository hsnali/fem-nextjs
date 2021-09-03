const notes = new Array(15)
  .fill(1)
  .map((_, index) => ({ id: Date.now() + index, title: `Note ${index + 1}` }));

export default notes;
