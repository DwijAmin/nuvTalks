import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch } from "react-redux";
import { addtobasket } from './Slices'

function Products() {
    const dispatch = useDispatch();
    const Addtocart = () => {
        const Product = {
           
        };
        dispatch(addtobasket(Product))
    }
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap', justifyContent: 'center',
            flex: 20, alignContent: 'center'
        }}>
            <div>
                <Box
                    sx={{

                        '& > :not(style)': {
                            m: 1,
                            width: 298,
                            height: 328,
                            marginTop: 10, marginLeft: 5
                        },
                    }}
                >

                    <Paper elevation={3} />
                    <button onClick={Addtocart}>Add to cart</button>
                </Box>
            </div>

            <div>
                <Box
                    sx={{

                        '& > :not(style)': {
                            m: 1,
                            width: 298,
                            height: 328,
                            marginTop: 10
                        },
                    }}
                >

                    <Paper elevation={3} />
                </Box>
            </div>
            <div>
                <Box
                    sx={{

                        '& > :not(style)': {
                            m: 1,
                            width: 298,
                            height: 328,
                            marginTop: 10
                        },
                    }}
                >

                    <Paper elevation={3} />
                </Box>
            </div>
            <div>
                <Box
                    sx={{

                        '& > :not(style)': {
                            m: 1,
                            width: 298,
                            height: 328,
                            marginTop: 10, marginLeft: 5
                        },
                    }}
                >

                    <Paper elevation={3} />
                </Box>
            </div>
            <div>
                <Box
                    sx={{

                        '& > :not(style)': {
                            m: 1,
                            width: 298,
                            height: 328,
                            marginTop: 10
                        },
                    }}
                >

                    <Paper elevation={3} >
                        <h1>hii</h1>

                    </Paper>
                </Box>
            </div>
            <div>
                <Box
                    sx={{

                        '& > :not(style)': {
                            m: 1,
                            width: 298,
                            height: 328,
                            marginTop: 10, marginLeft: 5
                        },
                    }}
                >

                    <Paper elevation={3} />
                </Box>
            </div>

        </div>

    )
}

export default Products
