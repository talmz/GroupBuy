import { formatDistanceToNow } from 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import EditGroup from './EditGroup';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    SvgIcon
} from '@mui/material';
import { useState } from 'react';

export default function ProductsList(props) {
    const { products = [], sx } = props;
    const [edit,setEdit] = useState(props.seller_id!== "")


    const handleDeleteClick = (id) => {
        props.handleDelete(id)
    };

    const handleEditClick = (id) => {
        console.log(id)
    };

    return (
        <Card sx={sx}>
            <CardHeader title="Your groups" />
            <List>
                {products.map((product, index) => {
                    const hasDivider = index < products.length - 1;
                    return (
                        <ListItem divider={hasDivider} key={product.id}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>
                                    {product.image ? (
                                        <Box
                                            component="img"
                                            src={product.image}
                                            sx={{
                                                borderRadius: 1,
                                                height: 100,
                                                width: 100
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                borderRadius: 1,
                                                backgroundColor: 'neutral.200',
                                                height: 70,
                                                width: 70
                                            }}
                                        />
                                    )}
                                </div>
                                <div>
                                    <span style={{ fontSize: 23, fontWeight: 'bold' }}>
                                        {`${product.item_name}`}
                                    </span>
                                </div>
                            </div>
                            <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
                                <span style={{ fontSize: 25, fontWeight: 'bold' }}>
                                    {`₪${product.price}`}
                                </span>
                                <br />
                                <span style={{ fontSize: 16 }}>
                                    {`${product.amount_of_people} people left`}
                                </span>
                            </div>
                            <div>
                                <Button onClick={() => handleDeleteClick(product._id)}>
                                    <DeleteIcon />

                                </Button>
                                {edit && <Button onClick={() => handleEditClick(product._id)}>
                                    <EditGroup seller_id={props.seller_id} group={product} ></EditGroup>
                                </Button>}
                            </div>
                        </ListItem>
                    );
                })}
            </List>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                        </SvgIcon>
                    )}
                    size="small"
                    variant="text"
                >
                    View all
                </Button>
            </CardActions>
        </Card>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
    sx: PropTypes.object
};