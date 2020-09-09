import React, {FC} from "react";

import {Thumbnail, Title} from "./BoardThumbnaul.styled";
import {BoardThumbnailType} from "./BoardThumbnail.type";

const BoardThumbnail: FC<BoardThumbnailType> = ({title}) => {
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  )
}

export default BoardThumbnail;
