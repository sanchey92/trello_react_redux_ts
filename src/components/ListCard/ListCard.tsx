import React, {FC} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Draggable, DraggableProvided} from "react-beautiful-dnd";

import {ListCardTypes} from "./ListCard.types";
import {CardContainer} from "./ListCard.styled";

const ListCard: FC<ListCardTypes> = React.memo(({text, id, listID, index}) => {

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided: DraggableProvided) => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card>
            <CardContent>
              <Typography>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  )
})

export default ListCard;
