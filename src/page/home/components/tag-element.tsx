import { Fragment } from "react";
import { TagElementProps } from "./tag-element.type";

export default (props: TagElementProps) => {
  return (
    <Fragment>
      <span style={ props.tagStyles }> { props.name } </span>
    </Fragment>
  )
}