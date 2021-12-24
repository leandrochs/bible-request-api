import React, { Component } from "react";
import { getChapterVerses } from "../services/getApi";

class ChapterVerses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedChapter: { 'chapter': 'Carregando', 'verses': [] },
    }
  }

  getChapter = async () => {
    const { pt, chapter } = this.props;
    
    const getChapter = await getChapterVerses(pt, chapter);
    this.setState({ receivedChapter: getChapter })
  }

  componentDidMount = () => {
    this.getChapter();
  }


  render() {
    const { receivedChapter } = this.props;
    const {chapter, verses} = receivedChapter;

    return (
      <div>
        { (chapter.number) ? <h3>Capítulo {chapter.number}</h3> : null }
        {
          (verses) ? verses.map(({ number, text }) => (
            <div key={ number }>
              <span>{ number }</span>
              <span>{ text }</span>
            </div>
          )) : null
        }
      </div>
    )
  }
}

export default ChapterVerses;
