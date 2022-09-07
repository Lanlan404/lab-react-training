import NumberBox from "./NumberBox";

function NumbersTable(props) {
    // Generating an array initialized with numbers from 0 to limit
    const numbersList = [...Array(props.limit).keys()].map(number => number + 1);

    const styles = {
        grid: {
            display:    "flex",
            flexWrap:   "wrap",
            width:      "40vw",
            gap:        5
        }
    };

    // Building <NumberBox /> component for each numnber of numbersList
    return <div style={styles.grid}>{numbersList.map(number => <NumberBox number={number} />)}</div>;
}

export default NumbersTable;