import { Component } from 'react';
import './searchbox.css';

const SearchBox = ({ onChangeHandler, thePlaceholder, className }) => {
    return (
        <input className={className} type="search" onChange={onChangeHandler} placeholder={thePlaceholder} />

    )
}
// class SearchBox extends Component {


//     render() {
//         const { onChangeHandler, thePlaceholder, className
//         } = this.props;
//         return (
//             <input className={className} type="search" onChange={onChangeHandler} placeholder={thePlaceholder} />

//         )


//     }
// }

export default SearchBox;