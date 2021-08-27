import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  root: {},
})

interface RenderTree {
  route: string
  name: string
  subLinks?: RenderTree[]
}

export default function ControlledTreeView({ links }) {
  const classes = useStyles()
  const router = useRouter()
  const [expanded, setExpanded] = React.useState([])
  const [selected, setSelected] = React.useState([])

  const handleToggle = (_, nodeIds: any) => {
    setExpanded(nodeIds)
  }

  const handleSelect = (_, nodeIds: any) => {
    setSelected(nodeIds)
    localStorage.setItem('__:ksla_sidebar_selected', nodeIds)
  }

  const handleItemClick = (nodes: RenderTree) => () => {
    if (!nodes.subLinks) {
      router.push(nodes.route)
    }
  }

  const renderTree = (nodes: RenderTree) => {
    return (
      <TreeItem
        key={nodes.route}
        nodeId={nodes.route}
        label={nodes.name}
        onClick={handleItemClick(nodes)}
      >
        {Array.isArray(nodes.subLinks) ? nodes.subLinks.map((node) => renderTree(node)) : null}
      </TreeItem>
    )
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={router.pathname}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {links.map((item) => renderTree(item))}
    </TreeView>
  )
}
