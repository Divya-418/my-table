import React from "react"; 
import {FaPen} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

const ReadOnlyRow = ({eachContact, handleEditClick, handleDeleteClick}) => {
    return(
            <tr>
              <td>{eachContact.fullName}</td>
              <td>{eachContact.address} </td>
              <td>{eachContact.phoneNumber}</td>
              <td>{eachContact.email}</td>
              <td>
                <button type="button" onClick={(event)=>handleEditClick(event, eachContact)}>
                <FaPen/>
                </button>
                <button type="button" onClick={()=>handleDeleteClick(eachContact.id)}>
                 <MdDelete/>
                </button>
              </td>
            </tr>
    )
}

export default ReadOnlyRow