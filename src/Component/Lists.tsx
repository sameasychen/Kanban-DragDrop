import { IssueItem, DroppableItem } from "../App";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";

interface IProps {
  issues: Array<IssueItem>;
  columnsData: Array<string>;
  onDropIssue: (
    draggableId: string,
    source: DroppableItem,
    destination: DroppableItem |null
  ) => void;
}

function Lists(props: IProps) {
  const { issues, columnsData, onDropIssue } = props;

  const handleIssueDrop = (result: any) => {
    console.log("Dropped");
    console.log(result);
    const { draggableId, destination, source } = result;

    onDropIssue(draggableId, source, destination);
  };
  return (
    <div className="Lists">
      <DragDropContext onDragEnd={handleIssueDrop}>
        <div className="flex p-5 min-h-[500px]">
          {columnsData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-4/12 bg-[#f4f5f7] mx-2 rounded"
              >
                <List issues={issues} columnItem={item} index={index} />
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Lists;
