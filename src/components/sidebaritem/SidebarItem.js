import React from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import DeleteIcon from "@material-ui/icons/Delete"
import { removeHTMLTags } from "../../utils/helpers"

class SidebarItem extends React.Component {
  render() {
    const { index, note, classes, selectedNoteIndex } = this.props

    return (
      <div key={index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(note, index)}
          >
            <ListItemText
              primary={note.title}
              secondary={removeHTMLTags(note.body.substring(0, 30)) + "..."}
            ></ListItemText>
            <DeleteIcon
              onClick={() => this.deleteNote(note, index)}
              className={classes.deleteIcon}
            />
          </div>
        </ListItem>
      </div>
    )
  }

  selectNote = (note, index) => this.props.selectNote(note, index)
  deleteNote = (note, index) => {
    if (window.confirm(`Are yous ure you want to delete:  ${note.title}`)) {
      this.props.deleteNote(note, index)
    }
  }
}

export default withStyles(styles)(SidebarItem)
