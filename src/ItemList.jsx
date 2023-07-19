function ItemList(props) {
    return (
        <div className="listed">
            <button id="delBtn" onClick={() => { props.delItem(props.id) }}>x</button>
            <li>{props.item}</li>
        </div>
    );
}

export default ItemList;