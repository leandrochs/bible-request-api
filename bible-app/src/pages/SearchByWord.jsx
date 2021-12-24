import React from 'react';

export class SearchByWord extends React.Component {
  render() {
    const { received } = this.props;

    return (
      <div>
        <div>
          {
            received.occurrence && 
            <div>
              Encontramos { received.occurrence } versículos:
            </div>
          }
        </div>
        <div>
          {
            received.verses &&
              (received.verses.map(({ book: { abbrev: { pt } }, chapter, number, text }) => (
              <section key={ text }>
                <span>{ pt.toUpperCase() } </span>
                <span>{ chapter }:</span>
                <span>{ number } </span>
                <span>{ text }</span>
              </section>
            )))
          }
        </div>
        <div>
          {
            received.msg &&
              (<div>É necessário fazer Login para mais requisições</div>)
          }
        </div>
        <div>
          {
            (!received.verses && !received.msg) &&
              (<div>Carregando...</div>)
          }
        </div>

      </div>
    )
  }
}
