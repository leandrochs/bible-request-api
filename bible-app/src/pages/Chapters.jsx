import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import { getChapterVerses } from "../services/getApi";
import ChapterVerses from "./ChapterVerses";

class Chapters extends Component {
  constructor() {
    super();
    this.state = {
      pt: '',
      chapter: 1,
      receivedChapter: '',
    }

    this.chaptersList = this.chaptersList.bind(this);
    this.getChapter = this.getChapter.bind(this);
  }

  chaptersList(pt, n) {
    const chapters = []
    const keys = [...Array(n).keys()];
    keys.forEach((key) => chapters.push(key + 1));

    return chapters.map((chapter) => (
      <Col key={ chapter } className="shadow-sm p-1 bg-white rounded" xs={2} md={1} >
        <Link
          to={`/acf/${pt}/${chapter}`}
          // onClick={ () => this.setState({ pt, chapter }) }
          onClick={ () => this.getChapter(`/acf/${pt}/${chapter}`) }
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "2em"}}
          >
            { chapter }
          </div>
        </Link>
      </Col>
    ))
  }

  async getChapter( endOf_URL ) {
    const getChapter = await getChapterVerses(endOf_URL);
    this.setState({ receivedChapter: getChapter });

    // return(
    //   <ChapterVerses receivedChapter={ getChapter } />
    // )
  }
  
  render() {
    const { selectedBook: { abbrev: { pt }, author, group, name, chapters } } = this.props;
    const { receivedChapter } = this.state;

    console.log('chamou render Chapters pt: ', pt);

    return(
      <div>
        <div>Livro: { name }</div>
        <div>Autor: { author }</div>
        <div>Grupo: { group }</div>
        <div>Capítulos: { chapters }</div>
        <Container className="shadow p-3 mb-5 bg-white rounded">
          <Row>
            { this.chaptersList(pt, chapters) }
          </Row>
        </Container>

        <div>
          {
            receivedChapter && 
              <h3>Capítulo { receivedChapter.chapter.number }</h3>
          }
        </div>
        <div>
          {
            receivedChapter && 
              receivedChapter.verses.map(({number, text}) => (
                <div>
                  <span>{number } </span>
                  <span> { text}</span>
                </div>
              ))
          }
        </div>


        {/* <Switch>
          <Route
            // exact
            path={`/acf/${pt}/:id`}
            // render={ ({ match }) => this.getChapter(match) }
          />
        </Switch> */}
      </div>
    )
  }
}

export default Chapters;
