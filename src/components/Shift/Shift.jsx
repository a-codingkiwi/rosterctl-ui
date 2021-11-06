export default function(props) {
    const {id,name,date,areas} = props;
    
    return (
        <h2 key={id}>{name} - {date}</h2> 
    )
}