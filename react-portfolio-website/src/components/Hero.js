import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// <ThemeProvider theme={theme}>
//     <Typography variant="h3">Responsive h3</Typography>
//     <Typography variant="h4">Responsive h4</Typography>
//     <Typography variant="h5">Responsive h5</Typography>
// </ThemeProvider>


// {props.title && <Typography variant="h1" >{props.title}</Typography>}
// {props.subTitle && <Typography variant="h3" >{props.subTitle}</Typography>}
// {props.text && <Typography variant="h3" >{props.text}</Typography>}

function hero(props) {

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    //className="display-1 font-weight-bolder"
    //className="display-4 font-weight-light"
    //className="lead font-weight-light"

    return (
        <ThemeProvider theme={theme}>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <Col md={8} sm={12}>
                            {props.title && 
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h1" fontWeight="fontWeightLight">
                                        {props.title}
                                    </Typography>
                                </ThemeProvider>
                            }
                            {props.subTitle &&
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h3">
                                        {props.subTitle}
                                    </Typography>
                                </ThemeProvider>
                            }
                            {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </ThemeProvider>

    );

}

export default hero;