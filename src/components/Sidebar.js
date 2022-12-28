import { Search } from '@material-ui/icons';
import React, {useContext} from 'react';
import {store} from "../store";


// class Search extends Component
// {
//   render()
//   {
//     const {value, onChange, children} = this.props;
//     return (
//       <form>
//         {children} <input 
//           type="text"
//           value={value}
//           onChange={onChange}
//         />
//       </form>
//     );
//   }
// }

function Sidebar() {

    // onSearchChange(event)
    // {
    //     const {state, dispatch} = useContext(store);
    //     state = evert.target.value;
    // }

    return (
        <div>
            <br></br>
            <h1>导航栏</h1>
            <br></br>
            {/* <Search
                value = {}
            >
                Search Engine
            </Search> */}
        </div>
    );
}

export default Sidebar;