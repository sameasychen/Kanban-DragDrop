import Lists from "./Component/Lists";
import React, { useState } from "react";

enum ColumnCase {
  Backlog = "BACKLOG",
  Inprogress = "INPROGRESS",
  Done = "DONE",
}

export interface DroppableItem {
  index: number;
  droppableId: string;
}

export interface IssueItem {
  id: string;
  name: string;
  column: string;
  index: number;
}
const columnsData: Array<string> = [
  ColumnCase.Backlog,
  ColumnCase.Inprogress,
  ColumnCase.Done,
];

const defaultIssues: Array<IssueItem> = [
  { id: "001", name: "Issue 1", column: ColumnCase.Backlog, index: 0 },
  { id: "002", name: "Issue 2", column: ColumnCase.Backlog, index: 1 },
  { id: "003", name: "Issue 3", column: ColumnCase.Backlog, index: 2 },
  { id: "004", name: "Issue 4", column: ColumnCase.Inprogress, index: 0 },
  { id: "005", name: "Issue 5", column: ColumnCase.Inprogress, index: 1 },
  { id: "006", name: "Issue 6", column: ColumnCase.Done, index: 0 },
  { id: "007", name: "Issue 7", column: ColumnCase.Done, index: 1 },
  { id: "008", name: "Issue 8", column: ColumnCase.Done, index: 2 },
];

function App() {
  const [issues, setIssues] = useState(defaultIssues);

  const updateIssues = (
    draggableId: string,
    source: DroppableItem,
    destination: DroppableItem | null
  ) => {
    const nextIssues = issues.map((item, index) => {
      if (destination) {
        if (item.column === source.droppableId && item.id === draggableId) {
          item.column = destination.droppableId;
          item.index = destination.index;
        }

        if (
          item.column === destination.droppableId &&
          item.index >= destination.index &&
          item.id !== draggableId
        ) {
          item.index++;
        }

        if (item.column === source.droppableId && item.index > source.index) {
          item.index--;
        }
      }
      return item;
    });
    console.log(nextIssues);
    setIssues(nextIssues);
  };

  return (
    <div className="w-full min-w-[768px]">
      <p className="font-bold text-gray-800 text-xl p-10">Kanban</p>

      <Lists
        issues={issues}
        columnsData={columnsData}
        onDropIssue={updateIssues}
      />
    </div>
  );
}

export default App;
