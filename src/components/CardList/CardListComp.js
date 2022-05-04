// import { Component } from 'react';
import Card from '../Card/CardComp';
import './CardList.css';

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {

        return (
          <Card monster={monster} />
        )
      })}

    </div>
  )
}


// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {

//           return (
//             <Card monster={monster} />
//           )
//         })}

//       </div>
//     )

//   }
// }

export default CardList;
// module.exports = { CardList }