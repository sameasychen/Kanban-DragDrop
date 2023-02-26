import { IssueItem } from "../App";
import ListItem from "./ListItem";
import { Droppable } from "react-beautiful-dnd";

interface IProps {
  issues: Array<IssueItem>;
  columnItem: string;
  index: number;
}

function List(props: IProps) {
  const { issues, columnItem } = props;

  const currentIssues = issues.filter((item) => {
    return item.column === columnItem;
  });

  currentIssues.sort((a, b)=>{return a.index-b.index})

  return (
    <Droppable droppableId={columnItem} key={columnItem}>
      {(provided) => (
        <div
          className="Lists py-5 px-2 h-full"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="font-semibold text-gray-700">{columnItem}</div>
          {currentIssues.map((item, index) => {
            return <ListItem key={item.id} issue={item} index={index} />;
          })}
        </div>
      )}
    </Droppable>
  );
}

export default List;
