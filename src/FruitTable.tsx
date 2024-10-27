import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtoJar } from './store/jarSlice';
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
        <Box sx={{ width: '100%', overflowX: 'hidden' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
                    <Typography variant="h6" id="tableTitle" component="div">
                        Fruit Table
                    </Typography>
                </Toolbar>
                <TableContainer sx={{ maxHeight: 350, minHeight: 350, width: '100%', overflowX: 'auto' }}>
                    <Table sx={{ minWidth: isMobile ? 350 : 350 }} aria-labelledby="tableTitle">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox" />
                                <TableCell>Name</TableCell>
                                {!isMobile && (
                                    <>
                                        <TableCell>Genus</TableCell>
                                        <TableCell>Family</TableCell>
                                        <TableCell>Order</TableCell>
                                    </>
                                )}
                                <TableCell align="right">Calories</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visibleRows.map((row) => (
                                <TableRow hover role="checkbox" key={row.id}>
                                    <TableCell padding="checkbox">
                                        <Button variant="outlined" color="primary" onClick={() => handleAdd({
                                            ...row, // Spread the row to include its properties
                                            nutritions: { calories: row.calories } // Add the nutritions property
                                        })}>
                                            +
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    {!isMobile && (
                                        <>
                                            <TableCell>{row.genus}</TableCell>
                                            <TableCell>{row.family}</TableCell>
                                            <TableCell>{row.order}</TableCell>
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
                    onPageChange={(event, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => {
                        setRowsPerPage(parseInt(event.target.value, 10));
                        setPage(0);
                    }}
                />
            </Paper>
        </Box>
    );
};

export default FruitTable;
