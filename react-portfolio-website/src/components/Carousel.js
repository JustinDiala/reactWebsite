import React from 'react';
import resume from '../assets/images/resume.jpg';
import linkedin from '../assets/images/linkedin.jpg';
import github from '../assets/images/github.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            items: [
            {
                id: 0,
                title: 'Download my resume',
                subTitle: "Learn more about my experience in the field and hackathons I competed in",
                imgSrc: resume,
                link: '',
                selected: false
            },
            {
                id: 1,
                title: 'Justin Diala',
                subTitle: 'Linkedin profile',
                imgSrc: linkedin,
                link: 'https://www.linkedin.com/in/jdiala/',
                selected: false
            },
            {
                id: 2,
                title: 'Github',
                subTitle: 'Check out my projects!',
                imgSrc: github,
                link: 'https://github.com/JustinDiala',
                selected: false
            },
        ]
        }
    }

    handleCardClick = (id, card) => {

        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={( e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>

                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel