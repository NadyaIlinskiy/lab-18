import React from "react";

/**
 * main MadLibs component
 * @component MadLibs
 * @extends {React.Component}
 */
class MadLibs extends React.Component {
  /**
   * constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      verb: "",
      animal: "",
      number: "",
      adjective: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
/**
 * handles event on change state in the input forms
 * @param {*} event 
 */
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }
/**
 * handles click on Clear button
 * @param {*} e 
 */
  handleClick(e) {
    console.log("clicked");

    Object.keys(this.state).forEach(
      function(key) {
        this.setState({ [key]: "" });
      }.bind(this)
    );
  }
/**
 * render function  
 * @returns HTML content
 */
  render() {
    return (
      <div className="flex-container">
        <div>
          <br />
          <form>
            <label>
              Verb - Past ends in ED
              <div>
                <input
                  type="text"
                  name="verb"
                  value={this.state.verb}
                  onChange={this.handleChange}
                />
              </div>
            </label>

            <label>
              Animal
              <div>
                <input
                  type="text"
                  name="animal"
                  value={this.state.animal}
                  onChange={this.handleChange}
                />
              </div>
            </label>
            <label>
              Number
              <div>
                <input
                  type="text"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </div>
            </label>
            <label>
              Adjective
              <div>
                <input
                  type="text"
                  name="adjective"
                  value={this.state.adjective}
                  onChange={this.handleChange}
                />
              </div>
            </label>
          </form>
          <button className={this.props.className} onClick={this.handleClick}>
            Clear
          </button>
        </div>
        <div>
          <h2>I Can Not Live Anymore: </h2>
          <p align="left">
            My life makes no sense. My life has been{" "}
            <span> {this.state.verb || "..."} </span>by a non-caring{" "}
            <span> {this.state.animal || "..."}</span>. The{" "}
            <span> {this.state.animal || "..."}</span> was only
            <span> {this.state.number || "..."}</span> months old, but it{" "}
            <span> {this.state.verb || "..."}</span> a
            <span> {this.state.adjective || "..."} </span>
            punch.
          </p>
          <p>
            <img
              alt="dead emoji"
              src="https://cdn0.iconfinder.com/data/icons/smashicons-emoticons-outline-vol-2-2/44/173_-_Dead_emoticon_emoji_face-512.png"
            />
          </p>
        </div>
      </div>
    );
  }
}
export default MadLibs;
