import React from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles"
import List from "@material-ui/core/List"
import { Divider, Button } from "@material-ui/core"
import SidebarItem from "../sidebaritem/SidebarItem"

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      addingNote: false,
      title: null,
    }
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel Note" : "Create Note "}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter Note Title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Button
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((note, index) => {
              return (
                <div key={index}>
                  <SidebarItem
                    note={note}
                    index={index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  />
                  <Divider />
                </div>
              )
            })}
          </List>
        </div>
      )
    } else {
      return <div>Loading Notes</div>
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote })
  }

  updateTitle = (txt) => {
    this.setState({ title: txt })
  }

  newNote = () => {
    this.props.newNote(this.state.title)
    this.setState({ title: null, addingNote: false })
  }

  selectNote = (note, index) => {
    this.props.selectNote(note, index)
  }

  deleteNote = (note, index) => {
    console.log("Index : ", index)
    console.log("Selected Note index : ", this.props.selectedNoteIndex)
    this.props.deleteNote(note, index)
  }
}

export default withStyles(styles)(Sidebar)
