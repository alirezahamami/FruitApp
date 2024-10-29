import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtoJar } from '../store/jarSlice';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Toolbar,
    Typography,
    Paper,
    Button,
    useMediaQuery,
} from '@mui/material';

interface Fruit {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
    nutritions: {
        calories: number;
    };
}

interface TableProps {
    fruitData: Fruit[];
}

const createData = (fruit: Fruit) => ({
    id: fruit.id,
    name: fruit.name,
    genus: fruit.genus,
    family: fruit.family,
    order: fruit.order,
    calories: fruit.nutritions.calories,
});

const FruitTable: React.FC<TableProps> = ({ fruitData }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const dispatch = useDispatch();

    const isMobile = useMediaQuery('(max-width:600px)');

    const rows = fruitData.map(createData);

    const visibleRows = React.useMemo(
        () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [page, rowsPerPage, rows],
    );

    const handleAdd = (fruit: Fruit) => {
        const fruitWithQuantity = { ...fruit, quantity: 1 };
        dispatch(addtoJar(fruitWithQuantity));
    };

    return (
        <Box className="fruit-table-container">
            <Paper className="fruit-table-paper">
                <Toolbar className="fruit-table-toolbar">
                    <Typography variant="h6" id="tableTitle" component="div">
                        Fruit Table
                    </Typography>
                </Toolbar>
                <TableContainer className="fruit-table-container">
                    <Table className={`fruit-table ${isMobile ? 'mobile' : ''}`} aria-labelledby="tableTitle">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox" className="border-right" />
                                <TableCell className="border-right">Name</TableCell>
                                {!isMobile && (
                                    <>
                                        <TableCell className="border-right">Genus</TableCell>
                                        <TableCell className="border-right">Family</TableCell>
                                        <TableCell className="border-right">Order</TableCell>
                                    </>
                                )}
                                <TableCell align="right">Calories</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visibleRows.map((row) => (
                                <TableRow hover role="checkbox" key={row.id}>
                                    <TableCell padding="checkbox" className="border-right">
                                        <Button
                                            variant="outlined"
                                            className="add-button"
                                            onClick={() => handleAdd({
                                                ...row,
                                                nutritions: { calories: row.calories },
                                            })}
                                        >
                                            +
                                        </Button>
                                    </TableCell>
                                    <TableCell className="border-right">{row.name}</TableCell>
                                    {!isMobile && (
                                        <>
                                            <TableCell className="border-right">{row.genus}</TableCell>
                                            <TableCell className="border-right">{row.family}</TableCell>
                                            <TableCell className="border-right">{row.order}</TableCell>
                                        </>
                                    )}
                                    <TableCell align="right">{row.calories}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(_, newPage) => setPage(newPage)}
                    onRowsPerPageChange={({ target: { value } }) => {
                        setRowsPerPage(parseInt(value, 10));
                        setPage(0);
                    }}
                />
            </Paper>
        </Box>
    );
};

export default FruitTable;
