import React from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../services/getApi';

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  getBooks = async () => {
    const booksApi = await getBooks();
    this.setState({ books: booksApi });
  }

  componentDidMount = () => {
    this.getBooks();
  }

  render() {
    const { books } = this.state;
    const { bookDetails } = this.props;

    return (
      <div>
        { 
          (books.length > 10) &&
          books.map((book) => {
            const { abbrev: { pt }, name } = book;
            
            return (
            <div key={ name }>
              <Link
                to={ `/acf/${pt}` }
                onClick={ () => bookDetails(book) }                
                >
                { name }
              </Link>
            </div>
            )}  
          )
        }

        {  
          (books.msg) && 
            <>
              <div>{books.msg}</div>
              <div>Faça Login para mais requisições</div>
            </>
        }

        {
          (!books && !books.msg) && <div>Carregando...</div>
        }

      </div>
    )
  }
}
