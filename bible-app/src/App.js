import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { Books } from './pages/Books';
import Principal from './pages/Principal';
import SuperiorNavigation from './components/SuperiorNavigation';
import { searchByWord } from './services/getApi';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedBook: '',
      received: {},
    }

    this.bookDetails = this.bookDetails.bind(this);
    this.getBywordApi = this.getBywordApi.bind(this);
  }

  bookDetails(book) {
    this.setState({ selectedBook: book })
  }

  async getBywordApi(imputText) {
    this.setState({ received: {} }); // coloquei essa linha para aparecer <Carregando...>
    const received = await searchByWord(imputText);
    this.setState({ received });
  }

  render() {
    const { selectedBook, received } = this.state;
    return (
      <BrowserRouter>
        <Container
          className="shadow p-3 mb-5 bg-white rounded"
          style={{ height: "100%" }}
        >
          <Row style={{ minHeight: "10%" }} >
            <Col xs={12} md={3} style={{ border: "solid 1px grey" }} >
              <h1 style={{ fontSize: "1.3em" }}>BIBLIA API REQUEST</h1>
            </Col>
            <Col xs={12} md={9} style={{ border: "solid 1px grey" }} >
              <SuperiorNavigation getBywordApi={ this.getBywordApi } />
            </Col>
          </Row>
          <Row style={{ minHeight: "90%" }} >
            
            <Col xs={12} md={3} style={{ border: "solid 1px grey" }} >
              <h2 style={{ fontSize: "1em" }}>LIVROS</h2>
              <Books bookDetails={ this.bookDetails } />
            </Col>
            
            
            <Col xs={12} md={9} style={{ border: "solid 1px grey" }} >
              
              <Principal
                selectedBook={ selectedBook }
                getBywordApi={ this.getBywordApi }
                received={ received }
              />

            </Col>
          </Row>
        </Container>
        <footer>HAL-LU-YAH</footer>
      </BrowserRouter>
    )
  }
}

export default App;