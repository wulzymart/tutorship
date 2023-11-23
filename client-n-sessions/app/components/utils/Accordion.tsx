"use client"
import Collapse, { CollapseProps } from "rc-collapse";
const Accordion = ({className, items}: {className: string, items: CollapseProps["items"]}) => {
    return (<div className={className}>
    <Collapse
      accordion={true}
      items={items}
      destroyInactivePanel={true}
    />
  </div>)
}
export default Accordion