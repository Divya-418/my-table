import React from "react";
import {RiSaveLine} from "react-icons/ri"
import {GiCancel} from "react-icons/gi"
const WritableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr>
            <td>
            <input type="text" name="fullName" placeholder="Enter a name.."  value={editFormData.fullName} onChange={handleEditFormChange} required/>
            </td>
            <td>
            <input type="text" name="address" placeholder="Enter an address.."
             value={editFormData.address} onChange={handleEditFormChange} required/>
            </td>
            <td>
            <input type="text" name="phoneNumber" placeholder="Enter a phone number.."
             value={editFormData.phoneNumber} onChange={handleEditFormChange} required/>
            </td>
            <td>
            <input type="email" name="email" placeholder="Enter an email.."
             value={editFormData.email} onChange={handleEditFormChange} required/>
            </td>
            <td>
                <button type="submit"><RiSaveLine/></button>
                <button type="button" onClick={handleCancelClick}><GiCancel/></button>
            </td>
        </tr>
    )
}

export default WritableRow