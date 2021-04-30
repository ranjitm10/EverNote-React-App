import React from "react"
import ReactQuill from "react-quill"
import debounce from "../../utils/helpers"
import BorderColorIcon from "@material-ui/icons/BorderColor"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles"

class Editor extends React.Component {
  constructor() {
    super()
    this.state = {
      body: "",
      title: "",
      id: "",
    }
  }

  componentDidMount = () => {
    this.setState({
      body: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    })
  }

  componentDidUpdate = () => {
    if (this.state.id !== this.props.selectedNote.id) {
      this.setState({
        body: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon} />
        <input
          className={classes.titleInput}
          placeholder="Note Title..."
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill
          theme="snow"
          value={this.state.body}
          onChange={this.updateEditor}
        />
      </div>
    )
  }

  updateEditor = async (val) => {
    // console.log(val)
    await this.setState({ body: val })
    this.update()
  }

  updateTitle = async (text) => {
    await this.setState({ title: text })
    this.update()
  }

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.body,
    })
    // console.log(this.props.note)
  }, 1500)
}

export default withStyles(styles)(Editor)
