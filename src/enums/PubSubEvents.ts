enum PSE {
  PostMessage,
  PutCoins,
  PostCategory,
  PutProject,
  PutToDo, // "Put" implies that you can expect the effects to be idempotent.
  PostGroupCount,
  DeleteToDo,
  DeleteProject,
  PutProjectData,
};

export default PSE;