import Moment from 'moment';
export const updateStateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const getFormattedDate = (dateTimestamp = " ") => {
    const dateObject = new Date(dateTimestamp.split(" ")[0]);
	return (dateObject !== "Invalid date" ? Moment(dateObject).format('DD MMMM yyyy, hh:mm A') : dateObject) ;
}