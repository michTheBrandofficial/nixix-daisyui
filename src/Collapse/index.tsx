import Collapse, { type CollapseProps as TCollapseProps } from './Collapse'
import CollapseContent, { type CollapseContentProps } from './CollapseContent' 
import CollapseDetails from './CollapseDetails'
import CollapseTitle, { type CollapseTitleProps } from './CollapseTitle' 

export type { DetailsProps } from './CollapseDetails'
export type CollapseProps = TCollapseProps
export {
  CollapseContent,
  CollapseDetails,
  CollapseTitle,
  CollapseTitleProps,
  CollapseContentProps
}
export default Collapse
