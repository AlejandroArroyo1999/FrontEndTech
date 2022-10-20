import React from 'react';
import { marked } from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here\'s some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\nYou can also make text **bold**... whoa! Or _italic_. Or... wait for it... **_both!_** And feel free to go crazy ~~crossing stuff out~~.\nThere\'s also [links](https://www.freecodecamp.org), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let\'s not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
      output: '<h1 id="welcome-to-my-react-markdown-previewer">Welcome to my React Markdown Previewer!</h1><h2 id="this-is-a-sub-heading">This is a sub-heading...</h2><h3 id="and-heres-some-other-cool-stuff">And here&#39;s some other cool stuff:</h3><p>Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2 backticks.</p><pre><code>// this is multi-line code:function anotherExample(firstLine, lastLine) {if (firstLine == &#39;```&#39; &amp;&amp; lastLine == &#39;```&#39;) {return multiLineCode;}}</code></pre><p>You can also make text <strong>bold</strong>... whoa! Or <em>italic</em>.Or... wait for it... <strong><em>both!</em></strong>And feel free to go crazy <del>crossing stuff out</del>.</p>      <p>There&#39;s also <a href="https://www.freecodecamp.org">links</a>, and</p><blockquote><p>Block Quotes!</p></blockquote><p>And if you want to get really crazy, even tables:</p><table><thead><tr><th>Wild Header</th><th>Crazy Header</th><th>Another Header?</th></tr></thead><tbody><tr><td>Your content can</td><td>be here, and it</td><td>can be here....</td></tr><tr><td>And here.</td><td>Okay.</td><td>I think we get it.</td></tr></tbody></table><ul><li>And of course there are lists.<ul><li>Some are bulleted.<ul><li>With different indentation levels.<ul><li>That look like this.</li></ul></li></ul></li></ul></li></ul><ol><li>And there are numbered lists too.</li><li>Use just 1s if you want!</li><li>And last but not least, let&#39;s not forget embedded images:</li></ol><p><img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" alt="freeCodeCamp Logo"></p>'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let r = marked(event.target.value);
    console.log(r);
    this.setState({
      input: event.target.value,
      output: r
    });
  }

  render() {
    return (
      <div className="App">
        <Editor input={this.state.input} changeCallback={this.handleChange} />
        <Previewer result={this.state.output} />
      </div>
    )
  }
}

class Editor extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <div className="Editor">
              <div className="header">
                  Editor
              </div>
              <textarea id="editor" rows={11} value={this.props.input} onChange={this.props.changeCallback} />
          </div>
      )
  }
}

class Previewer extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <div className="Previewer">
              <div className="header">
                  Previewer
              </div>
              <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.result }}>
                  
              </div>
          </div>
      )
  }
}

export default App;
