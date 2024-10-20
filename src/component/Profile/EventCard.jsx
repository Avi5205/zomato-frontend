import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
    return (
        <div>
            <Card sx={{width: 345}}>
                <CardMedia sx={{height: 345}}
                           image="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <CardContent>
                    <Typography variant="h5">Indian Fast Food</Typography>
                    <Typography variant="body2">50% off on your first order</Typography>
                    <div className="py-2 space-y-2">
                        <p>{"Mumbai"}</p>
                        <p className="text-sm text-blue-500">October 20, 2024 12:00 AM </p>
                        <p className="text-sm text-red-500">October 27, 2024 12:00 AM</p>
                    </div>
                </CardContent>
                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}
export default EventCard;