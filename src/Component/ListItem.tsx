import { Draggable } from "react-beautiful-dnd";
import { IssueItem } from "../App";

interface IProps {
  issue: IssueItem;
  index: number
}

function ListItem(props: IProps) {
  const { issue, index } = props;
  return (
    <div>
      <Draggable draggableId={issue.id} index={index}>
          
        {(provided) => (
          <div
            // href="#1"
            className="List h-20 my-2 p-2 bg-white rounded w-full"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
              <div>{issue.name}</div>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default ListItem;
