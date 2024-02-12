import React from 'react'
import Card from 'react-bootstrap/Card';
import './CardsForData.css';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item, key }) => {
    return (
        <div className='cardDiv'>
            <Card className='card' bg='light' border='dark' style={{ width: '20rem', margin: '1rem', boxShadow: '5px 2px 5px 2px rgb(0 0 0/ 0.6)', borderRadius: '20px'}}>
                <Card.Body >
                    <Card.Title>{`Project Details`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.sector ? `Sector: ${item.sector}` : "Sector: No info"}</Card.Subtitle>
                    <Card.Text className='cardText text-wrap'>
                        <ol type='number'>
                            <li> {item.topic ? `Topic: ${item.topic}` : "Topic: No Info"} </li>
                            <li> {item.title ? `Title: ${item.title}` : "Title: No Info"} </li>
                            <li> {item.insight ? `Insight: ${item.insight}` : "Insight: No Info"} </li>
                            <li> {item.url ? `URL: ${item.url }`: "URL: No Info"} </li>
                            <li> {item.region ? `Region: ${item.region }` : "Region: No Info"} </li>
                            <li> {item.country ? `Country: ${item.country }` : "Country: No Info"} </li>
                            <li> {item.source ? `Source: ${item.source}` : "Source: No Info"} </li>
                            <li> {item.pestle ? `Pestle: ${item.pestle}` : "Pestle: No Info"} </li>
                            <li> {item.start_year ? `Start Year: ${item.start_year}` : "Start Year: No Info"} </li>
                            <li> {item.end_year ? `End Year: ${item.end_year}` : "End Year: No Info"} </li>
                            <li> {item.added ? `Added: ${item.added}` : "Added: No Info"} </li>
                            <li> {item.published ? `Published: ${item.published}` : "Published: No Info"} </li>
                            <li> {item.intensity ? `Intensity: ${item.intensity}` : "Intensity: No Info"} </li>
                            <li> {item.likelihood ? `Likelihood: ${item.likelihood}` : "Likelihood: No Info"} </li>
                        </ol>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsForData